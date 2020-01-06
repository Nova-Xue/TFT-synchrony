import axios from "axios";

export default {
    //load all pieces
    getPieces : function () {
        return axios.get("/api/pieces");
    },
}