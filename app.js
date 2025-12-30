// 厦门景点数据
const attractionsData = [
    {
        id: 1,
        name: '鼓浪屿',
        image: 'https://gips3.baidu.com/it/u=3363812697,3582708995&fm=3074&app=3074&f=JPEG?w=1080&h=1817&type=normal&func=',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        description: '鼓浪屿是厦门最著名的景点之一，被誉为"海上花园"。这里风景秀丽，建筑风格独特，融合了中西方文化。岛上有很多历史建筑、博物馆和美丽的海滩，是游客必去的地方。',
        rating: 4.8,
        price: '免费',
        address: '厦门市思明区鼓浪屿',
        openTime: '全天开放',
        recommend: '日光岩、菽庄花园、皓月园'
    },
    {
        id: 2,
        name: '厦门大学',
        image: 'https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%275Y6m6Zeo5aSn5a2m5Y%2BC6KeCXzE3MjczOTkxODguMTIyMTgwNQ%3D%3D%27/0.png',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        description: '厦门大学是中国最美丽的大学之一，校园依山傍海，建筑风格独特。这里有著名的芙蓉隧道、上弦场、芙蓉湖等景点，是拍照打卡的好地方。',
        rating: 4.6,
        price: '免费',
        address: '厦门市思明区思明南路422号',
        openTime: '07:00-18:00',
        recommend: '芙蓉隧道、上弦场、芙蓉湖'
    },
    {
        id: 3,
        name: '南普陀寺',
        image: 'https://qcloud.dpfile.com/pc/JrjnakmKN70s24vXv3EkpPnaB3gjqIzZ7ma-1j4_cKnLGChcZyc5rt217mHqjnZS.jpg',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        description: '南普陀寺是厦门著名的佛教寺庙，始建于唐朝，历史悠久。寺庙建筑宏伟壮观，香火鼎盛。寺后五老峰风景优美，是登高望远的好去处。',
        rating: 4.5,
        price: '免费',
        address: '厦门市思明区思明南路515号',
        openTime: '08:00-17:30',
        recommend: '大雄宝殿、五老峰、放生池'
    },
    {
        id: 4,
        name: '曾厝垵',
        image: 'https://gips3.baidu.com/it/u=3880028430,3659069914&fm=3074&app=3074&f=JPEG?w=1080&h=1410&type=normal&func=',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        description: '曾厝垵是厦门最具特色的文艺小渔村，现在已成为热门的旅游目的地。这里有很多特色小吃、文艺小店和特色民宿，是体验厦门慢生活的好地方。',
        rating: 4.4,
        price: '免费',
        address: '厦门市思明区环岛路曾厝垵',
        openTime: '全天开放',
        recommend: '文创小店、特色小吃、海边漫步'
    },
    {
        id: 5,
        name: '厦门植物园',
        image: 'https://qcloud.dpfile.com/pc/KiEvHThFIOeWQy9n05rzLQkcXbAuf1k2j1jFe1H8mLmwzLe2CyA1YgKsJ6y6gGhk.jpg',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        description: '厦门植物园是福建省最大的植物园，园内有各种珍稀植物和美丽的景观。这里有著名的雨林世界、仙人掌世界等特色区域，是摄影爱好者的天堂。',
        rating: 4.3,
        price: '40元',
        address: '厦门市思明区虎园路25号',
        openTime: '06:30-18:00',
        recommend: '雨林世界、仙人掌世界、多肉植物区'
    },
    {
        id: 6,
        name: '环岛路',
        image: 'https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%275Y6m6Zeo546v5bKb6Lev5oCO5LmI546p5q%2BU6L6D5aW9XzE3MjkyODc4ODEuNzcyNTAzNA%3D%3D%27/0.png',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        description: '环岛路是厦门最美的海滨公路，全长约43公里。这里风景优美，沿途有白城沙滩、胡里山炮台等景点，是骑行、散步和欣赏海景的绝佳去处。',
        rating: 4.7,
        price: '免费',
        address: '厦门市思明区环岛路',
        openTime: '全天开放',
        recommend: '白城沙滩、胡里山炮台、椰风寨'
    },
    {
        id: 7,
        name: '中山路步行街',
        image: 'https://pic.rmb.bdstatic.com/bjh/240128/4e7706b91dc4062f597ea18ed97a757b4137.jpeg',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        description: '中山路是厦门最繁华的商业街，也是厦门的历史街区。这里有很多百年老店、特色小吃和南洋风情建筑，是购物和品尝美食的好地方。',
        rating: 4.5,
        price: '免费',
        address: '厦门市思明区中山路',
        openTime: '10:00-22:00',
        recommend: '特产购物、特色小吃、骑楼建筑'
    },
    {
        id: 8,
        name: '集美学村',
        image: 'https://qcloud.dpfile.com/pc/5_5OrkXHpe6Ro3FrmKpcfWg5XGUi6Y3qVTKthlE14A1CU8dUDl7jBqaTD-z4BUJa.jpg',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        description: '集美学村是由著名爱国华侨陈嘉庚先生创办的，是中国近代教育史上的重要遗产。这里建筑风格独特，融合了中西文化，是了解厦门历史文化的好地方。',
        rating: 4.4,
        price: '免费',
        address: '厦门市集美区集美街道',
        openTime: '全天开放',
        recommend: '集美大学、陈嘉庚故居、龙舟池'
    }
];

