document.addEventListener("DOMContentLoaded",async()=>{

    const params =
        new URLSearchParams(window.location.search);

    const id =
        params.get("id") || CONFIG.DEFAULT_ID;

    const result =
        await getProfile(id);

    if(result.status){

        renderProfile(result.data);

    }else{

        alert(result.message);

    }

});