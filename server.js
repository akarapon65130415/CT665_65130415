const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

const researchPlan = [
  {
    id: 1,
    description: "ศึกษาการทำงานของเจ้าหน้าที่ และศึกษา Machine Learning",
    startDate: "2024-01-01",
    endDate: "2024-01-31"
  },
  {
    id: 2,
    description: "เลือก Machine Learning Model ที่เป็นไปได้เพื่อศึกษาในเชิงลึก",
    startDate: "2024-02-01",
    endDate: "2024-02-29"
  },
  {
    id: 3,
    description: "ทดลองนำข้อมูลที่มีของเจ้าหน้าที่มาจัดการข้อมูล",
    startDate: "2024-03-01",
    endDate: "2024-03-31"
  },
  {
    id: 4,
    description: "เริ่มนำข้อมูลเดิมที่มีมาฝึก ML Model ทั้ง 3 รูปแบบ และสรุปผลรอบที่ 1",
    startDate: "2024-04-01",
    endDate: "2024-04-30"
  },
  {
    id: 5,
    description: "ตรวจสอบข้อมูลและ ปรับแต่ง ML Model ให้เหมาะสม",
    startDate: "2024-05-01",
    endDate: "2024-05-31"
  },
  {
    id: 6,
    description: "เก็บข้อมูลรอบที่ 2 และนำข้อมูลเข้ากระบวนการ Training อีกครั้ง",
    startDate: "2024-06-01",
    endDate: "2024-06-30"
  },
  {
    id: 7,
    description: "สรุปผล และเปรียบเทียบการทำงานของ ML Model ทั้ง 3 รูปแบบ",
    startDate: "2024-07-01",
    endDate: "2024-07-31"
  },
  {
    id: 8,
    description: "จัดทำเล่มรายงาน และ Technical Data ทั้งหมด",
    startDate: "2024-08-01",
    endDate: "2024-08-31"
  }
];

app.get("/", (req, res) => {
  res.send(`
    <div style="margin-left: auto; margin-right: auto; max-width: fit-content; text-align: center;">
      <p>Name: Akarapon Lhuengaroon</p>
      <p>Student ID: 65130415</p>
      <p>Description: CT665 Final</p>
      <div style="width: 100%;">
        <div style="display: flex; justify-content: center; align-items: center;">
         <img src="image/Akarapon.jpeg" style="width: 300px; height: 400px;">
        </div>
      </div>
      <a href="/myresearch">MyResearch</a>
      <a href="/researchplan">My Research Plan</a>
      <a href="/rest/researchplan/">Rest My Research Plan</a>
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>ในปัจจุบันมีเครื่องมือตรวจจับ ที่เรียกว่า เซนเซอร์ตรวจจับแรงสั่นสะเทือน (Seismic Sensor) ได้เข้ามามีบทบาทในด้านพลเรือน และในด้านทางการทหาร เป็นตัวช่วยสนับสนุนภารกิจให้บรรจุเป้าหมาย 
    มีการแจ้งเตือนให้แก่เจ้าหน้าที่ผู้ปฏิบัติงาน แต่การแจ้งเตือนเหล่านั้น เป็นการแจ้งเตือนที่มองเห็นเป็นกราฟ หรือความแรงของสัญญาณการสั่นสะเทือนเพียงเท่านั้น จึงได้เล็งเห็นเรื่องการนำข้อมูล(Raw Data)
    ที่มีมาเข้ากระบวนการสร้างโมเดลจำลอง เพื่อทำนายเหตุการณ์ ให้สามารถช่วยเหลือเจ้าหน้าที่ผู้ปฏิบัติการ เช่น สามารถทำนายได้ว่าเป็น บุคคล สัตว์ หรืออื่น ๆ เพื่อช่วยในการตัดสินใจกับเจ้าหน้าที่ และลดเวลา
    ในการวิเคราะห์เหตุกการณ์ด้วยตนเอง

    </p>

    <p>จากที่กล่าวมาข้างต้น ผู้วิจัยได้เลือกรูปแบบการทำนายเหตุการณ์ด้วยการเรียนรู้ของเครื่องมา 3 รูปแบบ คือ 1.Dessition Tree, 2.Naive Nay และ 3.Random Forest เพื่อสร้าง Model 
    และปรียบเทียบให้ได้ ML Model ที่เหมาะสมกับข้อมูลที่ได้รับมากที่สุด และสามารถนำไปใช้งานได้จริงกับองค์กร

    </p>
    <a href="/">MyHome</a>
  `);
});

