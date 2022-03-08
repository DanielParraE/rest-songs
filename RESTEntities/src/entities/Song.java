package entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "songs")
public class Song implements Serializable {

    public Song() {
    }

    public Song(int id, String name, String album, String releasedYear, String author, String durationTime) {
        this.id = id;
        this.name = name;
        this.album = album;
        this.releasedYear = releasedYear;
        this.author = author;
        this.durationTime = durationTime;
    }

    public Song(String name, String album, String releasedYear, String author, String durationTime) {
        this.name = name;
        this.album = album;
        this.releasedYear = releasedYear;
        this.author = author;
        this.durationTime = durationTime;
    }

    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "idsongs")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    @Column(name = "name")
    private String name;
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    @Column(name = "album")
    private String album;
    
    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }
    
    @Column(name = "releasedYear")
    private String releasedYear;
    
    public String getYear() {
        return releasedYear;
    }

    public void setYear(String releasedYear) {
        this.releasedYear = releasedYear;
    }
    
    @Column(name = "author")
    private String author;
    
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    
    @Column(name = "durationTime")
    private String durationTime;
    
    public String getTime() {
        return durationTime;
    }

    public void setTime(String durationTime) {
        this.durationTime = durationTime;
    }
    
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) id;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Song)) {
            return false;
        }
        Song other = (Song) object;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Song{" + "id=" + id + ", name=" + name + ", album=" + album + ", releasedYear=" + releasedYear + ", author=" + author + ", durationTime=" + durationTime + '}';
    }

}
