//現在時刻の表示
function updateDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は0始まりなので+1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    const weekDay = days[now.getDay()];

    const dateTimeString = `${year}/${month}/${day}(${weekDay}) ${hours}:${minutes}:${seconds}`;

    document.getElementById('datetime').textContent = dateTimeString;
};

//各曜日の時間データ
const schedules = {
    1: [ // 月曜日
        { start: 490, id: 'mon-1' },
        { start: 550, id: 'mon-2' },
        { start: 610, id: 'mon-3' },
        { start: 670, id: 'mon-4' },
        { start: 760, id: 'mon-5' },
        { start: 820, id: 'mon-6' }
    ],
    2: [ // 火曜日
        { start: 490, id: 'tue-1' },
        { start: 550, id: 'tue-2' },
        { start: 610, id: 'tue-3' },
        { start: 670, id: 'tue-4' },
        { start: 760, id: 'tue-5' },
        { start: 820, id: 'tue-6' }
    ],
    3: [ // 水曜日
        { start: 490, id: 'wed-1' },
        { start: 550, id: 'wed-2' },
        { start: 610, id: 'wed-3' },
        { start: 670, id: 'wed-hr' },
        { start: 700, id: 'wed-4' },
        { start: 790, id: 'wed-5' },
        { start: 850, id: 'wed-6' }
    ],
    4: [ // 木曜日
        { start: 490, id: 'thu-1' },
        { start: 550, id: 'thu-2' },
        { start: 610, id: 'thu-3' },
        { start: 670, id: 'thu-4' },
        { start: 760, id: 'thu-5' },
        { start: 820, id: 'thu-6' }
    ],
    5: [ // 金曜日
        { start: 490, id: 'fri-1' },
        { start: 550, id: 'fri-2' },
        { start: 610, id: 'fri-3' },
        { start: 670, id: 'fri-4' },
        { start: 760, id: 'fri-5' },
        { start: 820, id: 'fri-6' },
        { start: 880, id: 'fri-7' }
    ],
    6: [ // 土曜日
        { start: 490, id: 'sat-1' },
        { start: 550, id: 'sat-2' },
        { start: 610, id: 'sat-3' },
        { start: 670, id: 'sat-4' }
    ]
};

//各曜日の時間割データ
let timetable = {
    mon: [
        { subject: "英語1", teacher: "庄司" },
        { subject: "現代文", teacher: "福島" },
        { subject: "数学α", teacher: "松野" },
        { subject: "化学", teacher: "小松" },
        { subject: "数学β", teacher: "田中" },
        { subject: "体育", teacher: "高橋正" },
        { subject: "", teacher: "" }
    ],
    tue: [
        { subject: "数学α", teacher: "松野" },
        { subject: "政経史", teacher: "内村" },
        { subject: "英語", teacher: "熊野" },
        { subject: "地理", teacher: "阿部" },
        { subject: "物理", teacher: "深町" },
        { subject: "生物", teacher: "奥山" },
        { subject: "", teacher: "" }
    ],
    wed: [
        { subject: "政経史", teacher: "内村" },
        { subject: "体育", teacher: "高橋正" },
        { subject: "生物", teacher: "山内" },
        { subject: "物理", teacher: "深町" },
        { subject: "化学", teacher: "小松" },
        { subject: "数学α", teacher: "松野" },
        { subject: "", teacher: "" }
    ],
    thu: [
        { subject: "英語", teacher: "Stwart" },
        { subject: "数学α", teacher: "松野" },
        { subject: "情報", teacher: "喜古" },
        { subject: "古文", teacher: "矢口" },
        { subject: "保健", teacher: "青木" },
        { subject: "英語2", teacher: "平田" },
        { subject: "", teacher: "" }
    ],
    fri: [
        { subject: "情報", teacher: "喜古" },
        { subject: "英語2", teacher: "平田" },
        { subject: "地理", teacher: "阿部" },
        { subject: "英語1", teacher: "庄司" },
        { subject: "世界史", teacher: "村島" },
        { subject: "数学β", teacher: "田中" },
        { subject: "現代文", teacher: "福島" }
    ],
    sat: [
        { subject: "古文", teacher: "矢口" },
        { subject: "数学α", teacher: "松野" },
        { subject: "漢文", teacher: "水谷" },
        { subject: "世界史", teacher: "村島" },
        { subject: "", teacher: "" },
        { subject: "", teacher: "" },
        { subject: "", teacher: "" }
    ]
};

