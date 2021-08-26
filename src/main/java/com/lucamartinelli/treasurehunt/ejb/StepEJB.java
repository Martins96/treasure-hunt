package com.lucamartinelli.treasurehunt.ejb;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.lucamartinelli.treasurehunt.utils.FileUtils;
import com.lucamartinelli.treasurehunt.utils.PassCodeCache;
import com.lucamartinelli.treasurehunt.vo.StepInfoVO;

@ApplicationScoped
public class StepEJB {
	
	@Inject
	Logger log;
	
	private static final Gson gson = new Gson();
	
	public File getStepFolder(final String passcode) {
		final String filePath = PassCodeCache.getStepFolder(passcode);
		
		if (filePath == null)
			return null;
		
		return new File(filePath);
	}
	
	public StepInfoVO getStepFile(final File stepFolder) throws FileNotFoundException {
		final File stepDescriptionFile = new File(stepFolder.getAbsolutePath() + "/info.json");
		final JsonReader reader = new JsonReader(new FileReader(stepDescriptionFile));
		final StepInfoVO stepInfoVO = gson.fromJson(reader, StepInfoVO.class);
		
		return stepInfoVO;
	}
	
	public String getFileContent(final File stepFolder, final String filename)
			throws IOException {
		final File requestedFile = new File(stepFolder.getAbsolutePath() + "/" + filename);
		final String fileExtension = FileUtils.getFileExtension(requestedFile);
		switch (fileExtension.toLowerCase()) {
		case "jpg":
		case "jpeg":
			return getImageFileContent(requestedFile, "data:image/jpeg;base64,");
		case "png":
			return getImageFileContent(requestedFile, "data:image/png;base64,");
		case "gif":
			return getImageFileContent(requestedFile, "data:image/gif;base64,");

		default:
			// try to read content as clear string
			return getTextFileContent(requestedFile);
		}
		
	}
	
	private String getTextFileContent(final File requestedFile)
			throws IOException {
		final StringBuffer sb = new StringBuffer();
		for (String l : Files.readAllLines(requestedFile.toPath())) {
			if (sb.length() != 0)
				sb.append('\n');
			sb.append(l);
		}
		
		return sb.toString();
	}
	
	private String getImageFileContent(final File requestedFile, final String base64Suffix)
			throws IOException {
		return base64Suffix.concat(FileUtils.getBase64FromFile(requestedFile));
		
	}
	
	
}
