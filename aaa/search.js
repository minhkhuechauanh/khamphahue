const pages = [
{ name: "Vị trí Huế", keywords: ["vi tri hue"], url: "position.html" },
{ name: "Giới thiệu", keywords: ["gioi thieu hue"], url: "introduction.html" },
{ name: "Khám phá Huế", keywords: ["kham pha hue"], url: "code.html" },
{ name: "Lịch sử Huế", keywords: ["lich su hue"], url: "tourism.html" },
{ name: "Tài nguyên", keywords: ["tai nguyen hue"], url: "resource.html" },

{ name: "Bản đồ", keywords: ["ban do chung"], url: "bando.html" },
{ name: "Hoạt hình", keywords: ["hoat hinh hue"], url: "cartoon.html" },
{ name: "Nhân vật lịch sử", keywords: ["nhan vat lich su hue"], url: "character.html" },
{ name: "Ẩm thực Huế", keywords: ["am thuc hue","mon an hue"], url: "culinary.html" },

{ name: "Di sản Huế", keywords: ["di san hue"], url: "destination.html" },
{ name: "Di tích lịch sử", keywords: ["di tich lich su hue"], url: "dtls.html" },
{ name: "Di sản văn hóa vật thể", keywords: ["di san vat the hue"], url: "tangible.html" },
{ name: "Bản đồ Huế", keywords: ["ban do hue"], url: "bando.html" },

{ name: "Nguyễn Chí Diểu", keywords: ["nguyen chi dieu"], url: "nguyenchidieu.html" },
{ name: "Câu hỏi", keywords: ["cau hoi"], url: "questions.html" },

{ name: "Lễ hội Huế", keywords: ["le hoi hue"], url: "festive.html" },

{ name: "Tôn Thất Thuyết", keywords: ["ton that thuyet"], url: "tonthatthuyet.html" },

{ name: "Vua Gia Long", keywords: ["gia long"], url: "gialong.html" },
{ name: "Trò chơi dân gian", keywords: ["tro choi dan gian hue"], url: "games.html" },
{ name: "Làng nghề Huế", keywords: ["lang nghe hue"], url: "tradition.html" },

{ name: "Đặng Huy Trứ", keywords: ["dang huy tru"], url: "danghuytru.html" },

{ name: "Nguyễn Tri Phương", keywords: ["nguyen tri phuong"], url: "nguyentriphuong.html" },

{ name: "Vua Hàm Nghi", keywords: ["ham nghi"], url: "hamnghi.html" },
{ name: "Nhã nhạc cung đình Huế", keywords: ["nha nhac cung dinh hue"], url: "nhanhac.html" },

{ name: "Ca Huế", keywords: ["ca hue"], url: "cahue.html" },

{ name: "Châu bản Triều Nguyễn", keywords: ["chau ban trieu nguyen"], url: "chauban.html" },

{ name: "Mộc bản Triều Nguyễn", keywords: ["moc ban trieu nguyen"], url: "mocban.html" },

{ name: "Thơ văn trên kiến trúc Cung đình Huế", keywords: ["tho van cung dinh hue"], url: "thovan.html" },
{ name: "Vua Bảo Đại", keywords: ["bao dai"], url: "baodai.html" },
{ name: "Đại Nội Huế", keywords: ["dai noi hue"], url: "dainoi.html" },
{ name: "Lăng Khải Định", keywords: ["lang khai dinh"], url: "langkhaidinh.html" },
{ name: "Lăng Tự Đức", keywords: ["lang tu duc"], url: "langtuduc.html" },
{ name: "Lăng Minh Mạng", keywords: ["lang minh mang"], url: "langminhmang.html" },
{ name: "Chùa Thiên Mụ", keywords: ["chua thien mu"], url: "thienmu.html" },
{ name: "Cung An Định", keywords: ["cung an dinh"], url: "andinh.html" },
{ name: "Quốc Học Huế", keywords: ["quoc hoc hue"], url: "qhh.html" },
{ name: "Cầu Tràng Tiền", keywords: ["cau trang tien"], url: "trangtien.html" },
{ name: "Nguyễn Chí Thanh", keywords: ["nguyen chi thanh"], url: "nguyenchithanh.html" },


{ name: "Cầu ngói Thanh Toàn", keywords: ["cau ngoi thanh toan","thanh toan"], url: "caungoi.html" },
{ name: "Rú Chá", keywords: ["ru cha","rucha"], url: "rucha.html" },
{ name: "Vườn quốc gia Bạch Mã", keywords: ["bach ma","vuon quoc gia bach ma"], url: "bachma.html" },
{ name: "Đầm Lập An", keywords: ["dam lap an","lap an"], url: "lapan.html" },
{ name: "Phá Tam Giang", keywords: ["pha tam giang","tam giang"], url: "tamgiang.html" },
{ name: "Biển Thuận An", keywords: ["bien thuan an","thuan an"], url: "thuanan.html" },

{ name: "Sách điện tử", keywords: ["sach dien tu"], url: "ebook.html" },
{ name: "Tài liệu giáo dục địa phương lớp 1", keywords: ["tai lieu lop 1"], url: "ebook1.html" },
{ name: "Tài liệu giáo dục địa phương Âm nhạc, Mĩ thuật (lớp 4,5)", keywords: ["tai lieu lop 4 5"], url: "ebook3.html" },
{ name: "Tài liệu giáo dục địa phương Âm nhạc, Mĩ thuật (lớp 1,2,3)", keywords: ["tai lieu lop 1 2 3"], url: "ebook2.html" },
];
 
function removeVietnameseTones(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const box = document.getElementById("suggestions");

    if (!input) return;

    input.addEventListener("input", function () {
        let value = removeVietnameseTones(this.value.toLowerCase());
        box.innerHTML = "";

        if (value === "") {
            box.style.display = "none";
            return;
        }

let filtered = pages.filter(p =>
    removeVietnameseTones(p.name.toLowerCase()).startsWith(value) ||
    p.keywords.some(k => removeVietnameseTones(k.toLowerCase()).startsWith(value))
);

  
        filtered.sort((a, b) =>
            a.name.length - b.name.length
        );

        if (filtered.length === 0) {
            box.style.display = "none";
            return;
        }

     
        filtered.slice(0, 5).forEach(p => {
            let div = document.createElement("div");
            div.className = "suggestion-item";
            div.innerText = p.name;

            div.onclick = () => window.location.href = p.url;

            box.appendChild(div);
        });

        box.style.display = "block";
    });

     
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            let value = removeVietnameseTones(this.value.toLowerCase());

            let best = pages.find(p =>
                removeVietnameseTones(p.name.toLowerCase()).includes(value) ||
                p.keywords.some(k => removeVietnameseTones(k.toLowerCase()).includes(value))
            );

            if (best) {
                window.location.href = best.url;
            } else {
                alert("Không tìm thấy!");
            }
        }
    });

    document.addEventListener("click", function (e) {
        if (!document.querySelector(".search-box").contains(e.target)) {
            box.style.display = "none";
        }
    });
});