//選択によって授業を変更
function changeTimetable() {
    let scienceChoice = localStorage.getItem("scienceChoice");
    let socialChoice = localStorage.getItem("socialChoice");
    if (scienceChoice === "sccPhyBio1") {
        timetable.tue[4] = { subject: "生物", teacher: "奥山" };
        timetable.tue[5] = { subject: "物理", teacher: "深町" };
        timetable.wed[2] = { subject: "物理", teacher: "深町" };
        timetable.wed[3] = { subject: "生物", teacher: "山内" };
    } else if (scienceChoice === "sccPhyBio2") {
        timetable.tue[4] = { subject: "物理", teacher: "深町" };
        timetable.tue[5] = { subject: "生物", teacher: "奥山" };
        timetable.wed[2] = { subject: "生物", teacher: "山内" };
        timetable.wed[3] = { subject: "物理", teacher: "深町" };
    } else if (scienceChoice === "sccGeoBio1") {
        timetable.tue[4] = { subject: "地学", teacher: "石川" };
        timetable.tue[5] = { subject: "生物", teacher: "奥山" };
        timetable.wed[2] = { subject: "生物", teacher: "山内" };
        timetable.wed[3] = { subject: "地学", teacher: "石川" };
    } else if (scienceChoice === "sccGeoBio2") {
        timetable.tue[4] = { subject: "生物", teacher: "奥山" };
        timetable.tue[5] = { subject: "地学", teacher: "石川" };
        timetable.wed[2] = { subject: "地学", teacher: "石川" };
        timetable.wed[3] = { subject: "生物", teacher: "山内" };
    } else if (scienceChoice === "sccPhyGeo1") {
        timetable.tue[4] = { subject: "物理", teacher: "深町" };
        timetable.tue[5] = { subject: "地学", teacher: "石川" };
        timetable.wed[2] = { subject: "地学", teacher: "石川" };
        timetable.wed[3] = { subject: "物理", teacher: "深町" };
    } else if (scienceChoice === "sccPhyGeo2") {
        timetable.tue[4] = { subject: "地学", teacher: "石川" };
        timetable.tue[5] = { subject: "物理", teacher: "深町" };
        timetable.wed[2] = { subject: "物理", teacher: "深町" };
        timetable.wed[3] = { subject: "地学", teacher: "石川" };
    };
    if (socialChoice === "socJapanese"){
        timetable.fri[4] = { subject: "日本史", teacher: "石附" };
        timetable.sat[3] = { subject: "日本史", teacher: "石附" };
    }else if (socialChoice === "socWorld"){
        timetable.fri[4] = { subject: "世界史", teacher: "村島" };
        timetable.sat[3] = { subject: "世界史", teacher: "村島" };
    };
};

// ページ読み込み時、保存されていれば初期選択状態に反映
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('scienceChoice')) {
        document.getElementById('scienceChoice').value = localStorage.getItem('scienceChoice');
    }
    if (localStorage.getItem('socialChoice')) {
        document.getElementById('socialChoice').value = localStorage.getItem('socialChoice');
    }
    changeTimetable();
    UpdateTable();
    UpdateText();
});


//初回保存用
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('scienceChoice') === null) {
        localStorage.setItem('scienceChoice', 'sccPhyBio1'); // 初期値を設定
    }
    if (localStorage.getItem('socialChoice') === null) {
        localStorage.setItem('socialChoice', 'socJapanese'); // 初期値を設定
    }
});

// 選択されたら保存
document.getElementById('scienceChoice').addEventListener('change', function () {
    localStorage.setItem('scienceChoice', this.value);
    changeTimetable();
    UpdateTable();
    UpdateText();
});
document.getElementById('socialChoice').addEventListener('change', function () {
    localStorage.setItem('socialChoice', this.value);
    changeTimetable();
    UpdateTable();
    UpdateText();
});

//時間割のアップデート
function UpdateTable() {
    const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat"];

    dayKeys.forEach(dayKey => {
        timetable[dayKey].forEach((cellData, index) => {
            const cellId = `${dayKey}-${index + 1}`;
            const cell = document.getElementById(cellId);

            if (cell) {
                const mainInfo = cell.querySelector('.main-info');
                const subInfo = cell.querySelector('.sub-info');

                mainInfo.textContent = cellData.subject;
                subInfo.textContent = cellData.teacher;
            }
        });
    });
}


//時間割を反映
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('timetable');
    const table = document.createElement('table');

    // ★ border="1" をここで設定！
    table.setAttribute('border', '1');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat"];

    // ヘッダー作成
    days.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // 行作成
    const tbody = document.createElement('tbody');
    for (let period = 0; period < 7; period++) {
        const row = document.createElement('tr');

        dayKeys.forEach((dayKey, index) => {
            const cellData = timetable[dayKey][period];

            const td = document.createElement('td');

            // ★ idを「mon-1」のように自動で設定
            const cellId = `${dayKey}-${period + 1}`;
            td.setAttribute('id', cellId);

            const divMain = document.createElement('div');
            divMain.className = 'main-info';
            divMain.textContent = cellData.subject;

            const divSub = document.createElement('div');
            divSub.className = 'sub-info';
            divSub.textContent = cellData.teacher;

            td.appendChild(divMain);
            td.appendChild(divSub);
            row.appendChild(td);
        });

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    container.appendChild(table);

    updateDateTime();
    UpdateText();
});


