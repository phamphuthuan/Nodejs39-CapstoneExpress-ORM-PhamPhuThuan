-- table nguoi_dung
CREATE TABLE nguoi_dung (
	nguoi_dung_id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255),
	mat_khau VARCHAR(255),
	ho_ten VARCHAR(255),
	tuoi INT,
	anh_dai_dien VARCHAR(255)
);

INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien) VALUES
('phamphuthuan@gmail.com', 'abc', 'Pham Phu Thuan', 20, 'https://picsum.photos/seed/picsum/200/300'),
('sontung@gmail.com', '123', 'Nguyen Thanh Tung', 30, 'https://picsum.photos/id/1/500/400.jpg'),
('ronaldoCR7@gmail.com', 'cr7', 'Cristiano Ronaldo', 39, 'https://picsum.photos/id/3/500/400.jpg')

SELECT * FROM nguoi_dung

-- table hinh_anh
CREATE TABLE hinh_anh (
	hinh_id INT PRIMARY KEY AUTO_INCREMENT,
	ten_hinh VARCHAR(255),
	duong_dan VARCHAR(255),
	mo_ta VARCHAR(255),
	nguoi_dung_id INT,
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)
)

INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id) VALUES
('Hình 1', '/duong/dan/hinh1.jpg', 'Mô tả hình 1', 1),
('Hình 2', '/duong/dan/hinh2.jpg', 'Mô tả hình 2', 4),
('Hình 3', '/duong/dan/hinh3.jpg', 'Mô tả hình 3', 3),
('Hình 4', '/duong/dan/hinh4.jpg', 'Mô tả hình 4', 2)

SELECT * FROM hinh_anh

-- table binh_luan
CREATE TABLE binh_luan (
	binh_luan_id INT PRIMARY KEY AUTO_INCREMENT,
	nguoi_dung_id INT,
	hinh_id INT,
	ngay_binh_luan DATE,
	noi_dung VARCHAR(255),
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id) ON DELETE CASCADE
);

INSERT INTO binh_luan (nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung) VALUES
(1, 1, '2024-1-25', 'User1 binh luan Hinh1'),
(2, 3, '2024-1-24', 'User2 binh luan Hinh3'),
(3, 2, '2024-1-25', 'User3 binh luan Hinh2'),
(2, 1, '2024-1-24', 'User2 binh luan Hinh1'),
(1, 4, '2024-1-25', 'User1 binh luan Hinh4'),
(4, 3, '2024-1-24', 'User4 binh luan Hinh3')

SELECT * FROM binh_luan

-- table luu_anh
CREATE TABLE luu_anh (
	nguoi_dung_id INT,
	hinh_id INT,
	ngay_luu DATE,
	PRIMARY KEY (nguoi_dung_id, hinh_id),
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id) ON DELETE CASCADE
);

INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu) VALUES
(1, 1, '2024-01-25'),
(1, 2, '2024-01-26'),
(2, 3, '2024-01-27'),
(2, 2, '2024-01-28'),
(3, 4, '2024-01-27'),
(4, 1, '2024-01-28'),
(3, 1, '2024-01-29');

SELECT * FROM luu_anh