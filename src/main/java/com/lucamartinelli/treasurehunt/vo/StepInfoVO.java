package com.lucamartinelli.treasurehunt.vo;

import java.io.Serializable;


public class StepInfoVO implements Serializable {
	
	
	private static final long serialVersionUID = 3792283547702928829L;
	
	
	private String result;
	private String description;
	private String enigmaTextFile;
	private String enigmaImageFile;
	private String enigmaVideo;
	
	public StepInfoVO() {
	}

	public StepInfoVO(String result, String description, String enigmaTextFile, String enigmaImageFile,
			String enigmaVideo) {
		super();
		this.result = result;
		this.description = description;
		this.enigmaTextFile = enigmaTextFile;
		this.enigmaImageFile = enigmaImageFile;
		this.enigmaVideo = enigmaVideo;
	}

	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getEnigmaTextFile() {
		return enigmaTextFile;
	}
	public void setEnigmaTextFile(String enigmaTextFile) {
		this.enigmaTextFile = enigmaTextFile;
	}

	public String getEnigmaImageFile() {
		return enigmaImageFile;
	}
	public void setEnigmaImageFile(String enigmaImageFile) {
		this.enigmaImageFile = enigmaImageFile;
	}

	public String getEnigmaVideo() {
		return enigmaVideo;
	}
	public void setEnigmaVideo(String enigmaVideo) {
		this.enigmaVideo = enigmaVideo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((enigmaImageFile == null) ? 0 : enigmaImageFile.hashCode());
		result = prime * result + ((enigmaTextFile == null) ? 0 : enigmaTextFile.hashCode());
		result = prime * result + ((enigmaVideo == null) ? 0 : enigmaVideo.hashCode());
		result = prime * result + ((this.result == null) ? 0 : this.result.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StepInfoVO other = (StepInfoVO) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (enigmaImageFile == null) {
			if (other.enigmaImageFile != null)
				return false;
		} else if (!enigmaImageFile.equals(other.enigmaImageFile))
			return false;
		if (enigmaTextFile == null) {
			if (other.enigmaTextFile != null)
				return false;
		} else if (!enigmaTextFile.equals(other.enigmaTextFile))
			return false;
		if (enigmaVideo == null) {
			if (other.enigmaVideo != null)
				return false;
		} else if (!enigmaVideo.equals(other.enigmaVideo))
			return false;
		if (result == null) {
			if (other.result != null)
				return false;
		} else if (!result.equals(other.result))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "StepInfoVO [result=" + result + ", description=" + description + ", enigmaTextFile=" + enigmaTextFile
				+ ", enigmaImageFile=" + enigmaImageFile + ", enigmaVideo=" + enigmaVideo + "]";
	}
	
	
	
}
