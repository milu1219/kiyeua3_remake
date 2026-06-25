

Readme · MD
# 📸 Kỷ Yếu A3 — Phiên Bản Làm Lại
 
> *Lần này thì mượt hơn rồi nhé.*
 
---
 
## Giới thiệu
 
Đây là phiên bản làm lại của trang web kỷ yếu — một trang để lưu giữ những khoảnh khắc, khuôn mặt, và ký ức của một tập thể trước khi mỗi người đi một hướng khác nhau.
 
Phiên bản năm ngoái chạy được, nhưng chưa được như ý. Lần này làm lại từ đầu, chú tâm hơn vào từng chi tiết: layout gọn hơn, ảnh hiển thị đẹp hơn, và quan trọng nhất — cảm giác dùng nó phải thật nhẹ nhàng.
 
---
 
## Tính năng
 
- 🖼️ **Hiển thị ảnh theo chuẩn A3** — layout được tối ưu cho khổ giấy A3, in ra là đẹp ngay
- 👤 **Trang cá nhân từng thành viên** — mỗi người có một góc riêng: ảnh, tên, và đôi lời nhắn nhủ
- 🎨 **Giao diện sạch, không rối mắt** — tập trung vào nội dung, không thêm thứ thừa
- 📱 **Responsive** — xem trên điện thoại hay máy tính đều ổn
---
 
## Công nghệ sử dụng
 
Dự án được xây dựng bằng những thứ quen thuộc, không cầu kỳ:
 
| Thành phần | Công nghệ |
|---|---|
| Giao diện | HTML / CSS / JavaScript |
| Cấu trúc dữ liệu | JSON |
| Hiển thị ảnh | CSS Grid + Flexbox |
| Xuất file | In thẳng từ trình duyệt |
 
---
 
## Cấu trúc thư mục
 
```
ki-yeu-a3/
├── index.html          # Trang chủ, danh sách thành viên
├── member.html         # Template trang cá nhân
├── assets/
│   ├── css/            # Style chính
│   ├── js/             # Logic hiển thị và tương tác
│   └── images/         # Ảnh thành viên và nền
├── data/
│   └── members.json    # Dữ liệu từng người
└── README.md
```
 
---
 
## Cách dùng
 
**1. Clone về máy**
```bash
git clone https://github.com/your-username/ki-yeu-a3.git
cd ki-yeu-a3
```
 
**2. Thêm dữ liệu thành viên** vào `data/members.json`:
```json
{
  "name": "Nguyễn Văn A",
  "quote": "Cảm ơn vì những năm tháng bên nhau.",
  "photo": "assets/images/nguyen-van-a.jpg"
}
```
 
**3. Mở `index.html`** bằng trình duyệt là xong — không cần server, không cần cài gì thêm.
 
---
 
## Ghi chú
 
Một năm trước, mình làm dự án này bằng những gì mình biết. Một năm sau, mình làm lại nó bằng những gì mình đã học được.
Code có thể được viết lại, nhưng những kỷ niệm thì không.
---
 
*Làm với tất cả sự trân trọng — cho những người sẽ nhớ nhau dù không còn ở cùng nơi nữa.*
 
