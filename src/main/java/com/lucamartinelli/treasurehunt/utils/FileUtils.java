package com.lucamartinelli.treasurehunt.utils;

import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

import org.jboss.logging.Logger;

public class FileUtils {
	
	private static final Logger log = Logger.getLogger(FileUtils.class.getCanonicalName());
	
	public static String getFileExtension(final File file) {
		if (file == null)
			return "";
		final String filename = file.getName();
		return Optional.ofNullable(filename)
			      .filter(f -> f.contains("."))
			      .map(f -> f.substring(filename.lastIndexOf(".") + 1))
			      .orElse("");
	}
	
	public static String getBase64FromFile(final File file) {
		try {
			final byte[] fileContent = org.apache.commons.io.FileUtils.readFileToByteArray(file);
			return Base64.getEncoder().encodeToString(fileContent);
		} catch (IOException e) {
			log.error("Error during get base64 from file: ", e);
			return null;
		}
	}
	
	
	public static String fileType(File f) {
		
		if (f == null) {
			log.debug("Cannot recognize type: File is null");
			return null;
		}
		
		if (!f.isFile() || f.getName().indexOf(".") == -1) {
			log.debug("Cannot recognize type for file " + f.getName());
			return null;
		}
		
		final String fileExtension = f.getName().substring(f.getName().lastIndexOf(".") + 1);
		
		switch(fileExtension.toLowerCase()) {
			case "png":
			case "jpg":
			case "jpeg":
				return "image";
				
			case "txt":
				return "txt";
				
			case "html":
			case "htm":
				return "html";
				
			case "pdf":
				return "pdf";
				
			case "mp4":
				return "mp4";
				
			case "off":
				return "off";
			
			default:
				log.info("File extension '" + fileExtension + "' is not supported");
				return null;
			
		}
		
		
	}
	
}