//現在の教科を表示
function GetCurrentSubject() {
    const now = new Date();
    const day = now.getDay(); // 0:日 1:月 2:火 3:水 4:木 5:金 6:土
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 60 + minutes; // 現在時刻を「分」で表現

    // 曜日判定用配列
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const dayName = days[day];

    let result = '';
    if (day === 1 || day === 2 || day === 4) { // 月, 火, 木
        if (time >= 0 && time < 490) {
            result = 'beforeschool';
        } else if (time >= 490 && time < 540) {
            result = `${dayName}-1`;
        } else if (time >= 550 && time < 600) {
            result = `${dayName}-2`;
        } else if (time >= 610 && time < 660) {
            result = `${dayName}-3`;
        } else if (time >= 670 && time < 720) {
            result = `${dayName}-4`;
        } else if (time >= 760 && time < 810) {
            result = `${dayName}-5`;
        } else if (time >= 820 && time < 870) {
            result = `${dayName}-6`;
        } else if (time >= 870 && time < 1440) {
            result = 'afterschool';
        } else {
            result = 'rest';
        }
    }else if (day === 5) { // 金曜日
            if (time >= 0 && time < 490) {
                result = 'beforeschool';
            } else if (time >= 490 && time < 540) {
                result = `${dayName}-1`;
            } else if (time >= 550 && time < 600) {
                result = `${dayName}-2`;
            } else if (time >= 610 && time < 660) {
                result = `${dayName}-3`;
            } else if (time >= 670 && time < 720) {
                result = `${dayName}-4`;
            } else if (time >= 760 && time < 810) {
                result = `${dayName}-5`;
            } else if (time >= 820 && time < 870) {
                result = `${dayName}-6`;
            } else if (time >= 880 && time < 930) {
                result = `${dayName}-7`;
            }else if (time >= 930 && time < 1440) {
                result = 'afterschool';
            } else {
                result = 'rest';
            }
    } else if (day === 3) { // 水曜日
        if (time >= 0 && time < 490) {
            result = 'beforeschool';
        } else if (time >= 490 && time < 540) {
            result = 'wed-1';
        } else if (time >= 550 && time < 600) {
            result = 'wed-2';
        } else if (time >= 610 && time < 660) {
            result = 'wed-3';
        } else if (time >= 670 && time < 700) {
            result = 'wed-hr';
        } else if (time >= 700 && time < 750) {
            result = 'wed-4';
        } else if (time >= 790 && time < 840) {
            result = 'wed-5';
        } else if (time >= 850 && time < 900) {
            result = 'wed-6';
        } else if (time >= 900 && time < 1440) {
            result = 'afterschool';
        } else {
            result = 'rest';
        }
    } else if (day === 6) { // 土曜日
        if (time >= 0 && time < 490) {
            result = 'beforeschool';
        } else if (time >= 490 && time < 540) {
            result = 'sat-1';
        } else if (time >= 550 && time < 600) {
            result = 'sat-2';
        } else if (time >= 610 && time < 660) {
            result = 'sat-3';
        } else if (time >= 670 && time < 720) {
            result = 'sat-4';
        } else if (time >= 720 && time < 1440) {
            result = 'afterschool';
        } else {
            result = 'rest';
        }
    } else {
        // 日曜日（または他の条件に当てはまらない場合）
        result = 'rest';
    }
    const cell = document.getElementById(result);

    if (result === "beforeschool") {
        return "授業前"
    } else if (result === "afterschool") {
        return "放課後"
    } else if (result === "rest") {
        return "休み時間"
    } else if (result === "wed-hr") {
        return "HR"
    } else if (!cell) {
        return "見つかりません"; // 見つからなかったら null を返す
    };

    // cell内のmain-infoクラスのテキストを取得（メイン情報）
    const mainInfo = cell.querySelector('.main-info');
    const subInfo = cell.querySelector(".sub-info");
    if (mainInfo) {
        return String(mainInfo.textContent.trim()) + "(" + String(subInfo.textContent.trim() + ")");
    }
};

//次の教科を表示
function GetNextSubject() {
    const now = new Date();
    const day = now.getDay(); // 0:日 1:月 2:火 3:水 4:木 5:金 6:土
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 60 + minutes;

    const todaySchedule = schedules[day];

    if (!todaySchedule) {
        return "休み時間";
    }
    // 現在時刻より後の授業を探す
    for (let i = 0; i < todaySchedule.length; i++) {
        if (time < todaySchedule[i].start) {
            const cell = document.getElementById(todaySchedule[i].id);
            if (!cell) {
                return "見つかりません";
            }
            if (todaySchedule[i].id === "wed-hr") {
                return "HR";
            }
            const mainInfo = cell.querySelector('.main-info');
            const subInfo = cell.querySelector(".sub-info");
            if (mainInfo) {
                return String(mainInfo.textContent.trim()) + "(" + String(subInfo.textContent.trim() + ")");
            }
        }
    }

    // もし全ての授業が終わっていた場合
    return "放課後";
};

//テキストをアップデート
function UpdateText() {
    document.getElementById("nowSubject").textContent = "現在:" + GetCurrentSubject();
    document.getElementById("nextSubject").textContent = "次: " + GetNextSubject();
};

//繰り返し実行
setInterval(updateDateTime, 1000);
setInterval(UpdateText, 10000);
