package com.lucamartinelli.treasurehunt;

import java.io.File;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.jwt.JsonWebToken;
import org.jboss.logging.Logger;

import com.lucamartinelli.treasurehunt.ejb.TeamInfoEJB;

@RequestScoped
@Path("/team-info")
public class TeamInfoRestService {
	
	@Inject
	Logger log;
	
	@Inject
	JsonWebToken jwt;
	
	@Inject
	TeamInfoEJB teamInfoEJB;
	
	@GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/name")
	public Response getName() {
		if (jwt == null)
			return Response.status(403).entity("Not logged").build();
		
		return Response.ok(((String)jwt.getClaim("upn")).replace('_', ' ')).build();
	}
	
	
	@GET
	@Produces("image/jpg")
	@Path("/avatar")
	public Response getTeamAvatar() {
		if (jwt == null)
			return Response.status(403).entity("Not logged").build();
		
		log.debug("Checking avatar for: " + jwt.getClaim("upn"));
		final File file = teamInfoEJB.getAvatarImage(jwt.getClaim("upn"));
		if (file == null)
			return Response.serverError().build();
	    return Response.ok(file, "image/jpg").header("Inline", "filename=\"" + file.getName() + "\"")
	            .build();
	}
	
}
