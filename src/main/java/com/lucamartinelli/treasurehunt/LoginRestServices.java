package com.lucamartinelli.treasurehunt;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.logging.Logger;

import com.lucamartinelli.treasurehunt.ejb.LoginEJB;

@Path("/login")
@ApplicationScoped
public class LoginRestServices {
	
	@Inject
	Logger log;
	
	@Inject
	LoginEJB loginEJB;
	
	
	@POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    @Path("/")
    public Response login(final String credential) {
		
		try {
			final String jwt = loginEJB.login(credential);
			if (jwt != null && !jwt.isEmpty())
				return Response.ok(jwt).header("content-type", "text/plain").build();
			else
				return Response.status(403).entity("Invalid credential").header("content-type", "text/plain").build();
		} catch (Exception e) {
			log.error("Error in login execution", e);
			return Response.serverError().entity(e.getMessage()).header("content-type", "text/plain").build();
		}
		
	}
	
	@POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    @Path("/validate")
    public Response validate(final String token) {
		
		try {
			final boolean result = loginEJB.validate(token);
			if (result)
				return Response.ok(result).header("content-type", "text/plain").build();
			else
				return Response.status(403).entity(result).header("content-type", "text/plain").build();
		} catch (Exception e) {
			log.error("Error in login execution", e);
			return Response.serverError().entity(e.getMessage()).header("content-type", "text/plain").build();
		}
		
	}
	
	
}
