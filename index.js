let dom_helper = {
  putDomInBody: function (dom) {
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(dom);
  },

  addChildToParent: function (parent, child) {
    parent.appendChild(child);
  },

  createDomObj: function (tagName, className) {
    let tempDom = document.createElement(tagName);
    if (className !== undefined) {
      tempDom.classList.add(className);
    }
    return tempDom;
  },
};

let div_container = {
  initDiv: function () {
    let tempDiv = this.createContainerDiv();
    dom_helper.putDomInBody(tempDiv);
  },
  createContainerDiv: function () {
    let tempDiv = dom_helper.createDomObj("div", "container");
    return tempDiv;
  },
  generateImgs: function () {
    data_obj.getDataFromApi("http://googleapis.com/getImgs", function (imgs) {
      let containerDiv = document.getElementsByClassName("container")[0];
      for (i = 0; i < imgs.length; i++) {
        const imgUrl = imgs[i];
        let tmp_img_dom = img_obj.createImgDom();
        img_obj.loadImg(tmp_img_dom, imgUrl);
        dom_helper.addChildToParent(containerDiv, tmp_img_dom);
      }
    });
  },
};

let img_obj = {
  createImgDom: function () {
    let tmp_img = dom_helper.createDomObj("img");
    return tmp_img;
  },
  loadImg: function (img_dom, imgUrl) {
    img_dom.setAttribute("src", imgUrl);
  },
};

let data_obj = {
  getDataFromApi: function (apiUrl, cb) {
    let data = [
      "https://fastly.picsum.photos/id/833/300/300.jpg?hmac=m33-N82Dblxw-Bzcfdv95OhsW2L00s_mLYjpSM6aR2k",
      "https://fastly.picsum.photos/id/288/300/300.jpg?hmac=7RMC2BTzA6EpogvGf74Us4VguwkoeSsLzBARJbs5VOk",
      "https://fastly.picsum.photos/id/390/300/300.jpg?hmac=vIwFiXdW16lazu7WfEtZYsQ3UJSXWKISG7tOiTT-nhc",
      "https://fastly.picsum.photos/id/790/300/300.jpg?hmac=jXjdU1D_tMJC9_oX744nIo2DeE65T9ri0pJUM3k86E8",
      "https://fastly.picsum.photos/id/90/300/300.jpg?hmac=QT72Dh2MxQaVSEq6qSwRCE38wKIshGRJMffXMzgK0_Q",
      "https://fastly.picsum.photos/id/236/300/300.jpg?hmac=foqe5XWYGwVxei7jB9_mh6DQDjOydIus_sTfpOuB2M8",
    ];
    setTimeout(function () {
      cb && cb(data);
    }, 2000);
  },
};

document.addEventListener("DOMContentLoaded", function () {
  div_container.initDiv();
  div_container.generateImgs();
});
