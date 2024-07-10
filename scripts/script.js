function logo(){
    let logo = document.querySelector('.logo');
    for (let i = 0; i < 4; i++) {
        let img = document.createElement("img");
        img.src = "images/icon.png";
        logo.appendChild(img);
    }
}

logo();

function showParticipants(){
    let slider_items = document.querySelector('#slider_items');
    let participants = [['Хозе-Рауль Капабланка', 'Чемпион мира по шахматам'], 
                        ['Эммануил Ласкер', 'Чемпион мира по шахматам'], 
                        ['Александр Алехин', 'Чемпион мира по шахматам'], 
                        ['Арон Нимцович', 'Чемпион мира по шахматам'], 
                        ['Рихард Рети', 'Чемпион мира по шахматам'], 
                        ['Остап Бендер', 'Гроссмейстер']];
    for (let i = 0; i < participants.length; i++) {
        slider_items.innerHTML += 
            `<div class='block_3_items'>
                <div class='block_3_item_img'><img src = 'images/block_3.png'></div>
                <div class='block_3_item_name'>${participants[i][0]}</div>
                <div class='block_3_item_rank'>${participants[i][1]}</div>
                <div class='block_3_item_btn'>Подробнее</div>
            </div>`
    }
}
showParticipants();

if (window.matchMedia("(orientation: portrait)").matches){
    let header_container_text = document.querySelectorAll('.header_container_text');
    header_container_text[0].innerHTML = `Оплатите взнос на телеграммы<br> для организации Международного<br> васюкинского турнира по шахматам`;

    let block_1_top = document.querySelectorAll('.block_1_top');
    block_1_top[0].innerHTML = `<p>Чтобы поддержать
                    Международный васюкинский турнир <p>
                    < src="images/block_1_1.png" alt="Men Playing Chess">
                    <p> посетите лекцию на тему:
                    <span>«Плодотворная дебютная идея»</span>
                    </p>
                    <img src="images/block_1_2.png" alt="Man Playing Chess">
                    <p>и Сеанс <span>одновременной игры в шахматы на 160 досках</span> гроссмейстера О. Бендера</p>`;

    let block_2_top = document.querySelectorAll('.block_2_top');

    block_2_top[0].innerHTML = `<div class = "titles">Этапы преображения Васюков</div>
                                <p class = "text">Будущие источники обогащения васюкинцев</p>`;
    let img = document.createElement('img');
    img.src = "images/block_2.png";
    block_2_top[0].append(img);
    
    function showItemsMobile(){
        let texts = [['Строительство железнодорожной магистрали Москва-Васюки',
             'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов'], 
            ['Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет'],
            ['Строительство дворца для турнира', 
            'Размещение гаражей для гостевого автотранспорта'], 
            ['Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов'], 
            ['Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн']
        ];
        let block_2_main = document.querySelectorAll('.block_2_main');
            let block_2_carousel = document.createElement('div');
            block_2_carousel.classList.add('block_2_carousel');
            block_2_main[0].append(block_2_carousel);
        let target  = 1;
            for (let i = 0; i < 5; i++){
                let block_2_item = document.createElement('div');
                block_2_item.classList.add('block_2_item');
                block_2_carousel.append(block_2_item);
  
                for (let j = 0; j < texts[i].length; j++) {
                    block_2_item.innerHTML += 
                    `<div class='items item_${target}'>
                        <div class='block_2_item_count'><p>${target}</p></div>
                        <div class='block_2_item_text'>${texts[i][j]}</div>
                    </div>`
                    target++;
                }
            } 

            let block_2 = document.getElementById('block_2');
            let itemsBtns = document.createElement('div');
            itemsBtns.classList.add('items_btns');
            block_2.append(itemsBtns);
            
            let btn_items_left = document.createElement('div');
            btn_items_left.id = 'btn_items_left';
            btn_items_left.classList.add('btn_items_passive');
            itemsBtns.append(btn_items_left);

            let btn1 = document.createElement('img');
            btn1.src = 'images/blcok_3_vector1.png';
            btn_items_left.append(btn1);
            for (let i = 0; i < 5; i++){
                let circle = document.createElement('div');
                circle.classList.add('circle');
                if (i == 0){
                    circle.classList.add('circle_active');
                }else{
                    circle.classList.add('circle_passive');
                }
                itemsBtns.append(circle);
            }
            let btn_items_right = document.createElement('div');
            btn_items_right.id = 'btn_items_right';
            btn_items_right.classList.add('btn_items_active');
            itemsBtns.append(btn_items_right);

            let btn2 = document.createElement('img');
            btn2.src = 'images/blcok_3_vector2.png';
            btn_items_right.append(btn2);

            function moveItems(){
                let offset = 0;
                let block_2_carousel = document.getElementsByClassName('block_2_carousel');
                let max = 355 * 5;
                btn_items_right.addEventListener('click', function (){
                        offset += 355;
                        setOffsetCarousel (offset);
                        if (offset >= max){
                            offset = 355 * 4;
                        }else{
                            block_2_carousel[0].style.left = -offset + "px";
                        }
                
                    });
                
                    btn_items_left.addEventListener('click', function(){
                        offset -= 355;
                        setOffsetCarousel (offset);
                        if (offset < 0){
                            offset = 0;
                        }else{
                            block_2_carousel[0].style.left = -offset + "px";
                        }
                
                    });
                
            }
            moveItems();

            function setOffsetCarousel (offset){
                if (offset <= 0){
                    btn_items_left.classList.remove('btn_items_active');
                    btn_items_left.classList.add('btn_items_passive');
                    btn_items_right.classList.add('btn_items_active');
                    btn_items_right.classList.remove('btn_items_passive');
                }else if (offset >= 355 * 4){
                    btn_items_left.classList.add('btn_items_active');
                    btn_items_left.classList.remove('btn_items_passive');
                    btn_items_right.classList.remove('btn_items_active');
                    btn_items_right.classList.add('btn_items_passive');
                }else{
                    btn_items_left.classList.add('btn_items_active');
                    btn_items_left.classList.remove('btn_items_passive');
                    btn_items_right.classList.remove('btn_items_passive');
                    btn_items_right.classList.add('btn_items_active');
                }

                let circles = document.getElementsByClassName('circle');
                let index = offset/355;
                for (let i = 0; i < circles.length; i++){
                    if (i == index) {
                        circles[i].classList.add('circle_active');
                    }else{
                        circles[i].classList.remove('circle_active');
                        circles[i].classList.add('circle_passive');
                    }
                }
            }
    }
    showItemsMobile();
    
    function showItemsSliderMobile(){
        let block_3_buttons = document.getElementsByClassName('block_3_buttons');
        while (block_3_buttons[0]){
            block_3_buttons[0].remove()
        }
        let block_3 = document.querySelector('#block_3');
        let block_3_buttons_new = document.createElement('div');
        block_3_buttons_new.classList.add('block_3_buttons_new');
        block_3.append(block_3_buttons_new);

        block_3_buttons_new.innerHTML = 
            `<div id = "block_3btn_left" class="block_3_btn_disabled">
                <img src="images/blcok_3_vector1.png" alt="back">
            </div>
            <div class="block_3_current_participant">1 <span>/ 6</span></div>
            <div id = "block_3btn_right" class="block_3_btn_active">
                <img src="images/blcok_3_vector2.png" alt="next">
            </div>`;
 
        let offset = 0;
        let block_3_current_participant = document.querySelectorAll('.block_3_current_participant');
        let slider_items = document.getElementById('slider_items');
        let block_3btn_left = document.getElementById('block_3btn_left');
        let block_3btn_right = document.getElementById('block_3btn_right');
        let block_3_items = document.querySelectorAll('.block_3_items');
        let max = block_3_items.length * 356;
    
        function setDisabledBtn(offset){
            if (offset <= 0){
                block_3btn_left.classList.remove('block_3_btn_active');
                block_3btn_left.classList.add('block_3_btn_disabled');
                block_3btn_right.classList.add('block_3_btn_active');
                block_3btn_right.classList.remove('block_3_btn_disabled');
            }else if (offset >= 355 * 5){
                block_3btn_left.classList.add('block_3_btn_active');
                block_3btn_left.classList.remove('block_3_btn_disabled');
                block_3btn_right.classList.remove('block_3_btn_active');
                block_3btn_right.classList.add('block_3_btn_disabled');
            }else{
                block_3btn_left.classList.add('block_3_btn_active');
                block_3btn_left.classList.remove('block_3_btn_disabled');
                block_3btn_right.classList.add('block_3_btn_active');
                block_3btn_right.classList.remove('block_3_btn_disabled');
            }
        }
    
        setDisabledBtn(offset);

        let targ = 1;
        block_3btn_right.addEventListener('click', function(){
            offset += 356;
            targ++;
            setDisabledBtn(offset);

            if (offset > max-356){
                offset = max-356;
                targ = 6;
            }else{
                slider_items.style.left = -offset + "px";
                block_3_current_participant[0].innerHTML = `${targ} <span>/ 6</span>`;
            }
    
        });
    
        block_3btn_left.addEventListener('click', function(){
            offset -= 356;
            targ--;
            setDisabledBtn(offset);
            if (offset < 0){
                offset = 0;
                targ = 1;
            }else{
                slider_items.style.left = -offset + "px";
                block_3_current_participant[0].innerHTML = `${targ} <span>/ 6</span>`;
            }
    
        });
    }
    showItemsSliderMobile();
    
}else{
    function showItems(){
        let texts = ['Строительство железнодорожной магистрали Москва-Васюки',
             'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов', 
            'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
            'Строительство дворца для турнира', 
            'Размещение гаражей для гостевого автотранспорта', 
            'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов', 
            'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн'
        ];
        let block_2_main = document.querySelectorAll('.block_2_main');
    
            for (let i = 1; i <= 7; i++){
                block_2_main[0].innerHTML += 
                    `<div class='block_2_item item_${i}'>
                            <div class='block_2_item_count'><p>${i}</p></div>
                            <div class='block_2_item_text'>${texts[i-1]}</div>
                    </div>`
            }
            let block_2_items = document.querySelectorAll('.block_2_item');
            let img = document.createElement('img');
            img.src = "images/block_2.png";
            block_2_items[6].append(img);
        
    }
    showItems();

    function showItemsSlider(){
        let offset = 0;
        let block_3_current_participant = document.querySelectorAll('.block_3_current_participant');
        let slider_items = document.getElementById('slider_items');
        let block_3btn_left = document.getElementById('block_3btn_left');
        let block_3btn_right = document.getElementById('block_3btn_right');
        let block_2_items = document.querySelectorAll('.block_2_item');
        let max = block_2_items.length * 414;
    
        function setDisabledBtn(offset){
            if (offset <= 0){
                block_3btn_left.classList.remove('block_3_btn');
                block_3btn_left.classList.add('block_3_btn_disabled');
                block_3btn_right.classList.add('block_3_btn');
                block_3btn_right.classList.remove('block_3_btn_disabled');
            }else{
                block_3btn_left.classList.add('block_3_btn');
                block_3btn_left.classList.remove('block_3_btn_disabled');
                block_3btn_right.classList.remove('block_3_btn');
                block_3btn_right.classList.add('block_3_btn_disabled');
            }
        }
    
        setDisabledBtn(offset);
    
        block_3btn_right.addEventListener('click', function(){
            offset += 414*3;
            setDisabledBtn(offset);
            if (offset >= max-414){
                offset = 414*3;
            }else{
                slider_items.style.left = -offset + "px";
                block_3_current_participant[0].innerHTML = `6 <span>/ 6</span>`;
            }
    
        });
    
        block_3btn_left.addEventListener('click', function(){
            offset -= 414*3;
            setDisabledBtn(offset);
            if (offset < 0){
                offset = 0;
            }else{
                slider_items.style.left = -offset + "px";
                block_3_current_participant[0].innerHTML = `3 <span>/ 6</span>`;
            }
    
        });
    }
    showItemsSlider();
}
