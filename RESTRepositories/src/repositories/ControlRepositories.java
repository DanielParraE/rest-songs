package repositories;

public class ControlRepositories {

    private static SongRepository sr;

    public static SongRepository getSongRepository() {
        if (sr == null) {
            sr = new SongRepository();
            return sr;
        } else {
            return sr;
        }
    }

}
