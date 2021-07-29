// import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");
// const TextToIPA = require('text-to-ipa')
import arrIPA from "../../../util/filedulieu/Dulieu_IPA"
import jsonData from "../../../util/filedulieu/Dulieu_tho"
let arr_Hold_not_ipa = []


// let arrstr11 = [
//     `boxes/ˈbɑksəz/by/ˈbaɪ/reason/ˈɹizən/explain/ɪksˈpɫeɪn/choice/ˈtʃɔɪs/boring/ˈbɔɹɪŋ/because/bɪˈkɑz/discuss/dɪˈskəs/objects/ˈɑbdʒɛkts/made/ˈmeɪd/father's/ˈfɑðɝz/hobby/ˈhɑbi/eggshells/ˈɛɡˌʃɛɫz/knows/ˈnoʊz/fragile/ˈfɹædʒəɫ/pieces/ˈpisəz/empty/ˈɛmpti/amazing/əˈmeɪzɪŋ/ago/əˈɡoʊ/trip/ˈtɹɪp/saw/ˈsɔ/carved/ˈkɑɹvd/gallery/ˈɡæɫɝi/carve/ˈkɑɹv/learned/ˈɫɝnd/everything/ˈɛvɹiˌθɪŋ/internet/ˈɪntɝˌnɛt/need/ˈnid/weeks/ˈwiks/curved/ˈkɝvd/unique/juˈnik/gifts/ˈɡɪfs/hope/ˈhoʊp/he'll/hiːl/teach/ˈtitʃ/eggshell/ˈɛɡˌʃɛɫ/speaking/ˈspikɪŋ/uses/ˈjusəz/artwork/ˈɑɹtˌwɝk/share/ˈʃɛɹ/ideas/aɪˈdiəz/talking/ˈtɔkɪŋ/useful/ˈjusfəɫ/intend/ˌɪnˈtɛnd/continue/kənˈtɪnju/exciting/ɪkˈsaɪtɪŋ/skills/ˈskɪɫz/anything/ˈɛniˌθɪŋ/-ing/ˈɪŋ`
//     , `reporter/ɹɪˈpɔɹtɝ/web/ˈwɛb/shares/ˈʃɛɹz/feelings/ˈfiɫɪŋz/tip/ˈtɪp/other's/ˈəðɝz/paragraph/ˈpæɹəˌɡɹæf/shown/ˈʃoʊn/looking/ˈɫʊkɪŋ/back/ˈbæk/appropriate/əˈpɹoʊpɹiˌeɪt/labels/ˈɫeɪbəɫz/role-play/ˈroʊl ˌpleɪ/famous/ˈfeɪməs/magazine/ˈmæɡəˌzin/course/ˈkɔɹs/briefly/ˈbɹifɫi/cut/ˈkət/glue/ˈɡɫu/magazines/ˈmæɡəˌzinz/collage/kəˈɫɑʒ/health/ˈhɛɫθ/tips/ˈtɪps/imperatives/ˌɪmˈpɛɹətɪvz/less/ˈɫɛs/compound/ˈkɑmpaʊnd/advice/ædˈvaɪs/healthy/ˈhɛɫθi/lifestyles/ˈɫaɪfˌstaɪɫz/woke/ˈwoʊk/already/ɔˈɹɛdi/already/ɔˈɹɛdi/sleep/ˈsɫip/something/ˈsəmθɪŋ/outdoors/ˈaʊtˈdɔɹz/healthier/ˈhɛɫθiɝ/sound/ˈsaʊnd/sad/ˈsæd/junk/ˈdʒəŋk/putting/ˈpətɪŋ/weight/ˈweɪt/plus/ˈpɫəs/flu/ˈfɫu/weak/ˈwik/might/ˈmaɪt/sunburnt/ˈsʌn.bɝːnt/won't/ˈwoʊnt/coming/ˈkəmɪŋ/phrase/ˈfɹeɪz/becoming/bɪˈkəmɪŋ/fatter/ˈfætɝ/accept/ækˈsɛpt/wrong/ˈɹɔŋ/wants/ˈwɑnts/avoid/əˈvɔɪd/spots/ˈspɑts/weight/ˈweɪt/allergy/ˈæɫɝdʒi/sunburn/ˈsənˌbərn/sickness/ˈsɪknəs/rank/ˈɹæŋk/least/ˈɫist/wrong/ˈɹɔŋ/hat/ˈhæt/regularly/ˈɹɛɡjəɫɝɫi/hands/ˈhændz/face/ˈfeɪs/problem/ˈpɹɑbɫəm/try/ˈtɹaɪ/matches/ˈmætʃəz/yours/ˈjɔɹz/cough/ˈkɑf/headache/ˈhɛˌdeɪk/sore/ˈsɔɹ/throat/ˈθɹoʊt/temperature/ˈtɛmpɝətʃɝ/stomachache/ˈstəməkˌāk/toothache/ˈtuːθ.eɪk/earache/ˈɪr.eɪk/sick/ˈsɪk/patient/ˈpeɪʃənt/doctor's/ˈdɑktɝz/patients/ˈpeɪʃənts/missing/ˈmɪsɪŋ/meeting/ˈmitɪŋ/cues/ˈkjuz/hot/ˈhɑt/last/ˈɫæs/had/ˈhæd/felt/ˈfɛɫt/ate/ˈeɪt/sweets/ˈswits/extend/ɪkˈstɛnd/ferry/ˈfɛɹi/fault/ˈfɔɫt/safe/ˈseɪf/vat/ˈvæt/vast/ˈvæst/vault/ˈvɔɫt/save/ˈseɪv/leave/ˈɫiv/obesity/əˈbisəti/lifestyle/ˈɫaɪfˌstaɪɫ/important/ˌɪmˈpɔɹtənt/imperative/ˌɪmˈpɛɹətɪv/direct/daɪˈɹɛkt/commands/kəˈmændz/orders/ˈɔɹdɝz/suggestions/səˈdʒɛstʃənz/fruit/ˈfɹut/sunbathe/ˈsənˌbeɪð/above/əˈbəv/top/ˈtɑp/teens/ˈtinz/important/ˌɪmˈpɔɹtənt/article/ˈɑɹtəkəɫ/website/ˈwɛbˌsaɪt/blanks/ˈbɫæŋks/tv/ˈtiˈvi/experts/ˈɛkspɝts/staying/ˈsteɪɪŋ/shape/ˈʃeɪp/even/ˈivɪn/walks/ˈwɔks/times/ˈtaɪmz/plenty/ˈpɫɛni/depression/dɪˈpɹɛʃən/concentrate/ˈkɑnsənˌtɹeɪt/you'll/ˈjuɫ/fresher/ˈfɹɛʃɝ/mornings/ˈmɔɹnɪŋz/fruits/ˈfɹuts/should/ˈʃʊd/harder/ˈhɑɹdɝ/spread/ˈspɹɛd/eyes/ˈaɪz/limit/ˈɫɪmət/hour/ˈaʊɝ/days/ˈdeɪz/link/ˈɫɪŋk/coordinating/koʊˈɔɹdəˌneɪtɪŋ/conjunction/kənˈdʒəŋkʃən/addition/əˈdɪʃən/contrast/ˈkɑntɹæst/result/ɹiˈzəɫt/independent/ˌɪndɪˈpɛndənt/clause/ˈkɫɔz/americans/əˈmɛɹəkənz/adults/ˈædəɫts/active/ˈæktɪv/comma/ˈkɑmə/joining/ˈdʒɔɪnɪŋ/healthily/ˈhel.θəl.i/live/ˈɫaɪv/beginnings/bɪˈɡɪnɪŋz/completes/kəmˈpɫits/washes/ˈwɑʃɪz/eats/ˈits/lots/ˈɫɑts/told/ˈtoʊɫd/plays/ˈpɫeɪz/part/ˈpɑɹt/myth/ˈmɪθ/sushi/ˈsuʃi/vitamins/ˈvaɪtəmənz/sleeping/ˈsɫipɪŋ/vegetarians/ˌvɛdʒəˈtɛˌɹiənz/statement/ˈsteɪtmənt/facts/ˈfæks/myths/ˈmɪθs/longer/ˈɫɔŋɡɝ/sleeping/ˈsɫipɪŋ/recover/ɹɪˈkəvɝ/fresh/ˈfɹɛʃ/sitting/ˈsɪtɪŋ/hurts/ˈhɝts/pick/ˈpɪk/drop/ˈdɹɑp/surprised/səˈpɹaɪzd/disease/dɪˈziz/keeping/ˈkipɪŋ/turn/ˈtɝn/oranges/ˈɔɹəndʒəz/test/ˈtɛst/headings/ˈhɛdɪŋz/calories/ˈkæɫɝiz/energy/ˈɛnɝdʒi/walking/ˈwɔkɪŋ/if/ˈɪf/running/ˈɹənɪŋ/calorie/ˈkæɫɝi/eating/ˈitɪŋ/diet/ˈdaɪət/expert/ˈɛkspɝt/exactly/ɪɡˈzæktɫi/you're/ˈjuɹ/diet/ˈdaɪət/blow/ˈbɫoʊ/happens/ˈhæpənz/per/ˈpɝ/aerobics/ɝˈoʊbɪks/hours/ˈaʊɝz/few/ˈfju/total/ˈtoʊtəɫ/include/ˌɪnˈkɫud/olympics/oʊˈɫɪmpɪks/olympic/oʊˈɫɪmpɪk/sport/ˈspɔɹt/called/ˈkɔɫd/event/iˈvɛnt/child/ˈtʃaɪɫd/preparing/pɝˈpɛɹɪŋ/wanted/ˈwɔntɪd/only/ˈoʊnɫi/triathlon/ˌtɹaɪˈæθɫən/easier/ˈiziɝ/waiting/ˈweɪtɪŋ/page/ˈpeɪdʒ/dry/ˈdɹaɪ/advance/ədˈvæns/burgers/ˈbɝɡɝz/chips/ˈtʃɪps/regards/ɹɪˈɡɑɹdz/barry/ˈbæɹi/wake/ˈweɪk/usual/ˈjuʒəwəɫ/alarm/əˈɫɑɹm/maintain/meɪnˈteɪn/usual/ˈjuʒəwəɫ/pattern/ˈpætɝn/awake/əˈweɪk/rule/ˈɹuɫ/feet/ˈfit/seconds/ˈsɛkəndz/underline/ˈəndɝˌɫaɪn/writes/ˈɹaɪts/reply/ɹiˈpɫaɪ/feels/ˈfiɫz/sleeps/ˈsɫips/forgot/fɝˈɡɑt/sun/ˈsən/never/ˈnɛvɝ/itchy/ˈɪtʃi/nose/ˈnoʊz/line/ˈɫaɪn/coordinator/koʊˈɔɹdəˌneɪtɝ/meaningful/ˈminɪŋfəɫ/discussion/dɪˈskəʃən/runny/ˈɹəni/rub/ˈɹəb/egg/ˈɛɡ/head/ˈhɛd/agree/əˈɡɹi/disagree/dɪsəˈɡɹi/wet/ˈwɛt/gives/ˈɡɪvz/makes/ˈmeɪks/smarter/ˈsmɑɹtɝ/carrots/ˈkæɹəts/finished/ˈfɪnɪʃt/people's/ˈpipəɫz/main/ˈmeɪn/options/ˈɑpʃənz/signs/ˈsaɪnz/community/kəmˈjunəti/service/ˈsɝvəs/helping/ˈhɛɫpɪŋ/hand/ˈhænd/community/kəmˈjunəti/service/ˈsɝvəs/past/ˈpæst/perfect/ˈpɝˌfɪkt/community/kəmˈjunəti/service/ˈsɝvəs/reasons/ˈɹizənz/global/ˈɡɫoʊbəɫ/citizen/ˈsɪtəzən/teen/ˈtin`
// ]
// let ArrStr11 = arrstr11.join("/").split("\n    ").join("").split("/");
// for (let i = 0; i < ArrStr11.length; i += 2) {
//     arrIPA.push({
//         "text": ArrStr11[i],
//         "ipa": ArrStr11[i + 1].split("/").join("")
//     })
// }





