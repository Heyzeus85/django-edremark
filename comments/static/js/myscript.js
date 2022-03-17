function writeComment(event) {
    event.preventDefault();

    fetch('/api/options/').then(response => response.json()).then(data => composeComment(data));

    function composeComment(data) {
        let name = document.getElementById('name').value;
        let pronouns = document.getElementById('pronouns').value;
        let schoolClass = document.getElementById('schoolClass').value;
        let marking = document.getElementById('marking period').value;
        let term = document.getElementById('term').value;

        let strengthValue1 = document.getElementById('strength1').value;
        let strength1 = data.filter(el => (el['name']===strengthValue1 && el['kind']==='strength'))[0]['text'];
        let strengthValue2 = document.getElementById('strength2').value;
        // let strength2 = data.filter(el => (el['name']===strengthValue2 && el['kind']==='strength'))[0]['text'];
        let improveValue1 = document.getElementById('improve1').value;
        let improve1 = data.filter(el => (el['name']===improveValue1 && el['kind']==='improve'))[0]['text'];
        let improveValue2 = document.getElementById('improve2').value;
        // let improve2 = data.filter(el => (el['name']===improveValue2 && el['kind']==='improve'))[0]['text'];
        let recommendValue1 = document.getElementById('recommend1').value;
        let recommend1 = data.filter(el => (el['name']===recommendValue1 && el['kind']==='recommend'))[0]['text'];
        let recommendValue2 = document.getElementById('recommend2').value;
        // let recommend2 = data.filter(el => (el['name']===recommendValue2 && el['kind']==='recommend'))[0]['text'];
        
        let result;
        if (strengthValue2 == 'none' && improveValue2 == 'none' && recommendValue2 == 'none') {
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. However, ${name} ${improve1}. I would recommend that ${pronouns} ${recommend1}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        } else if (strengthValue2 != 'none' && improveValue2 == 'none' && recommendValue2 == 'none') {
            let strength2 = data.filter(el => (el['name']===strengthValue2 && el['kind']==='strength'))[0]['text'];
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. ${pronouns} also ${strength2}. However, ${name} ${improve1}. I would recommend that ${pronouns} ${recommend1}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        } else if (strengthValue2 != 'none' && improveValue2 != 'none' && recommendValue2 == 'none') {
            let strength2 = data.filter(el => (el['name']===strengthValue2 && el['kind']==='strength'))[0]['text'];
            let improve2 = data.filter(el => (el['name']===improveValue2 && el['kind']==='improve'))[0]['text'];
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. ${pronouns} also ${strength2}. However, ${name} ${improve1}. ${pronouns} also ${improve2}. I would recommend that ${pronouns} ${recommend1}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        } else if (strengthValue2 != 'none' && improveValue2 != 'none' && recommendValue2 != 'none') {
            let strength2 = data.filter(el => (el['name']===strengthValue2 && el['kind']==='strength'))[0]['text'];
            let improve2 = data.filter(el => (el['name']===improveValue2 && el['kind']==='improve'))[0]['text'];
            let recommend2 = data.filter(el => (el['name']===recommendValue2 && el['kind']==='recommend'))[0]['text'];
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. ${pronouns} also ${strength2}. However, ${name} ${improve1}. ${pronouns} also ${improve2}. I would recommend that ${pronouns} ${recommend1}, and that ${pronouns} ${recommend2}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        } else if (strengthValue2 == 'none' && improveValue2 != 'none' && recommendValue2 != 'none') {
            let improve2 = data.filter(el => (el['name']===improveValue2 && el['kind']==='improve'))[0]['text'];
            let recommend2 = data.filter(el => (el['name']===recommendValue2 && el['kind']==='recommend'))[0]['text'];
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. However, ${name} ${improve1}. ${pronouns} also ${improve2}. I would recommend that ${pronouns} ${recommend1}, and that ${pronouns} ${recommend2}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        } else if (strengthValue2 == 'none' && improveValue2 == 'none' && recommendValue2 != 'none') {
            let recommend2 = data.filter(el => (el['name']===recommendValue2 && el['kind']==='recommend'))[0]['text'];
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. However, ${name} ${improve1}. I would recommend that ${pronouns} ${recommend1}, and that ${pronouns} ${recommend2}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        } else if (strengthValue2 != 'none' && improveValue2 == 'none' && recommendValue2 != 'none') {
            let strength2 = data.filter(el => (el['name']===strengthValue2 && el['kind']==='strength'))[0]['text'];
            let recommend2 = data.filter(el => (el['name']===recommendValue2 && el['kind']==='recommend'))[0]['text'];
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. ${pronouns} also ${strength2}. However, ${name} ${improve1}. I would recommend that ${pronouns} ${recommend1}, and that ${pronouns} ${recommend2}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        } else if (strengthValue2 == 'none' && improveValue2 != 'none' && recommendValue2 == 'none') {
            let improve2 = data.filter(el => (el['name']===improveValue2 && el['kind']==='improve'))[0]['text'];
            result = `It has been wonderful having ${name} in ${schoolClass} during the ${term} ${marking}! ${name} ${strength1}. However, ${name} ${improve1}, and ${pronouns} also ${improve2}. I would recommend that ${pronouns} ${recommend1}. I look forward to working with ${name} during the rest of the year!`;
            document.getElementById('result').innerText = result;
        }
    }
}

