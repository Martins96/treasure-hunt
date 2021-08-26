package com.lucamartinelli.treasurehunt;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.jboss.logging.Logger;

import com.lucamartinelli.treasurehunt.ejb.StepEJB;
import com.lucamartinelli.treasurehunt.utils.FileUtils;
import com.lucamartinelli.treasurehunt.utils.PassCodeCache;
import com.lucamartinelli.treasurehunt.vo.FileRequestVO;
import com.lucamartinelli.treasurehunt.vo.StepInfoVO;

@ApplicationScoped
@Path("/step")
public class StepRestService {
	
	@Inject
	Logger log;
	
	@Inject
	StepEJB stepEJB;
	
	@POST
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/get-info")
	public Response getInfoStep(final String passCode) {
		final File stepFolder = stepEJB.getStepFolder(passCode);
		if (stepFolder == null) {
			log.info("Passcode " + passCode + " is not valid");
			return Response.status(400).entity("{\"result\":\"Passcode errato\"}").build();
		}
		
		StepInfoVO stepInfoVO;
		try {
			stepInfoVO = stepEJB.getStepFile(stepFolder);
		} catch (FileNotFoundException e) {
			log.error(e);
			return Response.serverError().entity(e.getMessage()).build();
		}
		
		return Response.ok(stepInfoVO).build();
	}
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/get-enigma-file")
	public Response getEnigmaFileContent(final FileRequestVO req) {
		final File stepFolder = stepEJB.getStepFolder(req.getStepcode());
		if (stepFolder == null) {
			log.info("Passcode " + req.getStepcode() + " is not valid");
			return Response.status(400).entity("Passcode errato").build();
		}
		
		String resp = null;
		try {
			resp = stepEJB.getFileContent(stepFolder, req.getFilename());
		} catch (IOException e) {
			log.error("IOException in get file content: ", e);
		}
		
		if (resp == null)
			return Response.status(502).entity("Resource not found").build();
		return Response.ok(resp).build();
	}
	
	
	@GET
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	@Path("/get-resource/{passCode}")
	public Response getResourcesList(@PathParam("passCode") final String passCode) {
		
		final File stepFolder = stepEJB.getStepFolder(passCode);
		if (stepFolder == null) {
			log.info("Passcode " + passCode + " is not valid");
			return Response.status(400).entity("Passcode errato").build();
		}
		final String stepId = stepFolder.getAbsolutePath()
				.substring(stepFolder.getAbsolutePath().replace('\\', '/').lastIndexOf("/") + 1);
		
		
        File resourceFile = null;
		try {
			resourceFile = PassCodeCache.getResourceFile(stepId);
		} catch (FileNotFoundException e) {
			log.error("Step folder '" + stepId + "' not found");
			return Response.serverError().build();
		}
        
        if (resourceFile == null)
			return Response.noContent().build();
        
        final String filetype = FileUtils.fileType(resourceFile);
        
        ResponseBuilder response = Response.ok((Object) resourceFile);
        response.header("Content-Disposition", "attachment;filename=" + resourceFile.getName());
        response.header("Content-File-Type", filetype);
        return response.build();
	}
	
	
}
