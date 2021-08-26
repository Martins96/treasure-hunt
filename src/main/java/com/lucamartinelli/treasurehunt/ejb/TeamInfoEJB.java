package com.lucamartinelli.treasurehunt.ejb;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.jboss.logging.Logger;

import com.lucamartinelli.treasurehunt.utils.ResourceUtils;

@ApplicationScoped
public class TeamInfoEJB {
	
	@Inject
	Logger log;
	
	@Inject
	@ConfigProperty(name = "conf-folder-base")
	String confFolderPath;
	
	
	public File getAvatarImage(final String teamName) {
		final File img = new File(confFolderPath + "/users/" + teamName + "/avatar.jpg");
		if (img == null || !img.exists()) {
			log.warn("Image for team " + teamName + " not exists, please create a JPG with name \"avatar.jpg\" "
					+ "under /user/" + teamName + "/avatar.jpg");
			log.warn("Returning default image");
			final InputStream is = ResourceUtils.getAsClasspathResource("META-INF/default/default-avatar.jpg");
			try {
				final File defaultAvatar = File.createTempFile("default-avatar-", "");
				
				try (OutputStream output = new FileOutputStream(defaultAvatar, false)) {
		            is.transferTo(output);
		        }
				
				return defaultAvatar;
			} catch (IOException e) {
				log.error("cannot return any avatar: ", e);
				return null;
			}
			
		} else {
			return img;
		}
	}
	
}
