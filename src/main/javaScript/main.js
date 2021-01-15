function getDataAbstaraction(val, callback) {
    const data = {
        1: {
            sec: 'sec',
            min: 'min',
            hour: 'hour',
            day: 'day',
            week: 'week',
            month: 'month',
            astronomic_year: 'astronomic year'
        },
        2: {
            m: 'm',
            km: 'km',
            mile: 'mile',
            nautical_mile: 'nautical mile',
            cable: 'cable',
            league: 'league',
            foot: 'foot',
            yard: 'yard'
        },
        3: {
            l: 'l',
            m_3: 'm^3',
            gallon: 'gallon',
            pint: 'pint',
            quart: 'quart',
            barrel: 'barrel',
            cubic_foot: 'cubic foot',
            cubic_inch: 'cubic inch'
        },
        4: {
            g: 'g',
            kg: 'kg',
            carat: 'carat',
            eng_pound: 'eng pound',
            pound: 'pound',
            stone: 'stone',
            rus_pound: 'rus pound'
        },
        5: {C: 'C', F: 'F', K: 'K', Ro: 'Ro', Re: 'Re', Ra: 'Ra', N: 'N', D: 'D'}
    };
    callback(data[val]);
}

function loadSubData(obj) {
    let val = obj.options[obj.selectedIndex].value;
    if (!val) {
        return;
    }

    getDataAbstaraction(val, function (data) {
        let opts = '<option>Select category</option>';
        for (let i in data) {
            opts += '<option value="' + i + '">' + data[i] + '</option>';
        }
        document.getElementById('sub1').innerHTML = opts;
        document.getElementById('sub2').innerHTML = opts;
    });
}

