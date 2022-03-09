package rest;

import com.google.gson.Gson;
import entities.Song;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import repositories.ControlRepositories;

@Path("/song/")
public class SongResource {

    @Context
    private UriInfo context;
    
    public SongResource() {
    }

    /**
     * Retrieves representation of an instance of rest.SongResource
     * @return an instance of entities.Song
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/allsongs/")
    public Response getSongs() {
        
        Gson gson = new Gson();
        
        ArrayList<Song> sngs = ControlRepositories.getSongRepository().consultarTodos();
        
        String lstTxt = gson.toJson(sngs);
        
        return Response.ok().entity(lstTxt).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/songidrequest/{id}")
    public Response getSong(@PathParam("id") int id) {
        return Response.ok().entity(ControlRepositories.getSongRepository().buscarPorId(id)).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/songnamerequest/{name}")
    public Response getSongsName(@PathParam("name") String name) {
        
        Gson gson = new Gson();
        
        ArrayList<Song> sngs = ControlRepositories.getSongRepository().consultarPorNombre(name);
        
        String lstTxt = gson.toJson(sngs);
        
        return Response.ok().entity(lstTxt).build();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/addsong/")
    public Response postSong(String song) {
        
        Gson gson = new Gson();
        
        Song sng = gson.fromJson(song, Song.class);
        
        ControlRepositories.getSongRepository().guardar(sng);
        
        return Response.ok().entity("Si llegho master.").build();
        
    }
    
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/deletesong/{id}")
    public Response deleteSong(@PathParam("id") int id) {
        
        ControlRepositories.getSongRepository().eliminar(id);
        
        return Response.ok().entity("Ya se elimino master.").build();
        
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/editsong/")
    public Response editSong(String song) {
        
        //System.out.println(sng);
        
        Gson gson = new Gson();
        
        System.out.println(song);
        
        Song sng = gson.fromJson(song, Song.class);
        
        ControlRepositories.getSongRepository().actualizar(sng);
        
        return Response.ok().entity("Si se actualizo master.").build();
        
    }
    
}
