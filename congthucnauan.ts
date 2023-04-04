let congthucnauan = {
    tenMonAn : 'suon xao chua ngot',
    khauPhanAn : 3,
    thanhPhan : ['400g suon than','4tbsp nuoc mam','5tbsp duong', '5tbsp nuoc cot chanh','1/3 bat nuoc soi','hanh kho, toi, ot','2 qua ca chua','ot chuong']

}
console.log('ten mon an : ' + congthucnauan.tenMonAn)
console.log('khau phan an: ' + congthucnauan.khauPhanAn)
console.log('thanh phan : ' )
for (let i = 0; i < congthucnauan.thanhPhan.length; i++) {
    console.log('- '+ congthucnauan.thanhPhan[i])
}