function bl() {

    let result;
    let select1 = document.getElementById('sub1');
    let sub1 = select1.value;
    let select2 = document.getElementById('sub2');
    let sub2 = select2.value;
    let num = Number(document.getElementById('input').value);

    if (sub1 === 'sec' && sub2 === 'min') {
        result = num / 60;
    } else if (sub1 === 'min' && sub2 === 'sec') {
        result = num * 60;
    } else if (sub1 === 'sec' && sub2 === 'hour') {
        result = num / 3600;
    } else if (sub1 === 'hour' && sub2 === 'sec') {
        result = num * 3600;
    } else if (sub1 === 'sec' && sub2 === 'day') {
        result = num / 86400;
    } else if (sub1 === 'day' && sub2 === 'sec') {
        result = num * 86400;
    } else if (sub1 === 'wec' && sub2 === 'week') {
        result = num / 604800;
    } else if (sub1 === 'week' && sub2 === 'wec') {
        result = num * 604800;
    } else if (sub1 === 'sec' && sub2 === 'month') {
        result = num / 2.628e+6;
    } else if (sub1 === 'month' && sub2 === 'sec') {
        result = num * 2.628e+6;
    } else if (sub1 === 'sec' && sub2 === 'astronomic_year') {
        result = num / 3.154e+7;
    } else if (sub1 === 'astronomic_year' && sub2 === 'sec') {
        result = num * 3.154e+7;
    } else if (sub1 === 'l' && sub2 === 'm_3') {
        result = num / 1000;
    } else if (sub1 === 'm_3' && sub2 === 'l') {
        result = num * 1000;
    } else if (sub1 === 'l' && sub2 === 'gallon') {
        result = num / 3.785;
    } else if (sub1 === 'gallon' && sub2 === 'l') {
        result = num * 3.785;
    } else if (sub1 === 'l' && sub2 === 'pint') {
        result = num / 2.113;
    } else if (sub1 === 'pint' && sub2 === 'l') {
        result = num * 2.113;
    } else if (sub1 === 'l' && sub2 === 'quart') {
        result = num / 1.057;
    } else if (sub1 === 'quart' && sub2 === 'l') {
        result = num * 1.057;
    } else if (sub1 === 'l' && sub2 === 'barrel') {
        result = num / 117;
    } else if (sub1 === 'barrel' && sub2 === 'l') {
        result = num * 117;
    } else if (sub1 === 'l' && sub2 === 'cubic_foot') {
        result = num / 28.317;
    } else if (sub1 === 'cubic_foot' && sub2 === 'l') {
        result = num * 28.317;
    } else if (sub1 === 'l' && sub2 === 'cubic_inch') {
        result = num / 61.024;
    } else if (sub1 === 'cubic_inch' && sub2 === 'l') {
        result = num * 61.024;
    } else if (sub1 === 'g' && sub2 === 'kg') {
        result = num / 1000;
    } else if (sub1 === 'kg' && sub2 === 'g') {
        result = num * 1000;
    } else if (sub1 === 'kg' && sub2 === 'carat') {
        result = num / 5000;
    } else if (sub1 === 'carat' && sub2 === 'kg') {
        result = num * 5000;
    } else if (sub1 === 'kg' && sub2 === 'eng_pound') {
        result = num / 0.45359237;
    } else if (sub1 === 'eng_pound' && sub2 === 'kg') {
        result = num * 0.45359237;
    } else if (sub1 === 'kg' && sub2 === 'pound') {
        result = num / 2.2;
    } else if (sub1 === 'pound' && sub2 === 'kg') {
        result = num * 2.2;
    } else if (sub1 === 'kg' && sub2 === 'stone') {
        result = num / 6.35;
    } else if (sub1 === 'stone' && sub2 === 'kg') {
        result = num * 6.35;
    } else if (sub1 === 'kg' && sub2 === 'rus_pound') {
        result = num / 16.38;
    } else if (sub1 === 'rus_pound' && sub2 === 'kg') {
        result = num * 16.38;
    } else if (sub1 === 'm' && sub2 === 'km') {
        result = num / 1000;
    } else if (sub1 === 'km' && sub2 === 'm') {
        result = num * 1000;
    } else if (sub1 === 'm' && sub2 === 'mile') {
        result = num / 1609;
    } else if (sub1 === 'mile' && sub2 === 'm') {
        result = num * 1609;
    } else if (sub1 === 'm' && sub2 === 'cable') {
        result = num * 0.00539956803455724;
    } else if (sub1 === 'cable' && sub2 === 'm') {
        result = num / 0.00539956803455724;
    } else if (sub1 === 'm' && sub2 === 'nautical_mile') {
        result = num / 1852;
    } else if (sub1 === 'nautical_mile' && sub2 === 'm') {
        result = num * 1852;
    } else if (sub1 === 'm' && sub2 === 'league') {
        result = num / 5556;
    } else if (sub1 === 'league' && sub2 === 'm') {
        result = num * 5556;
    } else if (sub1 === 'm' && sub2 === 'foot') {
        result = num * 3.281;
    } else if (sub1 === 'foot' && sub2 === 'm') {
        result = num / 3.281;
    } else if (sub1 === 'm' && sub2 === 'yard') {
        result = num * 1.094;
    } else if (sub1 === 'yard' && sub2 === 'm') {
        result = num / 1.094;
    } else if (sub1 === 'C' && sub2 === 'K') {
        result = num + 273.15;
    } else if (sub1 === 'K' && sub2 === 'C') {
        result = num - 273.15;
    } else if (sub1 === 'C' && sub2 === 'F') {
        result = (num * 9 / 5) + 32;
    } else if (sub1 === 'F' && sub2 === 'C') {
        result = (num - 32) * 5 / 9;
    } else if (sub1 === 'C' && sub2 === 'Re') {
        result = num / 0.8;
    } else if (sub1 === 'Re' && sub2 === 'C') {
        result = num * 0.8;
    } else if (sub1 === 'C' && sub2 === 'Ra') {
        result = num * 1.8 + 32 + 459.67;
    } else if (sub1 === 'Ra' && sub2 === 'C') {
        result = (num - 459.67 - 32) / 1.8;
    } else if (sub1 === 'C' && sub2 === 'Ro') {
        result = num * 21 / 40 + 7.5;
    } else if (sub1 === 'Ro' && sub2 === 'C') {
        result = ((num - 7.5) / 21 * 40);
    } else if (sub1 === 'C' && sub2 === 'N') {
        result = num * 0.33000;
    } else if (sub1 === 'N' && sub2 === 'C') {
        result = num / 0.33000;
    } else if (sub1 === 'C' && sub2 === 'D') {
        result = (100 - num) * 3 / 2;
    } else if (sub1 === 'D' && sub2 === 'C') {
        result = (num / 3 * 2) - 100;
    }

    document.getElementById('output').innerHTML = result;
}

