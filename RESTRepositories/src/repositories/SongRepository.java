package repositories;

import entities.Song;
import java.util.ArrayList;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaQuery;

public class SongRepository extends BaseRepository<Song> {

    @Override
    public void guardar(Song entidad) {
        EntityManager em = createEntityManager();
        em.getTransaction().begin();
        em.persist(entidad);
        em.getTransaction().commit();
    }

    @Override
    public void eliminar(int id) {
        EntityManager em = createEntityManager();
        em.getTransaction().begin();
        Song elm = em.find(Song.class, id);
        if (elm != null) {
            em.remove(elm);
        }
        em.getTransaction().commit();
    }

    @Override
    public void actualizar(Song entidad) {
        EntityManager em = createEntityManager();
        em.getTransaction().begin();
        Song act = em.find(Song.class, entidad.getId());
        if (act != null) {
            act.setName(entidad.getName());
            act.setAuthor(entidad.getAuthor());
            act.setAlbum(entidad.getAlbum());
            act.setYear(entidad.getYear());
            act.setTime(entidad.getTime());
        }
        em.getTransaction().commit();
    }

    @Override
    public Song buscarPorId(int id) {
        EntityManager em = createEntityManager();
        em.getTransaction().begin();
        Song sng = em.find(Song.class, id);
        em.getTransaction().commit();
        return sng;
    }

    @Override
    public ArrayList<Song> consultarTodos() {
        EntityManager em = createEntityManager();
        em.getTransaction().begin();
        CriteriaQuery criteria = em.getCriteriaBuilder().createQuery();
        
        criteria.select(criteria.from(Song.class));
        Query query = em.createQuery(criteria);
        ArrayList<Song> todos = new ArrayList(query.getResultList());
        
        em.getTransaction().commit();
        return todos;
    }

    @Override
    public ArrayList<Song> consultarPorNombre(String busqueda) {
        ArrayList<Song> todos = consultarTodos();
        ArrayList<Song> matches = new ArrayList<>();
        
        for (Song sng : todos) {
            if (sng.getName().toLowerCase().contains(busqueda.toLowerCase())) {
                matches.add(sng);
            }
        }
        
        return matches;
    }
    
}
