package com.lucamartinelli.treasurehunt.utils;

import java.time.Duration;

import org.apache.commons.lang3.math.NumberUtils;
import org.eclipse.microprofile.config.Config;
import org.eclipse.microprofile.config.ConfigProvider;
import org.jboss.logging.Logger;

import io.smallrye.jwt.build.Jwt;

public class GenerateToken {

	private static final Logger log = Logger.getLogger(GenerateToken.class.getCanonicalName());

	public static String generate(String team) {
		final Config config = ConfigProvider.getConfig();
		final long expirationDelta = NumberUtils.toLong(config
				.getOptionalValue("jwt.expiration.delta", String.class)
				.orElse("86400000"), 86400000L); // valid for 24h
		final String issuer = config.getOptionalValue("jwt.issuer", String.class)
				.orElse("Luca_Approver");
		final long currentTime = System.currentTimeMillis() ;
		
		final String token = Jwt
				.claims()
				.expiresIn(Duration.ofMillis(expirationDelta))
				.issuer(issuer)
				.upn(team)
				.groups("competitor")
				.issuedAt(currentTime)
				.innerSign()
				.encrypt();
		
		
		log.debug("Generated JWT: " + token);
		return token;
	}
}
