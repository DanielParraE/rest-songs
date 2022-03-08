package repositories;

import java.util.ArrayList;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public abstract class BaseRepository<T> {
    
    public abstract void guardar(T entidad);
    public abstract void eliminar(int id);
    public abstract void actualizar(T entidad);
    public abstract T buscarPorId(int id);
    public abstract ArrayList<T> consultarTodos();
    public abstract ArrayList<T> consultarPorNombre(String busqueda);
    
    public EntityManager createEntityManager(){
        EntityManagerFactory emFactory = Persistence.createEntityManagerFactory("RESTEntitiesPU");
        EntityManager em = emFactory.createEntityManager();
        return em;
    }
    
}
