var gallery = document.querySelector(".gallery"),
    containerdiv = document.createElement("div"),
    lboxContainer = document.querySelector(".lightbox_container"),
    containerdivForLbox = document.createElement("div"),
    noOfImages = 21;

function hadleErrorIMG (postId){
    document.querySelector(postId).setAttribute("class","hideError");
};

(function(){
    for (var i =0; i < noOfImages; i++) {
        var post = document.createElement("div"),
            img = document.createElement("img"),
            a = document.createElement("a"),
            lboxa = document.createElement("a"),
            lboxImg = document.createElement("img");
        post.setAttribute("class", "post");
        post.setAttribute("id","post_"+(i+1));
        img.setAttribute("src","./assets/pics/"+(i+1)+".jpg");
        img.setAttribute("onerror","hadleErrorIMG('#post_"+(i+1)+"')");
        lboxImg.setAttribute("src","./assets/pics/"+(i+1)+".jpg");
        lboxImg.setAttribute("onerror","hadleErrorIMG('#post_"+(i+1)+"')");
        a.setAttribute("href","#lboximg"+(i+1));
        lboxa.setAttribute("href","#_");
        lboxa.setAttribute("class","lbox");
        lboxa.setAttribute("id","lboximg"+(i+1));

        a.appendChild(img);
        post.appendChild(a);
        containerdiv.appendChild(post);
        lboxa.appendChild(lboxImg);
        containerdivForLbox.appendChild(lboxa);
    }
    gallery.appendChild(containerdiv);
    lboxContainer.appendChild(containerdivForLbox);
})();