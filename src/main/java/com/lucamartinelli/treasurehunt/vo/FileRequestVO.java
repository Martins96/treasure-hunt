package com.lucamartinelli.treasurehunt.vo;

import java.io.Serializable;

public class FileRequestVO implements Serializable {
	
	
	private static final long serialVersionUID = -7431161244253183261L;
	
	
	private String stepcode;
	private String filename;
	
	public FileRequestVO() {
	}
	
	public FileRequestVO(String stepcode, String filename) {
		super();
		this.stepcode = stepcode;
		this.filename = filename;
	}

	public String getStepcode() {
		return stepcode;
	}
	public void setStepcode(String stepcode) {
		this.stepcode = stepcode;
	}

	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((filename == null) ? 0 : filename.hashCode());
		result = prime * result + ((stepcode == null) ? 0 : stepcode.hashCode());
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
		FileRequestVO other = (FileRequestVO) obj;
		if (filename == null) {
			if (other.filename != null)
				return false;
		} else if (!filename.equals(other.filename))
			return false;
		if (stepcode == null) {
			if (other.stepcode != null)
				return false;
		} else if (!stepcode.equals(other.stepcode))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "FileRequestVO [stepcode=" + stepcode + ", filename=" + filename + "]";
	}
	
	
	
}
