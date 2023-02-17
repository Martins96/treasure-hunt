package com.lucamartinelli.treasurehunt.ejb;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.Properties;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

import io.smallrye.jwt.auth.principal.DefaultJWTParser;
import io.smallrye.jwt.auth.principal.JWTAuthContextInfo;
import io.smallrye.jwt.auth.principal.JWTParser;
import io.smallrye.jwt.auth.principal.ParseException;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.jboss.logging.Logger;
import org.jose4j.base64url.internal.apache.commons.codec.binary.Base64;

import com.lucamartinelli.treasurehunt.utils.GenerateToken;

@RequestScoped
public class LoginEJB {
	
	@Inject
	Logger log;
	
	@Inject
	@ConfigProperty(name = "users-properties-file")
	String filePath;
	
	@Inject
	@ConfigProperty(name = "mp.jwt.decrypt.key.location")
	String decryptKey;
	@Inject
	@ConfigProperty(name = "mp.jwt.verify.publickey.location")
	String signCheckKey;
	@Inject
	@ConfigProperty(name = "jwt.issuer", defaultValue = "Luca_Approver")
	String approver;
	
	
	
	public String login(final String credential) throws IOException {
		log.debug("Log in with credential: " + credential);
		final Properties propFile = new Properties();
		propFile.load(new FileInputStream(new File(filePath)));
		log.debug("Users file loaded");
		
		String teamName = null;
		
		for(final String k : propFile.stringPropertyNames()) {
			final String v = propFile.getProperty(k);
			if (credential.equals(v)) {
				teamName = (String) k;
				break;
			}
		}
		
		log.debug("Team name found for " + credential + " is " + teamName);
		
		if (teamName == null) {
			log.debug("Wrong credentials");
			return null;
		}
		
		final String jwt = GenerateToken.generate(teamName);
		
		log.debug("Final JWT: " + jwt);
		
		return jwt;
	}
	
	public boolean validate(final String jweString) {
		
		log.debug("Starting validation: " + jweString);
		try {
			final PrivateKey privateKey = loadPrivateKey(decryptKey);
			final PublicKey publicKey = loadPublicKey(signCheckKey);
			final JWTParser parser = getParser(privateKey, publicKey);
			JsonWebToken jws = parser.decrypt(jweString, privateKey);
			log.debug("Decrypted: " + jws.getRawToken());
			final JsonWebToken jwt = parser.parse(jws.getRawToken());
			log.debug("Sign is correct: " + jwt.getRawToken());
		} catch (NoSuchAlgorithmException | InvalidKeySpecException | ParseException | IOException e) {
			log.error("Error during token validation: ", e);
			return false;
		} finally {
			log.debug("Validation finished");
		}
		return true;
	}
	
	
	
	public PrivateKey loadPrivateKey(String privateKeyStr) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
		try (final InputStream in = Thread.currentThread().getContextClassLoader().getResourceAsStream(privateKeyStr)) {
			final String key = new String(in.readAllBytes(), Charset.defaultCharset());

		    final String privateKeyPEM = key
		      .replace("-----BEGIN PRIVATE KEY-----", "")
		      .replaceAll(System.lineSeparator(), "")
		      .replace("-----END PRIVATE KEY-----", "");

		    final byte[] encoded = Base64.decodeBase64(privateKeyPEM);

		    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(encoded);
		    return keyFactory.generatePrivate(keySpec);
		}
	}

	public PublicKey loadPublicKey(String publicKeyStr) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
		try (final InputStream in = Thread.currentThread().getContextClassLoader().getResourceAsStream(publicKeyStr)) {
			final String key = new String(in.readAllBytes(), Charset.defaultCharset());

		    final String publicKeyPEM = key
		      .replace("-----BEGIN PUBLIC KEY-----", "")
		      .replaceAll(System.lineSeparator(), "")
		      .replace("-----END PUBLIC KEY-----", "");
		    
		    final byte[] encoded = Base64.decodeBase64(publicKeyPEM);

		    final KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		    final X509EncodedKeySpec keySpec = new X509EncodedKeySpec(encoded);
		    return keyFactory.generatePublic(keySpec);
		}
	}
	
	private JWTParser getParser(PrivateKey privateKey, PublicKey publicKey) throws NoSuchAlgorithmException, InvalidKeySpecException, IOException {
		final JWTAuthContextInfo authCtx = new JWTAuthContextInfo(publicKey, approver);
		return new DefaultJWTParser(authCtx);
	}
	
}