const { createApp, ref, computed } = Vue;

// Vue组件模板
const appTemplate = `
    <div class="header">
        <h1>🏝️ 厦门旅游景点</h1>
        <p>探索美丽的海滨城市，感受厦门的魅力</p>
    </div>

    <div class="search-bar">
        <input
            type="text"
            v-model="searchText"
            class="search-input"
            placeholder="🔍 搜索景点名称或描述..."
        >
    </div>

    <div class="attractions-grid">
        <div
            v-for="(attraction, index) in filteredAttractions"
            :key="attraction.id"
            class="attraction-card"
            :style="{ animationDelay: index * 0.1 + 's' }"
            @click="showDetail(attraction)"
        >
            <div class="image-wrapper">
                <div
                    v-if="!attraction.image"
                    class="image-placeholder"
                    :style="{ background: attraction.gradient }"
                >
                    {{ attraction.name }}
                </div>
                <img v-else :src="attraction.image" :alt="attraction.name" class="card-image">
            </div>
            <div class="card-content">
                <h3 class="card-title">{{ attraction.name }}</h3>
                <p class="card-description">{{ attraction.description }}</p>
                <div class="card-footer">
                    <span class="card-rating">⭐ {{ attraction.rating }}</span>
                    <span class="card-price">{{ attraction.price }}</span>
                </div>
            </div>
        </div>
    </div>

    <el-dialog
        v-model="dialogVisible"
        :title="currentAttraction?.name"
        width="60%"
        @close="handleClose"
    >
        <div v-if="!currentAttraction?.image" class="dialog-placeholder" :style="{ background: currentAttraction?.gradient }">
            <div class="dialog-placeholder-text">{{ currentAttraction?.name }}</div>
        </div>
        <img v-else :src="currentAttraction?.image" :alt="currentAttraction?.name" class="dialog-image">
        <div class="dialog-content">
            <h3 class="dialog-title">{{ currentAttraction?.name }}</h3>
            <p class="dialog-description">{{ currentAttraction?.description }}</p>
            <div class="dialog-info">
                <div class="info-item">
                    <span class="info-label">📍 地址：</span>
                    <span class="info-value">{{ currentAttraction?.address }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">🕐 开放时间：</span>
                    <span class="info-value">{{ currentAttraction?.openTime }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">⭐ 评分：</span>
                    <span class="info-value">{{ currentAttraction?.rating }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">💰 门票：</span>
                    <span class="info-value">{{ currentAttraction?.price }}</span>
                </div>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                <strong>💡 推荐游玩：</strong>{{ currentAttraction?.recommend }}
            </div>
        </div>
    </el-dialog>
`;

createApp({
    template: appTemplate,
    setup() {
        const searchText = ref('');
        const dialogVisible = ref(false);
        const currentAttraction = ref(null);

        // 过滤景点
        const filteredAttractions = computed(() => {
            if (!searchText.value) {
                return attractionsData;
            }
            return attractionsData.filter(attraction =>
                attraction.name.includes(searchText.value) ||
                attraction.description.includes(searchText.value)
            );
        });

        // 显示详情
        const showDetail = (attraction) => {
            currentAttraction.value = attraction;
            dialogVisible.value = true;
        };

        // 关闭弹窗
        const handleClose = () => {
            dialogVisible.value = false;
        };

        return {
            searchText,
            dialogVisible,
            currentAttraction,
            filteredAttractions,
            showDetail,
            handleClose
        };
    }
}).use(ElementPlus, {
    locale: ElementPlusLocaleZhCn
}).mount('#app');
