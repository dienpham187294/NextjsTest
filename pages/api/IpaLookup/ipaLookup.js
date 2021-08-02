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





let arr1 = `Unit 11
Lesson 1
Look, listen and repeat.
It’s time to get up, Phong.
What time is it, Mum?
It’s seven o’clock.
Today’s Sunday and I don't have to go to school.
But it’s time for breakfast.
Oh. yes, Mum
Point and say.
What time is it?
seven 
seven fifteen 
seven twenty-five
seven thirty
seven forty-five
Work in pairs. 
Ask your partners what time it is.
===
Listen and tick.
Look and write.
What time is it? It’s four o 'clock.
Let’s sing. 
What time is it?
What time is it? 
It's six o’clock. 
It’s time to get up.
What time is it?
It's six fifteen.
It's time for breakfast.
What time is it?
It’s six forty-five.
It’s time for school.
===
Look, listen and repeat.
What time do you get up?
It’s Six o'clock.
What time is it now?
Seven fifteen. 
Oh no! We’re late for school.
Let's run. 
Point and say.
What time do you get up?
get up
have breakfast
have dinner
go to bed
Let’s talk.
What time is it?
What time do you get up?
===
Listen and draw the time.
Draw and write the time.
What time do you get up? 
I get up at 6 o’clock
What time do you go to school?
What time do you have dinner? 
What time do you go to bed?
Let’s play.
I get up at six o’clock.
===
Listen and repeat.
cook
book 
noon
school
My mother cooks at six o’clock.
Your book is on the table.
I play football at noon.
They have lunch at school.
Listen and write. Then say aloud
Look! The  is red.
They usually read books 
My big brother 
can
The children usually play football at school
Let’s chant.
What time do you go to school?
What time do you go to school?
Seven o’clock in the morning 
Seven o'clock in the morning 
Is time for school.
What time do you have dinner?
Six o'clock in the evening 
Six o’clock in the evening 
Is time for dinner.
===
Read and complete.
Phong studies at Nguyen Du Primary School. 
Every day he gets up at 6.30. 
He goes to school at 7 a.m. 
School starts at 7.30 a.m and finishes at 4.30 p.m. 
He goes home at 5 o’clock. 
He has dinner at 7.15 in the evening. 
Then he does his homework or listens to music. 
He goes to bed at 9.45.
Phong goes to school at 7.00
He goes home at 5 o’clock
Let’s write.
Linda gets up at six o’clock. 
She
Project
Complete your daily routine. 
Then tell the class about it.
Activity
Time
In the morning
In the afternoon
In the evening
===
Unit 12 
What does your father do?
Lesson 1
Look, listen and repeat. 
Class, get into pairs, please! 
Interview your partner about the jobs of his or her family members.
What does your father do, Mai?
He’s a teacher.
And what about your mother?
She’s a nurse.
What does your sister do?
She’s a student.
Point and say.			
Father
farmer
mother
nurse
uncle
driver 
brother
factory worker
Work in pairs. 
Ask your partners about the jobs of their family members.
===
Listen and tick.
Father 
Mother 
Brother 
Sister
Look and write.
Let’s sing.
My family
This is a picture of my family.
This is my grandpa. He's a driver.
This is my grandma. She’s a factory worker.
This is my father. He's a farmer.
This is my mother. She’s a nurse.
And this is me. I am a pupil.
===
Look, listen and repeat.
Let's play a game of jobs.
She’s a doctor. Where does she work?
In a hospital.
Well done! Now it’s your turn.
He’s a worker. Where does he work?
In a factory.
She's a farmer.
Where does she work? E
In a field.
Correct!
Point and say.
Doctor
in a hospital 
farmer
in a field
worker
in a factory 
clerk
in an office
Let’s talk.
What does your father do?
Mother
Grandpa
Grandma
Brother
sister 
Where does she work?
===
Listen and number.
Look and write
This is Ann’s father.
Let’s play.
===
Lesson 3
Listen and repeat.
field
piece
teacher
reading
My grandpa works in a field. 
I want a piece of chocolate. 
My mother is a teacher.
She’s reading a book now.
Listen and circle. 
Then say sentences with the circled words. 
field	 
piece
teaching	 
reading
Let’s chant.
Jobs and places of work
What does your father do? 
He's a farmer. 
Where does he work? 
In a field.
What does your mother do? 
She's a teacher. 
Where does she work? 
In a school.
What does your sister do? 
She’s a worker. 
Where does she work? 
In a factory.
What does your brother do? 
He's a clerk.
Where does he work? 
In an office.
===
Read and complete.
Report
This is the report of my interview with Phong. 
His father is a teacher. 
He works in Le Hong Phong Primary School. 
His mother is a nurse. 
She works in Thanh Nhan Hospital. 
Phong has a brother but he doesn't have a sister. 
His brother is a worker in a car factory. 
And as you know, Phong is a pupil in Class 4A. 
Thank you for reading.
Job
Father
Mother
Brother
Place of work
Write about the jobs of your family members and where they work,
photo of my family
Project 
Interview two classmates about their parents’ jobs. 
Tell the class about them.
Interviewee’s name
Interviewee’s name
Job
Pace of work
Father
Mother
===
Unit 13 
Would you like some milk?
Lesson 1
Look, listen and repeat.
What’s your favourite food?
food
How about you, Tom?
I like chicken.
What’s your favourite drink, Mai?  
It’s orange juice.
Do you like orange juice?
No, I don’t. I like milk.
Point and say. 
What’s your favourite?
Food
beef	
food
pork
drink
orange juice 
drink
water
Work in pairs. 
Ask your partners about their favourite food and drink. 
===
Listen and tick, 
What’s his favourite food?
What’s his favourite drink?
What is her favourite food and drink?
Look and write. 
What’s his favourite food?
What’s her favourite drink?
What’s his favourite food and drink?
Let’s sing.
My favourite food and drink
What’s your favourite food? 
What's your favourite food?
Hey ho, hey ho. my favourite food is beef.
What's your favourite drink? 
What’s your favourite drink?
Hey ho. hey ho, my favourite drink is milk
Beef and milk, beef and milk.
Hey ho, hey ho, they're my favourite food and drink.
===
Lesson 2
Look, listen and repeat.
Would you like some noodles?
Yes. please.
I love noodles.
Would you like some milk? No, thanks
What about orange juice?
No, thank you.
How about lemonade?
Lemonade! Yes, please!
That’s my favourite drink.
Point and say.
Would you like some bread ?
Yes, please. 
No, thanks.
bread
rice
vegetables
lemonade
Let’s talk. y
What’s your favourite food?
Would you like some milk?
Listen and number. 
Look and write.
Drink
Food
Let’s play.
food or drink
===
Lesson 3
Listen and repeat.
beef 
leaf 
fish 
dish
My favourite food is beef.
The leaf is yellow.
Would you like some fish?
That’s a big dish of fish.
Listen and tick. 
Then write and say aloud. 
My favourite food is fish
Would you like some fish?
What colour is this dish Mummy?
She likes this	very much.	
Let’s chant. 
Would you like some fish?
Yes, please. I love fish.
It’s my favourite food.
Would you like some milk?
Yes. please. I love milk
It's my favourite drink. 
===
Read and complete.
Hi. My name is Linda.
I like beef. 
It is my favourite food. 
My favourite drink is orange juice. 
I don’t like vegetables. 
My younger brother Peter doesn’t like beef. 
He loves chicken. 
It is his favourite food. 
He loves lemonade too. 
Lemonade is his favourite drink. 
He drinks it every day.
Favourite food 
Favourite drink
Write about your favourite food and drink.
Project
Interview your classmates about their favourite food and drink. 
Then report the results to the class.
===
Unit 14 
What does he look like?
Look, listen and repeat. 
What are you doing, Linda?
I’m writing an e-mail to my brother.
Where is he now?
He's in England.
What does he do?
He’s a footballer.
What does he look like?
He's tall.
Point and say.
What does she look like?
tall 
short 
slim 
old
young
Work in pairs. 
Ask your partners about their family members
===
Listen and tick.
Look and write.
What does he look like?
What does she look like?
What do they look like?
What do they look like?
Let’s play.
find SOMEONE WHO
===
Lesson 2
Look, listen and repeat. 
This is my father.
He's tall.
And this is my elder brother.
Oh, he's tall, too.
Who’s taller? 
My brother is.
My brother’s taller than my father.
Point and say.
tall 
taller 
short 
shorter
big 
bigger 
small 
smaller
old 
older 
young 
younger
Let’s talk,
Talk about your classmates.
What does she look like?
Who’s taller
Shorter
Older
===
Listen and circle. 
Nam is than his sister.
His sister is than his mother.
His mother is than his father.
His father is than his mother.
Taller
Slimmer
Smaller
Shorter
Younger
Older
taller
Look and write.
Who’s slimmer, the father or the brother?
Who's shorter, the father or the mother?
Who’s older, the brother or the sister?
Who's stronger, the father or the brother?
Let’s sing.
What do they look like?
What does your mother look like?
She's tall.
She's taller than me.
What does your father look like?
He's slim
He's slimmer than me.
===
Lesson 3
Listen and repeat.
this
that 
thin 
thick
This is my mother.
That is my father.
The book is thin.
The dictionary is thick.
Listen and tick. 
Then write and say aloud. 
thin	 
there
there	
three
Let’s chant.
This is my family
This is my mother.
And this is my father.
What do they look like?
They're young and strong.
That’s my grandfather.
And that’s my grandmother.
What do they look like?
They're old, and strong too.
===
Read and write
Dear Jane,
My name's Marie. 
I'm nine years old and I live in Can Tho. 
There are four people in my family: my father, my mother, my brother and me. 
My father's 34 years old. 
He's a teacher, and he's tall and slim. 
My mother's 31 years old. 
She's a doctor. 
I think she's very beautiful? 
My brother and I are pupils at Hoa Sen Primary School. 
I'm older than my brother but he's taller than me.
Best wishes,
Marie
What does Marie’s father do?
Who is younger, Marie or her brother?
What does her father look like?
Who is shorter, Marie or her brother?
What does her mother look like?
Write.
Project
Bring a photo of your family. 
Describe your family members to the class.
===
Unit 15 
When's Children's Day?
Lesson 1
Look, listen and repeat. 
Hi. Mai. You look very smart today!
What party is it? 
It’s a party for Children’s Day.
Yes, because we’re having a party.
When is it?
It’s on the first of June
Come and join us
Yes! Thank you
Point and say
New Year
Children’s Day
Teachers' Day
Christmas
Work in pairs. 
Ask your partners about holidays and festivals in Viet Nam and other countries.
===
Listen and tick.
Look and write.
When is Christmas?
When is Teachers’ Day?
When is Children’s Day9
Let’s sing.
Happy New Year!
Happy. Happy New Year!
Happy. Happy New Year!
Time for hope and time for cheer.
Happy, Happy New Year!
Happy, Happy New Year!
Happy, Happy New Year!
A song of joy for all to hear.
A new year comes! 
We say, hooray!
Happy New Year!
===
Lesson 2
Look, listen and repeat.
What are you doing, Mai?
I’m decorating my house. 
It’s Tet soon.
What do you do at Tet?
I wear nice clothes.
What else?
I eat a lot of banh chung.
I get lucky money from my parents. 
Oh, I like Tet
Point and say. 
What do you do at Tet?
make banh chung
decorate the house
watch firework displays
visit grandparents
Let’s talk. 
When is Tet?
===
What do you do at Tet?
Listen and circle. 
What do they do at Tet?
buys flowers
decorates the house
His parents
go shopping
make banh chung
His sister wears new clothes
His sister gets lucky money
Phong and his sister watch firework displays 
Phong and his sister visit teachers
Look and write.
What do they do at Tet?
Mai and her mother
Phong and his father
Nam and his family
Hoa and her brother
Let’s play, 
Match the phrases to make sentences. 
Tell your partners about them.
Presents
have a party.
For Children's Day. 
give flowers.
For Teachers Day. 
===
Listen and repeat. 
Clothes
She wears new clothes at Tet.
Close
Close the door, please.
flowers
My mother buys lots of flowers for Tet.
floor
I clean the floor in the afternoon.
Listen and write. 
Then say aloud.
Let’s chant.
We give our teachers lots of things on Teachers’ Day.
Open the door, please.
The books are beautiful.
She’s cleaning the kitchen now.
What do you do at Tet
We buy flowers and decorate the house. 
We clean the floor and we wear new clothes.
We go out and run along the street.
We see our family and all our friends.
===
Read and write.
Hello, I'm Mai. 
It's Tet soon. 
I have a lot of fun with my family. 
Before Tet, we go to the market and buy many flowers We decorate our house and make banh chung. 
We have a big party and watch the firework displays. 
During Tet, we visit our grandparents, teachers and friends. 
We love Tet very much.
Write about your Tet.
Project
Make a greeting card for Tet. 
Then write wishes to your friend.
===
REVIEW 3
Listen and number.
Read and complete.
orange juice 
drinking 
seven 
thirty 
family
Hoa’s family is already awake. 
Hoa and her
father like eating eggs and bread
Her mother likes eating banh chung and meat 
They are ready to leave for work
===
Read and match. 
What time do you get up every morning?
What does your mother do?
Would you like some orange juice?
When is Teachers’ Day?
What does your brother look like?
He’s tall and thin.
It’s on the twentieth of November.
She’s a nurse.
Yes, please.
Six or six thirty.
Look and write.
Write about your father or mother. 
My father
mother 
He
She is 6 years old. 
He is a doctor and works in hospital
She likes for breakfast and for dinner.
===
Short story Cat and Mouse 
Read and listen to the story. 
Then fill the gaps.
What do you do, Mary?
I’m a student in New York.
What do your parents do? 
My mother is a cook.
She in a school.
And what about your dad?
He's a musician. 
He work in a band.
What do they look like?
My mum is very tall.
Well,
me and my dad
Today is Labor bay in America.
Really? What do people on Labor bay?
===
Number the sentences. 
What do you do in America, Mary?
My mum works in a school.
What do your parents do?
I’m a student
He plays in a band.
What about your dad?
My mum is a cook and my dad is a musician.
Where do they work?
Work in pairs. 
Complete the conversation with information about you. 
Where do you live?
Where do you live?
What does your mum do? 
What does your mum do? 
What about your dad? 
What about your dad?
Find words in the story to complete the sentences. 
My mum is a very good She likes making cakes.
On sunny days, we go to the
Her dad is  than her mum.
He’s a very good. He plays the piano.
===
Unit 16 
Lefs go to the bookshop
Look, listen and repeat. 
Hi, Phong. Where are you going?
I’m going to the bookshop. 
I want to buy some books.
Oh! I want to buy some books, too.
OK. Let’s go to the bookshop together.
Good idea! Where’s the bookshop?
BOOKSHOP
Here!
Point and say.
Let’s go to the bank
I want to drink water
Great idea!
Bakery
buy some bread
pharmacy
buy some medicine
supermarket	
sweet shop
buy some food 
buy some chocolate
Work in pairs. 
Suggest some places to go and say why.
===
Listen and tick.
Where do Phong and Linda go? 
What do they want?
Where do Mai and Tony go?
What do they want?
Look and write. 
Let’s go to the bookshop 
I want to buy some hoods
Let’s sing.
Let's go to the bookshop
I want to buy some books.
Let’s go to the cinema.
I want to see a film.
Let’s go to the zoo.
I want to see the animals.
===
Look, listen and repeat. 
Let’s go to the zoo, Linda.
Sorry. I can’t
How about you, Mai? 
Would you like to go to the zoo?
Yes, I'd like to. 
Can we go to the supermarket first?
Why do you want to go to the supermarket?
Me too! I’m hungry!
Because I want to buy something to eat.
Let’s go together.
Point and say. 
Why do you want to go to the zoo?
the animals
cinema
see a film
bakery 
buy some bread
swimming pool 
swim
Let's talk,
Let’s go to the zoo
Why do you want to go to the zoo?
===
Listen and circle. 
Mai wants to go to the zoo	
sweet shop
bookshop
Tony wants to go to the bakery	 
pharmacy	
cinema

Phong wants to buy some books	
pens	
rulers
Tom wants to buy some sweets	
chocolate	
bread
Look and write. 
Why does he want to go to the supermarket?
Because he wants to buy some cakes and sweets	.
Why does she want to go to the bookshop?
Because 
Why do they want to go to the gym?
Because
Let’s play.
Let’s go to the bookshop
Where and why
Why do you want to go to the bookshop?
===
Listen and repeat. 
book
bookshop 
bakery 
supermarket
I want to buy a book.
Let’s go to the bookshop.
The bread in this bakery is delicious.
Let’s go to the supermarket.
Listen, circle and write. 
Then say aloud.
Let’s go to the bookshop	
supermarket
I want to buy a ruler	
book
There is a near my home bakery	
supermarket
Her sister works in a pharmacy	
supermarket
Let’s chant.
Let's go to the bookshop.
Why do you want to go there? 
Because I want some rulers.
Let's go to the bakery.
Why do you want to go there?
Because I'm hungry.
Read and number.
It is Sunday today. 
Phong and Mai go to many places. 
First, they go to the bookshop because Mai wants to buy some books and pens. 
Then they go to the pharmacy because Phong wants to buy some medicine. 
After that, they go to the zoo because they want to see the animals. 
Finally, they go to the bakery. 
They want to buy something to eat because they are hungry.
Look and write.
Project 
Interview three classmates. 
Ask them where they want to go on Sunday and why they want to go there. 
Then report the results to the class.`
let arr2 = `Đơn vị 11
Bài 1
Nhìn, nghe và lặp lại.
Đã đến lúc phải thức dậy, Phong.
Mấy giờ rồi mẹ?
Bây giờ là bảy giờ.
Hôm nay là Chủ nhật và tôi không phải đi học.
Nhưng đã đến giờ ăn sáng.
Ồ. Vâng mẹ
Chỉ và nói.
Mấy giờ rồi?
bảy
bảy giờ mười lăm
bảy hai lăm
bảy giờ ba mươi
bảy bốn mươi lăm
Làm việc theo cặp.
Hỏi đối tác của bạn bây giờ là mấy giờ.
===
Nghe và đánh dấu.
Nhìn và viết.
Mấy giờ rồi? Bây giờ là bốn giờ đồng hồ.
Hãy hát nào.
Mấy giờ rồi?
Mấy giờ rồi?
Bây giờ là sáu giờ đồng hồ.
Đã đến lúc phải thức dậy.
Mấy giờ rồi?
Bây giờ là sáu giờ mười lăm.
Đã đến giờ ăn sáng.
Mấy giờ rồi?
Bây giờ là sáu giờ bốn mươi lăm.
Đã đến giờ học.
===
Nhìn, nghe và lặp lại.
Bạn dậy lúc mấy giờ?
Bây giờ là sáu giờ.
Bây giờ là mấy giờ?
Bảy giờ mười lăm.
Ôi không! Chúng tôi đi học muộn.
Chạy thôi.
Chỉ và nói.
Bạn dậy lúc mấy giờ?
thức dậy
ăn sáng
ăn tối
đi ngủ
Hãy nói chuyện.
Mấy giờ rồi?
Bạn dậy lúc mấy giờ?
===
Lắng nghe và rút ra thời gian.
Vẽ và viết thời gian.
Bạn dậy lúc mấy giờ?
Tôi thức dậy lúc 6:00
Thời gian nào bạn đi học?
Bạn ăn tối lúc mấy giờ?
Bạn đi ngủ lúc mấy giờ?
Hãy chơi.
Tôi dậy lúc sáu giờ đồng hồ.
===
Lắng nghe và lặp lại.
đầu bếp
sách
không bật
trường học
Mẹ tôi nấu ăn lúc sáu giờ tối.
Cuốn sách của bạn đang ở trên bàn.
Tôi chơi bóng đá vào buổi trưa.
Họ ăn trưa ở trường.
Nghe và viết. Sau đó nói to
Nhìn! Màu đỏ.
Họ thường đọc sách
Anh trai lớn của tôi
có thể
Những đứa trẻ thường chơi bóng đá ở trường
Hãy hát thánh ca.
Thời gian nào bạn đi học?
Thời gian nào bạn đi học?
Bảy giờ sáng
Bảy giờ sáng
Đã đến giờ học.
Bạn ăn tối lúc mấy giờ?
Sáu giờ tối
Sáu giờ tối
Đã đến lúc ăn tối.
===
Đọc và hoàn thành.
Phong học trường Tiểu học Nguyễn Du.
Mỗi ngày anh ấy dậy lúc 6h30.
Anh ấy đến trường lúc 7 giờ sáng.
Trường học bắt đầu lúc 7h30 sáng và kết thúc lúc 4h30 chiều.
Anh ấy về nhà lúc 5 giờ đồng hồ.
Anh ấy ăn tối lúc 7 giờ 15 tối.
Sau đó, anh ấy làm bài tập về nhà hoặc nghe nhạc.
Anh ấy đi ngủ lúc 9h45.
Phong đi học lúc 7.00
Anh ấy về nhà lúc 5 giờ đồng hồ
Cùng viết nào.
Linda dậy lúc sáu giờ đồng hồ.
Cô ấy
Dự án
Hoàn thành thói quen hàng ngày của bạn.
Sau đó kể cho cả lớp nghe về điều đó.
Hoạt động
Thời gian
Vào buổi sáng
vào buổi chiều
Vào buổi tối
===
Đơn vị 12
Ba của bạn làm nghề gì?
Bài 1
Nhìn, nghe và lặp lại.
Cả lớp, làm ơn xếp thành cặp!
Phỏng vấn đối tác của bạn về công việc của các thành viên trong gia đình của họ.
Bố bạn làm nghề gì vậy Mai?
Anh ấy là một giáo viên.
Còn mẹ bạn thì sao?
Cô ấy là một y tá.
Chị gái của bạn làm nghề gì vậy?
Cô ấy là một sinh viên.
Chỉ và nói.
Cha
nông dân
mẹ
cô y tá
Chú
tài xế
Anh trai
công nhân nhà máy
Làm việc theo cặp.
Hỏi đối tác của bạn về công việc của các thành viên trong gia đình của họ.
===
Nghe và đánh dấu.
Cha
Mẹ
Anh trai
Chị gái
Nhìn và viết.
Hãy hát nào.
Gia đình tôi
Đây là một hình ảnh của gia đình tôi.
Đây là ông nội của tôi. Anh ấy là một người lái xe.
Đây là bà của tôi. Cô ấy là một công nhân nhà máy.
Đây là bố tôi. Anh ấy là một nông dân.
Đây là mẹ tôi. Cô ấy là một y tá.
Và đây là tôi. Tôi là học sinh.
===
Nhìn, nghe và lặp lại.
Hãy chơi trò chơi công việc.
Cô ấy là một bác sĩ. Cô ấy làm việc ở đâu?
Trong một bệnh viện.
Làm tốt! Bây giờ đến lượt của bạn.
Anh ấy là một công nhân. Anh ấy làm việc ở đâu?
Trong nhà máy.
Cô ấy là một nông dân.
Cô ấy làm việc ở đâu? E
Trong một lĩnh vực.
Chính xác!
Chỉ và nói.
Bác sĩ
trong một bệnh viện
nông dân
trong một cánh đồng
người làm việc
trong nhà máy
nhân viên bán hàng
trong một văn phòng
Hãy nói chuyện.
Ba của bạn làm nghề gì?
Mẹ
ông nội
Bà
Anh trai
chị gái
Cô ấy làm việc ở đâu?
===
Nghe và số.
Nhìn và viết
Đây là cha của Ann.
Hãy chơi.
===
Bài 3
Lắng nghe và lặp lại.
đồng ruộng
mảnh
giáo viên
đọc hiểu
Ông tôi làm ruộng.
Tôi muốn một miếng sô cô la.
Mẹ tôi là giáo viên.
Bây giờ cô ấy đang đọc một cuốn sách.
Nghe và khoanh tròn.
Sau đó nói các câu với các từ được khoanh tròn.
đồng ruộng
mảnh
giảng bài
đọc hiểu
Hãy hát thánh ca.
Công việc và nơi làm việc
Ba của bạn làm nghề gì?
Anh ấy là một nông dân.
Anh ấy làm việc ở đâu?
Trong một lĩnh vực.
Mẹ bạn làm nghề gì?
Cô ấy là cô giáo.
Cô ấy làm việc ở đâu?
Trong một trường học.
Chị gái của bạn làm nghề gì vậy?
Cô ấy là một công nhân.
Cô ấy làm việc ở đâu?
Trong nhà máy.
Anh trai của bạn làm nghề gì?
Anh ấy là một thư ký.
Anh ấy làm việc ở đâu?
Trong một văn phòng.
===
Đọc và hoàn thành.
Báo cáo
Đây là bản tường trình cuộc phỏng vấn của tôi với Phong.
Cha của anh ấy là một giáo viên.
Anh công tác tại trường tiểu học Lê Hồng Phong.
Mẹ anh ấy là một y tá.
Cô ấy làm việc ở bệnh viện Thanh Nhàn.
Phong có anh trai nhưng anh không có em gái.
Anh trai của anh ấy là công nhân trong một nhà máy sản xuất ô tô.
Và như các bạn đã biết, Phong là học sinh lớp 4A.
Cảm ơn bạn đã đọc.
Việc làm
Cha
Mẹ
Anh trai
Nơi làm việc
Viết về công việc của các thành viên trong gia đình bạn và nơi họ làm việc,
ảnh của gia đình tôi
Dự án
Phỏng vấn hai bạn cùng lớp về công việc của cha mẹ họ.
Kể cho cả lớp nghe về chúng.
Tên của người được phỏng vấn
Tên của người được phỏng vấn
Việc làm
Tốc độ làm việc
Cha
Mẹ
===
Đơn vị 13
Bạn có muốn một ít sữa?
Bài 1
Nhìn, nghe và lặp lại.
Món ăn yêu thích của bạn là gì?
món ăn
Còn bạn thì sao, Tom?
Tôi thích gà.
Đồ uống yêu thích của bạn là gì, Mai?
Đó là nước cam.
Bạn thích nước cam?
Không, tôi không. Tôi thích sữa.
Chỉ và nói.
Sở thích của bạn là gì?
Món ăn
thịt bò
món ăn
thịt heo
uống
nước cam
uống
nước
Làm việc theo cặp.
Hỏi đối tác của bạn về đồ ăn và thức uống yêu thích của họ.
===
Nghe và đánh dấu,
Món ăn yêu thích của anh ấy là gì?
Đồ uống yêu thích của anh ấy là gì?
Đồ ăn thức uống yêu thích của cô ấy là gì?
Nhìn và viết.
Món ăn yêu thích của anh ấy là gì?
Đồ uống yêu thích của cô ấy là gì?
Đồ ăn và thức uống yêu thích của anh ấy là gì?
Hãy hát nào.
Đồ ăn thức uống yêu thích của tôi
Món ăn yêu thích của bạn là gì?
Món ăn yêu thích của bạn là gì?
Này ho, này ho. thức ăn yêu thích của tôi là thịt bò.
Đồ uống ưa thích của bạn là gì?
Đồ uống ưa thích của bạn là gì?
Ê này. này ho, đồ uống yêu thích của tôi là sữa
Thịt bò và sữa, thịt bò và sữa.
Hey ho, hey ho, chúng là đồ ăn và thức uống yêu thích của tôi.
===
Bài 2
Nhìn, nghe và lặp lại.
Bạn có muốn ăn mì không?
Đúng. vui lòng.
Tôi yêu mì.
Bạn có muốn một ít sữa? Không, cám ơn
Còn nước cam thì sao?
Không cám ơn.
Làm thế nào về nước chanh?
Nước chanh! Vâng, làm ơn!
Đó là thức uống yêu thích của tôi.
Chỉ và nói.
Bạn có muốn một ít bánh mì?
Vâng, làm ơn.
Không, cám ơn.
bánh mỳ
cơm
rau
Nước chanh
Hãy nói chuyện. y
Món ăn yêu thích của bạn là gì?
Bạn có muốn một ít sữa?
Nghe và số.
Nhìn và viết.
Uống
Món ăn
Hãy chơi.
đồ ăn thức uống
===
Bài 3
Lắng nghe và lặp lại.
thịt bò
Lá cây
cá
món ăn
Thức ăn yêu thích của tôi là thịt bò.
Lá màu vàng.
Bạn muốn một số cá?
Đó là một món cá lớn.
Nghe và đánh dấu.
Sau đó viết và nói to.
Thức ăn yêu thích của tôi là cá
Bạn muốn một số cá?
Món này có màu gì vậy Mẹ?
Cô ấy rất thích điều này.
Hãy hát thánh ca.
Bạn muốn một số cá?
Vâng, làm ơn. Tôi yêu cá.
Đó là món ăn yêu thích của tôi.
Bạn có muốn một ít sữa?
Đúng. vui lòng. tôi yêu sữa
Đó là thức uống yêu thích của tôi.
===
Đọc và hoàn thành.
Chào. Tên tôi là Linda.
Tôi thích thịt bò.
Nó là món ăn yêu thích của tôi.
Thức uống yêu thích của tôi là nước cam.
Tôi không thích rau.
Em trai tôi, Peter không thích thịt bò.
Anh ấy yêu gà.
Đó là món ăn yêu thích của anh ấy.
Anh ấy cũng thích nước chanh.
Nước chanh là thức uống yêu thích của anh ấy.
Anh ấy uống nó mỗi ngày.
Món ăn yêu thích
Đồ uống ưa thích
Viết về đồ ăn và thức uống yêu thích của bạn.
Dự án
Phỏng vấn bạn học của bạn về đồ ăn và thức uống yêu thích của họ.
Sau đó báo cáo kết quả trước lớp.
===
Đơn vị 14
anh ấy trông như thế nào?
Nhìn, nghe và lặp lại.
Bạn đang làm gì vậy, Linda?
Tôi đang viết e-mail cho anh trai tôi.
Bây giờ anh ấy đang ở đâu?
Anh ấy đang ở Anh.
Anh ấy làm nghề gì?
Anh ấy là một cầu thủ bóng đá.
anh ấy trông như thế nào?
Anh ấy cao.
Chỉ và nói.
Cô ấy trông như thế nào?
cao
ngắn ngủi
mảnh mai
cũ
trẻ tuổi
Làm việc theo cặp.
Hỏi đối tác của bạn về các thành viên gia đình của họ
===
Nghe và đánh dấu.
Nhìn và viết.
anh ấy trông như thế nào?
Cô ấy trông như thế nào?
Họ trông như thế nào?
Họ trông như thế nào?
Hãy chơi.
Hãy tìm người nào mà
===
Bài 2
Nhìn, nghe và lặp lại.
Đây là bố tôi.
Anh ấy cao.
Và đây là anh trai của tôi.
Ồ, anh ấy cũng cao.
Ai cao hơn?
Anh trai tôi là.
Anh trai tôi cao hơn bố tôi.
Chỉ và nói.
cao
cao hơn
ngắn ngủi
ngắn hơn
to lớn
to hơn
bé nhỏ
nhỏ hơn
cũ
lớn hơn
trẻ tuổi
trẻ hơn
Hãy nói chuyện,
Nói về bạn học của bạn.
Cô ấy trông như thế nào?
Ai cao hơn
Ngắn hơn
Lớn hơn
===
Nghe và khoanh tròn.
Nam hơn em gái.
Em gái anh ấy hơn mẹ anh ấy.
Mẹ anh hơn cha anh.
Cha anh hơn mẹ anh.
Cao hơn
Mỏng hơn
Nhỏ hơn
Ngắn hơn
Trẻ hơn
Lớn hơn
cao hơn
Nhìn và viết.
Ai gầy hơn, cha hay anh?
Ai thấp hơn, cha hay mẹ?
Ai lớn tuổi hơn, anh trai hay em gái?
Ai mạnh hơn, cha hay anh?
Hãy hát nào.
Họ trông như thế nào?
Mẹ của bạn trông như thế nào?
Cô ấy cao.
Cô ấy cao hơn tôi.
Bố của bạn trông như thế nào?
Anh ấy gầy
Anh ấy mảnh mai hơn tôi.
===
Bài 3
Lắng nghe và lặp lại.
cái này
cái đó
gầy
đặc
Đây là mẹ tôi.
Đó là cha tôi.
Cuốn sách mỏng.
Từ điển dày.
Nghe và đánh dấu.
Sau đó viết và nói to.
gầy
ở đó
ở đó
số ba
Hãy hát thánh ca.
Đây là gia đình tôi
Đây là mẹ tôi.
Và đây là cha tôi.
Họ trông như thế nào?
Họ trẻ và khỏe.
Đó là ông tôi.
Và đó là bà của tôi.
Họ trông như thế nào?
Họ đã già, và cũng mạnh mẽ.
===
Đọc và viết
Jane thân mến,
Tên tôi là Marie.
Tôi chín tuổi và sống ở Cần Thơ.
Có bốn người trong gia đình tôi: cha tôi, mẹ tôi, anh trai tôi và tôi.
Bố tôi 34 tuổi.
Anh ấy là một giáo viên, và anh ấy cao và mảnh khảnh.
Mẹ tôi 31 tuổi.
Cô ấy là một bác sĩ.
Tôi nghĩ cô ấy rất đẹp?
Tôi và anh trai là học sinh trường tiểu học Hoa Sen.
Tôi lớn hơn anh trai tôi nhưng anh ấy cao hơn tôi.
Lời chúc tốt nhất,
Marie
Cha của Marie làm nghề gì?
Ai là người trẻ hơn, Marie hay anh trai của cô ấy?
Cha cô ấy trông như thế nào?
Ai thấp hơn, Marie hay anh trai của cô ấy?
Mẹ cô ấy trông như thế nào?
Viết.
Dự án
Mang theo một bức ảnh của gia đình bạn.
Mô tả các thành viên gia đình của bạn với lớp học.
===
Đơn vị 15
Khi nào là ngày của trẻ em?
Bài 1
Nhìn, nghe và lặp lại.
Chào. Mai. Hôm nay trông bạn rất thông minh!
Đó là bữa tiệc nào?
Đó là một bữa tiệc cho Ngày Trẻ em.
Có, bởi vì chúng tôi đang tổ chức một bữa tiệc.
Khi nào?
Đó là vào ngày đầu tiên của tháng sáu
Hãy đến và tham gia với chúng tôi
Đúng! Cảm ơn bạn
Chỉ và nói
Năm mới
Ngày trẻ em
Ngày Nhà giáo
Giáng sinh
Làm việc theo cặp.
Hỏi đối tác của bạn về các ngày lễ và lễ hội ở Việt Nam và các nước khác.
===
Nghe và đánh dấu.
Nhìn và viết.
Khi nào là Giáng sinh?
Ngày nhà giáo là khi nào?
Khi nào là ngày của trẻ em9
Hãy hát nào.
Chúc mừng năm mới!
Sung sướng. Chúc mừng năm mới!
Sung sướng. Chúc mừng năm mới!
Thời gian cho hy vọng và thời gian cho cổ vũ.
Chúc bạn năm mới vui vẻ, hạnh phúc!
Chúc bạn năm mới vui vẻ, hạnh phúc!
Chúc bạn năm mới vui vẻ, hạnh phúc!
Một bài hát của niềm vui cho tất cả mọi người nghe.
Một năm mới đến!
Chúng tôi nói, hoan hô!
Chúc mừng năm mới!
===
Bài 2
Nhìn, nghe và lặp lại.
Mai em đang làm gì vậy?
Tôi đang trang trí ngôi nhà của mình.
Sắp đến Tết rồi.
Bạn làm gì vào dịp Tết?
Tôi mặc quần áo đẹp.
Còn gì nữa?
Tôi ăn rất nhiều bánh chưng.
Tôi được bố mẹ lì xì.
Ôi, tôi thích Tết
Chỉ và nói.
Bạn làm gì vào dịp Tết?
làm bánh chưng
trang trí nhà cửa
xem bắn pháo hoa
thăm ông bà
Hãy nói chuyện.
Tết là khi nào?
===
Bạn làm gì vào dịp Tết?
Nghe và khoanh tròn.
Họ làm gì vào dịp Tết?
mua hoa
trang trí ngôi nhà
Cha mẹ của anh ấy
đi mua sắm
làm bánh chưng
Em gái anh ấy mặc quần áo mới
Em gái anh ấy được lì xì
Phong và em gái xem bắn pháo hoa
Phong và em gái đến thăm thầy cô
Nhìn và viết.
Họ làm gì vào dịp Tết?
Mai và mẹ của cô ấy
Phong và bố của anh ấy
Nam và gia đình
Hoa và anh trai của cô ấy
Hãy chơi nào,
Nối các cụm từ để tạo thành câu.
Nói với đối tác của bạn về họ.
Quà tặng
có một bữa tiệc.
Đối với ngày của trẻ em.
tặng hoa.
Đối với Ngày Nhà giáo.
===
Lắng nghe và lặp lại.
Quần áo
Cô mặc quần áo mới vào dịp Tết.
Đóng
Xin hãy đóng cửa lại.
những bông hoa
Mẹ tôi mua rất nhiều hoa cho ngày Tết.
tầng
Tôi lau sàn vào buổi chiều.
Nghe và viết.
Sau đó nói to.
Hãy hát thánh ca.
Chúng tôi dành cho giáo viên của mình rất nhiều thứ vào Ngày Nhà giáo.
Làm ơn mở cửa ra.
Những cuốn sách rất đẹp.
Bây giờ cô ấy đang dọn dẹp nhà bếp.
Bạn làm gì vào dịp Tết
Chúng tôi mua hoa và trang trí nhà.
Chúng tôi lau sàn và chúng tôi mặc quần áo mới.
Chúng tôi đi chơi và chạy dọc theo đường phố.
Chúng tôi nhìn thấy gia đình của chúng tôi và tất cả bạn bè của chúng tôi.
===
Đọc và viết.
Xin chào, tôi là Mai.
Sắp Tết rồi.
Tôi có rất nhiều niềm vui với gia đình của tôi.
Trước Tết, chúng tôi đi chợ và mua nhiều hoa Chúng tôi trang trí nhà cửa và làm bánh chưng.
Chúng tôi có một bữa tiệc lớn và xem bắn pháo hoa.
Trong dịp Tết, chúng tôi đi thăm ông bà, thầy cô và bạn bè.
Chúng tôi yêu Tết lắm.
Viết về Tết của bạn.
Dự án
Làm thiệp chúc Tết.
Sau đó viết lời chúc cho người bạn của bạn.
===
ĐÁNH GIÁ 3
Nghe và số.
Đọc và hoàn thành.
nước cam
uống rượu
bảy
ba mươi
gia đình
Gia đình Hoa đã thức giấc.
Hoa và cô ấy
cha thích ăn trứng và bánh mì
Mẹ cô thích ăn bánh chưng và thịt
Họ đã sẵn sàng đi làm
===
Đọc và nối.
Bạn thức dậy lúc mấy giờ vào mỗi buổi sáng?
Mẹ bạn làm nghề gì?
Bạn có muốn một ít nước cam?
Ngày nhà giáo là khi nào?
Anh trai bạn như thế nào?
Anh ấy cao và gầy.
Đó là vào ngày 20 tháng 11.
Cô ấy là một y tá.
Vâng, làm ơn.
Sáu giờ ba mươi.
Nhìn và viết.
Viết về cha hoặc mẹ của bạn.
Bố tôi
mẹ
Anh ta
Cô ấy 6 tuổi.
Anh ấy là bác sĩ và làm việc trong bệnh viện
Cô ấy thích ăn sáng và ăn tối.
===
Truyện ngắn Mèo và Chuột
Đọc và nghe câu chuyện.
Sau đó lấp đầy những khoảng trống.
Bạn làm nghề gì vậy Mary?
Tôi là một sinh viên ở New York.
Bố mẹ bạn làm nghề gì?
Mẹ tôi là một đầu bếp.
Cô ấy trong một trường học.
Còn bố của bạn thì sao?
Anh ấy là một nhạc sĩ.
Anh ấy làm việc trong một ban nhạc.
Họ trông như thế nào?
Mẹ tôi rất cao.
Tốt,
tôi và bố tôi
Ngày nay là vịnh Lao động ở Mỹ.
Có thật không? Những người trên vịnh Lao động làm gì?
===
Đánh số các câu.
Bạn làm gì ở Mỹ, Mary?
Mẹ tôi làm việc trong một trường học.
Bố mẹ bạn làm nghề gì?
Tôi là một học sinh
Anh ấy chơi trong một ban nhạc.
Bố bạn thì sao?
Mẹ tôi là một đầu bếp và bố tôi là một nhạc sĩ.
Họ làm việc ở đâu?
Làm việc theo cặp.
Hoàn thành cuộc trò chuyện với thông tin về bạn.
Bạn sống ở đâu?
Bạn sống ở đâu?
Những gì mẹ của bạn làm?
Những gì mẹ của bạn làm?
Bố bạn thì sao?
Bố bạn thì sao?
Tìm các từ trong câu chuyện để hoàn thành các câu.
Mẹ tôi là một người rất giỏi. Bà ấy thích làm bánh.
Vào những ngày nắng đẹp, chúng tôi đi đến
Bố cô ấy hơn mẹ cô ấy.
Anh ấy rất tốt. Anh ấy chơi đàn piano.
===
Đơn vị 16
Lefs đi đến hiệu sách
Nhìn, nghe và lặp lại.
Chào Phong. Bạn đi đâu?
Tôi đang đi đến hiệu sách.
Tôi muốn mua một số cuốn sách.
Ồ! Tôi cũng muốn mua một số cuốn sách.
VÂNG. Chúng ta hãy cùng nhau đi đến hiệu sách.
Ý tưởng tốt! Hiệu sách ở đâu?
SÁCH
Đây!
Chỉ và nói.
Hãy đến ngân hàng
tôi muốn uống nước
Ý tưởng tuyệt vời!
Cửa hàng bánh mì
Mua một ít bánh mì
tiệm thuốc
mua một số thuốc
siêu thị
cửa hàng bánh kẹo
mua một số thức ăn
mua một ít sô cô la
Làm việc theo cặp.
Gợi ý một số địa điểm để đi và nói lý do tại sao.
===
Nghe và đánh dấu.
Phong và Linda đi đâu?
Họ muốn làm gì?
Mai và Tony đi đâu?
Họ muốn làm gì?
Nhìn và viết.
Hãy đến hiệu sách
Tôi muốn mua một số máy hút mùi
Hãy hát nào.
Hãy đến hiệu sách
Tôi muốn mua một số cuốn sách.
Đi xem phim thôi.
Tôi muốn xem một bộ phim.
Hãy đi đến sở thú.
Tôi muốn nhìn thấy những con vật.
===
Nhìn, nghe và lặp lại.
Hãy đến sở thú, Linda.
Xin lỗi. Tôi không thể
Còn bạn, Mai?
Bạn có muốn đi đến sở thú không?
Vâng, tôi muốn.
Chúng ta có thể đến siêu thị trước không?
Tại sao bạn muốn đi siêu thị?
Tôi cũng vậy! Tôi đói!
Vì tôi muốn mua thứ gì đó để ăn.
Hãy đi cùng nhau.
Chỉ và nói.
Tại sao bạn muốn đi đến sở thú?
các loài động vật
Rạp chiếu phim
xem một bộ phim
cửa hàng bánh mì
Mua một ít bánh mì
Hồ bơi
bơi
Hãy nói chuyện,
Hãy đi đến sở thú
Tại sao bạn muốn đi đến sở thú?
===
Nghe và khoanh tròn.
Mai muốn đi sở thú
cửa hàng bánh kẹo
hiệu sách
Tony muốn đến tiệm bánh
tiệm thuốc
Rạp chiếu phim

Phong muốn mua một số cuốn sách
bút mực
những cây thước
Tom muốn mua một số đồ ngọt
sô cô la
bánh mỳ
Nhìn và viết.
Tại sao anh ấy muốn đi siêu thị?
Bởi vì anh ấy muốn mua một số bánh ngọt và đồ ngọt.
Tại sao cô ấy muốn đến hiệu sách?
Bởi vì
Tại sao họ muốn đến phòng tập thể dục?
Bởi vì
Hãy chơi.
Hãy đến hiệu sách
Ở đâu và tại sao
Tại sao bạn muốn đến hiệu sách?
===
Lắng nghe và lặp lại.
sách
hiệu sách
cửa hàng bánh mì
siêu thị
Tôi muốn mua một cuốn sách.
Hãy đến hiệu sách.
Bánh mì ở tiệm bánh mì này rất ngon.
Hãy đi đến siêu thị.
Nghe, khoanh tròn và viết.
Sau đó nói to.
Hãy đến hiệu sách
siêu thị
Tôi muốn mua một cái thước kẻ
sách
Có một tiệm bánh mì gần nhà tôi
siêu thị
Em gái của cô ấy làm việc trong một hiệu thuốc
siêu thị
Hãy hát thánh ca.
Hãy đến hiệu sách.
Tại sao bạn muốn đi đến đó?
Bởi vì tôi muốn một số người cai trị.
Hãy đi đến tiệm bánh.
Tại sao bạn muốn đi đến đó?
Vì tôi đói.
Đọc và số.
Hôm nay là chủ nhật.
Phong và Mai đi nhiều nơi.
Đầu tiên, họ đến hiệu sách vì Mai muốn mua một số sách và bút.
Sau đó, họ đến hiệu thuốc vì Phong muốn mua một số loại thuốc.
Sau đó, họ đến sở thú vì họ muốn xem các loài động vật.
Cuối cùng, họ đến tiệm bánh.
Họ muốn mua thứ gì đó để ăn vì họ đói.
Nhìn và viết.
Dự án
Phỏng vấn ba bạn cùng lớp.
Hỏi họ muốn đi đâu vào Chủ nhật và tại sao họ muốn đến đó.
Sau đó báo cáo kết quả trước lớp.`
// jsonData.forEach(e => {
//     arr1 += e.EN;
//     arr1 += "\n";
//     arr2 += e.VN;
//     arr2 += "\n";
// })
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