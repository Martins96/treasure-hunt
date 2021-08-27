package com.lucamartinelli.treasurehunt.utils;

import java.io.File;
import java.io.FileFilter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.microprofile.config.ConfigProvider;
import org.jboss.logging.Logger;

public class PassCodeCache {

	private final static Logger log = Logger.getLogger(PassCodeCache.class.getCanonicalName());

	private static Map<String, String> passCodeMap = new HashMap<>(0);
	

	private static void populateMap() {
		String confBasePath = ConfigProvider.getConfig().getValue("conf-folder-base", String.class);
		final File stepsRoot = new File(confBasePath + "/steps");
		Arrays.asList(stepsRoot.list()).forEach(folder -> {
			final File passcodeFile = new File(stepsRoot.getAbsolutePath() + "/" + folder + "/passcode.txt");
			try {
				final String passcode = Files.readAllLines(passcodeFile.toPath(), Charset.defaultCharset()).get(0);
				passCodeMap.put((stepsRoot.getAbsolutePath() + "/" + folder), passcode);
			} catch (IOException e) {
				log.error(e);
			}
		});

		log.debug("Cache map is loaded, size: " + passCodeMap.size());
	}

	public static String getStepFolder(final String passcode) {
		if (passCodeMap.size() == 0) {
			populateMap();
		}

		for (Map.Entry<String, String> e : passCodeMap.entrySet()) {
			if (e.getValue().equals(passcode)) {
				return e.getKey();
			}
		}
		return null;
	}

	public static File getResourceFile(final String step) throws FileNotFoundException {
		String confBasePath = ConfigProvider.getConfig().getValue("conf-folder-base", String.class);
		final File stepsFolder = new File(confBasePath + "/steps/" + step);

		log.debug("Checking if step folder requested exists, requested step: " + step);
		log.debug("Reading resurce file from folder: " + stepsFolder.getAbsolutePath());

		if (!stepsFolder.exists() || !stepsFolder.isDirectory()) {
			log.info("Step folder for step " + step + " not exists");
			throw new FileNotFoundException();
		}

		log.debug("Step folder exists");

		final File[] resourceFileArray = stepsFolder.listFiles(FILE_FILTER_RESOURCE);
		if (resourceFileArray.length < 1) {
			log.debug("resource file not prensent, no resources for this step");
			return null;
		}
			
		final File resourceFile = resourceFileArray[0];

		if (!resourceFile.exists() || !resourceFile.isFile()) {
			log.debug("resource file not prensent, no resources for this step");
			return null;
		}

		log.debug("resource file is present: " + resourceFile.getName());
		return resourceFile;
	}

	
	
	private static final FileFilter FILE_FILTER_RESOURCE = new FileFilter() {
		
		@Override
		public boolean accept(File f) {
			if (f.isFile() && f.getName().toLowerCase().startsWith("resource"))
				return true;
			 return false;
		}
	};

}