app.get("/researchplan", (req, res) => {
  let tableRows = researchPlan.map(step => `
    <tr>
      <td>${step.id}</td>
      <td>${step.description}</td>
      <td style="text-align: center;">${step.startDate <= "2024-01-31" && step.endDate >= "2024-01-01" ? "&#10004;" : ""}</td>
      <td style="text-align: center;">${step.startDate <= "2024-02-29" && step.endDate >= "2024-02-01" ? "&#10004;" : ""}</td>
      <td style="text-align: center;">${step.startDate <= "2024-03-31" && step.endDate >= "2024-03-01" ? "&#10004;" : ""}</td>
      <td style="text-align: center;">${step.startDate <= "2024-04-30" && step.endDate >= "2024-04-01" ? "&#10004;" : ""}</td>
      <td style="text-align: center;">${step.startDate <= "2024-05-31" && step.endDate >= "2024-05-01" ? "&#10004;" : ""}</td>
      <td style="text-align: center;">${step.startDate <= "2024-06-30" && step.endDate >= "2024-06-01" ? "&#10004;" : ""}</td>
      <td style="text-align: center;">${step.startDate <= "2024-07-31" && step.endDate >= "2024-07-01" ? "&#10004;" : ""}</td>
      <td style="text-align: center;">${step.startDate <= "2024-08-31" && step.endDate >= "2024-08-01" ? "&#10004;" : ""}</td>
    </tr>
  `).join("");

  res.send(`
    <div>
      <h2>My Research Plan</h2>

      <table border="1">
        <tr>
          <th rowspan="2">ที่</th>
          <th rowspan="2">ขั้นตอน</th>
          <th colspan="8">เดือน</th>
        </tr>
        <tr>
          <th>มกราคม 67</th>
          <th>กุมภาพันธ์ 67</th>
          <th>มีนาคม 67</th>
          <th>เมษายน 67</th>
          <th>พฤษภาคม 67</th>
          <th>มิถุนายน 67</th>
          <th>กรกฎาคม 67</th>
          <th>สิงหาคม 67</th>
        </tr>
        ${tableRows}
      </table>

      <h3>แก้ไขขั้นตอน</h3>
      <form action="/update-step" method="POST">
        <label for="stepId">ขั้นตอนที่:</label>
        <input type="number" id="stepId" name="stepId" required>
        <label for="description">รายละเอียด:</label>
        <input type="text" id="description" name="description" required>
        <label for="startDate">วันที่เริ่ม:</label>
        <input type="date" id="startDate" name="startDate" required>
        <label for="endDate">วันที่สิ้นสุด:</label>
        <input type="date" id="endDate" name="endDate" required>
        <button type="submit">อัปเดต</button>
      </form>

      <a href="/">MyHome</a>
    </div>
  `);
});

app.post("/update-step", (req, res) => {
  const { stepId, description, startDate, endDate } = req.body;
  
  // ค้นหาขั้นตอนตาม ID และอัปเดตรายละเอียด
  const step = researchPlan.find(step => step.id === parseInt(stepId));
  if (step) {
    step.description = description;
    step.startDate = startDate;
    step.endDate = endDate;
  }

  console.log(`Step ID: ${stepId}, Description: ${description}, Start Date: ${startDate}, End Date: ${endDate}`);

  res.send(`
    <div>
      <p>ข้อมูลขั้นตอนถูกอัปเดตเรียบร้อยแล้ว</p>
      <a href="/researchplan">กลับไปที่แผนการวิจัย</a>
    </div>
  `);
});

app.get("/rest/researchplan/", (req, res) => {
  res.json(researchPlan);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
