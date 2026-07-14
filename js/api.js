async function getProfile(id){

    try{

        const response = await fetch(
            CONFIG.API_URL + "?id=" + encodeURIComponent(id)
        );

        const result = await response.json();

        return result;

    }

    catch(error){

        console.error(error);

        return {

            status:false,

            message:"Gagal mengambil data."

        };

    }

}