<template>
  <div>
    <button @click="goToPage('home')">Go to home</button>
    <h1>Ranking</h1>
    <table>
      <tr>
        <th>Ranking</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Points</th>
      </tr>
      <tr v-for="(song, i) in songs" :key="i">
        <td>Place Number {{ i + 1 }}</td>
        <td>{{ song.title }}</td>
        <th>{{ song.artist }}</th>
        <th>{{ song.allPoints }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Rankingpage",

  data() {
    return {
      songs: [],
    };
  },
  mounted() {
    this.fetchSongs();
  },

  methods: {
    goToPage(page) {
      this.$emit("change-page", page);
    },

    fetchSongs() {
      const url = "http://webservies.be/eurosong/Songs";

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((songs) => {
          this.fetchVotes(songs);
          this.fetchArtists(songs);
        });
    },

    fetchArtists(songs) {
      const url = "http://webservies.be/eurosong/Artists";

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((artists) => {
          songs.map((song) => {
            const artist = artists.find((artist) => artist.id == song.artist);

            song.artist = artist.name;

            return song;
          });

          this.songs = songs;
        });
    },

    fetchVotes(songs) {
      const url = "http://webservies.be/eurosong/Votes";

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((votes) => {
          let allvotes = 0;
          songs.map((song) => {
            song.allPoints = 0;

            votes
              .filter((vote) => vote.songID == song.id)
              .forEach((element) => {
                if (element.songID == song.id) {
                  song.allPoints += element.points;
                  allvotes += element.points;
                }
              });
            return song;
          });
          this.songs = songs.sort((a, b) => b.allPoints - a.allPoints);
        });
    },
  },
};
</script>