let arr1 = ``
let arr2 = ``
jsonData.forEach(e => {
    arr1 += e.EN;
    arr1 += "\n";
    arr2 += e.VN;
    arr2 += "\n";
})
export default async (req, res) => {// const { db } = await connectToDatabase();// TextToIPA.loadDict(); // blocking load
    try {


        let ARR1 = arr1.split("\n")
        let ARR2 = arr2.split("\n")


        let ArrFN = [];
        ARR1.forEach(e => {
            ArrFN.push(e.split(" "))
        })
        let ArrFNIPA = []
        ArrFN.forEach(e => {
            let Arr_temp = []
            e.forEach(ee => {

                if (ee !== "") {
                    let status = true
                    arrIPA.forEach(eee => {

                        if (eee.text.FN_sort() === ee.FN_sort()) {
                            if (status) {
                                Arr_temp.push(eee.ipa)
                            }
                            status = false
                        }
                    })
                    if (status) {
                        Arr_temp.push(ee)
                        arr_Hold_not_ipa.push(ee.toLowerCase());
                    }
                }

            })
            ArrFNIPA.push(Arr_temp.join(" "))
        })
        let arrFinal = []
        for (let i = 0; i < ARR1.length; i++) {
            arrFinal.push({
                "EN": ARR1[i],
                "VN": ARR2[i],
                "IPA": ArrFNIPA[i],
            })
        }



        res.status(200).json({
            success: true,
            notipa: (arr_Hold_not_ipa.sort((a, b) => a.localeCompare(b))),
            data: arrFinal
        })



    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}

String.prototype.FN_sort = function () {
    return this.toLowerCase().split(/[\?#!-':()’\"\t.,]+/).join("")
}

function unique(arr) {
    let ArrRes = [];
    arr.forEach((e, i) => {
        i === 0 ? ArrRes.push(e) : null;
        i !== 0 && e.text !== arr[i - 1].text ? ArrRes.push(e) : null
    })
    return ArrRes
}