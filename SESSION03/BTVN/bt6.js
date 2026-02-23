let feedback;
let feedbackCount=0;
let userName;
let bookCode;
let typeOfFeedback;
let noteFeedback;
let serious;
let seriousCount_3=0;
let seriousCount_2=0;
let seriousCount_1=0;
let type_2=0;
let type_3=0;
do {
    feedback=prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)").trim().toLowerCase();
    if(feedback=="không"){
        console.log("Kết thúc chương trình");
        
    }else if(feedback==="có"){
        feedbackCount++;
        do {
            userName=prompt("Tên bạn đọc");
            if(!userName){
                alert("không dc để trống");
            }
        } while (!userName);
        bookCode=prompt("Mã thẻ bạn đọc");
        typeOfFeedback=+prompt(`1 = Phàn nàn / Khiếu nại 
2 = Đề xuất cải thiện 
3 = Phản hồi tích cực / Khen ngợi`);
        if(typeOfFeedback===1){
            serious=+prompt(`1 = Nhẹ, 2 = Trung bình, 3 = Nghiêm trọng `)
        }
        noteFeedback=prompt("Nội dung ngắn gọn ");


        if(typeOfFeedback===1 && serious===3){
            console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
            seriousCount_3++;
        }else if(typeOfFeedback===1 && serious===2){
            console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
            seriousCount_2++;
        }else if(typeOfFeedback===1 && serious===1){
            console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
            seriousCount_1++;
        }else if(typeOfFeedback===2){
            console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
            type_2++;
        }else if(typeOfFeedback===3){
            console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
            type_3++;
        }
    }else{
        console.log("Lỗi cú pháp!!!");
        
    }
} while (feedback!=="không");


console.log(`
    Tổng số phản hồi/khiếu nại đã xử lý: ${feedbackCount}
    Số khiếu nại nghiêm trọng (mức 3): ${seriousCount_3}
    Số khiếu nại trung bình (mức 2): ${seriousCount_2}
    Số khiếu nại nhẹ (mức 1): ${seriousCount_1}
    Số đề xuất cải thiện: ${type_2}
    Số phản hồi tích cực: ${type_3}
    
    `);
