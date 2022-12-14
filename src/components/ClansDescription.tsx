import * as React from "react";


export default function ClanSelect({clan} : any) {

    switch (clan) {
        case 'Вентру': {
            return (
                <div id="descriptionVentrue">
                    <h1>
                        Аристократы и знать, считающие своей прямой обязанностью руководить. Все вампиры клана подозревают,
                        что его основатель был убит одним из Бруха. Они всегда были заинтересованы во влиянии на дела
                        смертных. Сородичи этого клана известны своим благородством, безупречным вкусом и своей благовоспитанностью.
                        Вентру - властители, следящие за соблюдением древних заветов, стремящиеся к управлению судьбами
                        вампиров. Ныне клан пополняется потомственной денежной аристократией, безжалостными карьеристами и политиками.
                        Они стремяться сблизиться с верхами человеческого сообщества, гда их утонченность оказывается очень
                        полезной. Вентру вращаются в одних кругах с Тореадорами, но они не тратят время на пустую болтовню и
                        легкомысленные забавы. Они гордо принимают все привилегии власти.
                    </h1>
                </div>
            )

        }
        case 'Бруха' : {
            return (
                <div id = "descriptionBrujah">
                    <h1>
                        Этот клан в основном состоит из своего рода бунтарей, идейных и безыдейных. Они искренне склонны к индивидуализму, и часто принимают близко к сердцу происходящие в обществе изменения.
                        Некоторые кланы считают Бруха сборищем бандитов, но, на самом деле, все споры и раздоры внутри клана вызваны их неукратимой страстью. Все Бруха рады возможности высказать свои мысли и эмоции и подкрепить их наглядным примером.
                        Зачастую им свойственно объединяться, чтобы противостоять общему врагу. Они могут быть несколько нелогичны и агрессивны и этот стереотип идет на пользу многим членам клана.
                    </h1>
                </div>
            )
        }
        case 'Тремер' : {
            return (<div id = "descriptionTremere">
                    <h1>
                        Ни один из кланов не покрыт такой вуалью таинственности как клан Тремер. Они - создатели и мастера ужасной кровавой магии. Многие вампиры рассказывают жуткие истории о происхождении этого клана. Они хранят молчание по этому поводу, и косо глядят на всех, кто имеет смелость совать свои носы в их тайны.
                        Эти Сородичи вызывают страх и недоверие. Этим созданиям ночи присуща затаенная амбициозность, они охотно ведут политические игры и впутываются в интриги своих собратьев. Все их действия несут в себе слабый отпечаток паранойи, ибо Тремер знают, что Старейшины по меньшей мере двух кланов таят на них злобу, которой, по определенным причинам, не могут дать выхода.
                        Именно поэтому вампиры клана Тремер стараются привлечь к себе всех возможных союзников. Мало кому удается перейти дорогу этим вампирам и остаться при этом невредимым.
                    </h1>
                </div>
            )
        }
        case 'Тореадор' : {
            return ( <div id = "descriptionToreador">
                    <h1>
                        Этих тонких натур называют по-разному: "художники", "позеры", "гедонисты". Любой представитель этого клана, в зависимости от характера и настроения, может позволить себе быть помпезным и расфуфыренным, умным и нелепым, мечтательным или безнравственным.
                        Единственное качество, которое точно можно приписать ко всему клану - это их доходящее до фанатизма эстетство. Многие представители этого клана при жизни были выдающимися художниками, музыкантами, поэтами, актерами и представителями прочих творческих профессий.
                        Тореадоры считают, что вечной жизнью нужно наслаждаться.
                    </h1>
                </div>
            )
        }
        case 'Цимисх' : {
            return ( <div id = "descriptionTzimisce">
                    <h1>
                        Если клан Ласомбра - это сердце Шабаша, то клан Цимисхи - его душа. Благоговейный страх вызывает характерная для клана дисциплина Изменчивости; из уст в уста передаются рассказы об уродующих изменениях, вызываемых лишь прихотью, об отвратительных "опытах" и пытках столь искуссных, что ни человек, ни вампир не в состоянии понять или перенести их.
                        Большинство Цимисхов кажутся рациональными, весьма разумными созданиями. Если юных Цимисхов можно назвать жестокими и безжалостными, то старейшины их рода просто не востоянии понять милосердия и страданий - или, возможно, они все понимают, но просто не считают эмоции чем-то значимым.
                    </h1>
                </div>
            )
        }
        case 'Малкавиан' : {
            return ( <div id = "descriptionMalkavian">
                    <h1>
                        Каждый вампир, относящийся к этому клану - безумен в той или иной степени. В течении всей истории существования вампиров, Мальклавиан сторонились из-за их странного характера. Однако, у них же и искали совета из-за их еще более странного пророческого дара.
                        Грязная кровь этого клана затемнила их умы и сделала склонными к проявлению психических расстройств. Это безумие может принять практически любую форму: от стремления к убийству до полной кататонии.
                        Многие мальклавиане проявляют пугающие устремления или полное отсутствие эмоций. В том числе и сострадания. Эта свобода от эмоций сопровождается проницательностью и странной мудростью, недоступной здравомыслящим.
                    </h1>
                </div>
            )
        }
        case 'Равнос' : {
            return ( <div id = "descriptionRavons">
                    <h1>
                        Клан Равнос был почти полностью уничтожен в июле 1999 года, когда восстал Патриарх Равнос. Его следующая Окончательная Смерть вызвала в крови всего клана неудержимое бешенство, влекущее Равносов убивать друг друга.
                        Они - первостатейные обмащники, сплетающие илллюзии и ложь в сложные конструкции, призванные отнять у дураков то, что захотелось Равносу - будь то богатство, кровь или даже свободу.
                        Равнос - бродяги до глубины своей души и мало заботяться о постоянных убежищах или положении в сложившейся властной структуре города. Равно - достаточно сплоченный клан. Соклановцы всегда защищают друг друга. Они могут дурить своих, но считают это исключительно внутренней привилегией. Чужакам такое не позволяется.
                    </h1>
                </div>
            )
        }
        case 'Гангрел' : {
            return ( <div id = "descriptionGangrel">
                    <h1>
                        Затаившиеся в ночи Гангрелы в некотором роде - дикие вампиры и обладают многими завериными повадками. Они отлично понимают живущего в них зверя. Их часто считают спокойными, неразговорчивыми и, в некоторой степени, замкнутыми.
                        Однако в этом стереотипе не больше истины, чем в остальных. Они не склонны к показухе. Гангрелы тесно связаны с цыганами, у которых позаимствовали немало привычек. Сородичи этого клана часто обращают отрешенных людей.
                        Многие из єтих вампиров не лютя городские толпы и строения. Они, как и Бруха, отличные бойцы, но, в отличии от вышеупомянутых, их ярость в бою вызвана не бунтарским необузданным гневом, а их первобытными инстинктами.
                        Они одиночки. Их клан имеет долгую истории неприязни к клану Тремер.
                    </h1>
                </div>
            )
        }
        case 'Бану Хаким' : {
            return ( <div id = "descriptionAssamite">
                    <h1>
                        Бану Хаким явились из пустынных просторов Востока, сопровождаемые зловещей атмосферой ужаса. Среди вампиров Ассамиты (еще одно их имя) прославились в качестве клана ассасинов, работающих на любую из сторон, способную заплатить им.
                        Плата, которую они берут за свой труд - витэ других Сородичей; для Ассамитов диаблери - это величайшее таинство. Сородичи считают их полезными для устранения противников, проведения кровавых охот, наказания нежелательных потомков и проникновения в оплоты соперников.
                        Если раньше другие сородичи считали Ассамитов благородными, полезными исполнителями, то теперь они воспринимают клан с благоговейным страхом. Сами себя они называют Сыновьями Хакима или Бану Хаким.
                    </h1>
                </div>
            )
        }
        case 'Носферату' : {
            return ( <div id = "descriptionNosferatu">
                    <h1>
                        Носферату - проклятые и отверженные. Тела меняются и приобретают уродливые черты, ломаясь под весом их кланового проклятья. Они не особо ладят с другими кланами. После становления новообращенный Носферату переживает мучительную трансформацию, постепенно в течении нескольких недель, приобретая уродливые черты внешности.
                        Ужас от физических изменений часто приводит к психологическим травмам. Иногда, в шутку, Носферату могут обратить очень красивого человека. Носферату в совершенстве овладели искусством маскировки и шпионажа; они всегда в курсе последних новостей и событий, не ради удовольствия, но ради выживания.
                        Непревзойденные поставщики информации, они могут потребовать за свои знания высокую цену. Пользуясь Дисциплиной Затемнения, Носферату тайно подслушивают чужие разговоры или присутствуют на "секретных" встречах. Если сородич желает побольше узнать о событиях и жителях города, он может обратиться к Носферату.
                    </h1>
                </div>
            )
        }
        default: return null
    }

}