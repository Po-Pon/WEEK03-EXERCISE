function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
    return input.map(function(x) {
        return Math.pow(x, 2)
    });
}

function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
    return [
        {
            date : input[0].date,
            temperature : fah_to_celsius(input[0].temperature)
        },
        {
            date : input[1].date,
            temperature : fah_to_celsius(input[1].temperature)
        },
        {
            date : input[2].date,
            temperature : fah_to_celsius(input[2].temperature)
        },
        {
            date : input[3].date,
            temperature : fah_to_celsius(input[3].temperature)
        }
    ]
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น
    function get_even (input) {
        return input % 2 == 0;
    }
    return input.filter(get_even);
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ
    function get_between (people) {
        var min = input.min;
        var max = input.max;
        return people.age > min && people.age < max;
    }
    return input.people.filter(get_between);
}

function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter
    function get_removed (people) {
        var remove = input.removeId;
        return people.id != remove;
    }
    return input.people.filter(get_removed);
}