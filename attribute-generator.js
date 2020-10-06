
const chart = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    }
};

const flat = flatten(chart)

dataAtribues = Object.entries(flat).map(function (kv) { return 'data-' + camelToKebab(kv[0]) + '="' + kv[1] + '"' })

console.log(dataAtribues.join('\n'))

function camelToKebab(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function flatten(data) {
    var result = {};
    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for (var i = 0, l = cur.length; i < l; i++)
                recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}
