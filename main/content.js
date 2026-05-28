import { lib, game, ui, get, ai, _status } from "../../../noname.js";

// 在你的扩展content函数中
export async function content(extension, pack, config) {
	lib.translate.qj_biao = "标准包";
	lib.translate.qj_yicong = "翼从";
	lib.characterSort["mode_extension_qj"] = {};
	lib.characterSort.mode_extension_qj.qj_biao = [
		"qj_caocao",
		"qj_simayi",
		"qj_xiahoudun",
		"qj_zhangliao",
		"qj_xuchu",
		"qj_guojia",
		"qj_zhenji",
		"qj_xiahouyuan",
		"qj_zhanghe",
		"qj_xuhuang",
		"qj_caoren",
		"qj_dianwei",
		"qj_xunyu",
		"qj_caopi",
		"qj_yuejin",
		"qj_liubei",
		"qj_guanyu",
		"qj_zhangfei",
		"qj_zhugeliang",
		"qj_zhaoyun",
		"qj_machao",
		"qj_huangyueying",
		"qj_huangzhong",
		"qj_weiyan",
		"qj_pangtong",
		"qj_wolong_zhugeliang",
		"qj_liushan",
		"qj_menghuo",
		"qj_zhurongfuren",
		"qj_ganfuren",
		"qj_sunquan",
		"qj_ganning",
		"qj_lvmeng",
		"qj_huanggai",
		"qj_zhouyu",
		"qj_daqiao",
		"qj_luxun",
		"qj_sunshangxiang",
		"qj_sunjian",
		"qj_xiaoqiao",
		"qj_taishici",
		"qj_zhoutai",
		"qj_lusu",
		"qj_zhangzhao",
		"qj_dingfeng",
		"qj_huatuo",
		"qj_lvbu",
		"qj_diaochan",
		"qj_yuanshao",
		"qj_yanliangwenchou",
		"qj_jiaxu",
		"qj_pangde",
		"qj_zhangjiao",
		"qj_caiwenji",
		"qj_mateng",
		"qj_jiling",
		"qj_tianfeng",
		"qj_panfeng",
		"qj_zoushi",
		"qj_hansui",
		"qj_simayan",
		"qj_simashi",
		"qj_simazhao",
		"qj_jiachong",
		"qj_yanghu",
		"qj_wangyuanji",
		"qj_xiahouhui",
		"qj_jin_simayi",
		"qj_zhangchunhua",
		"qj_zhanghuyuechen",
		"qj_yanghuiyu",
		"qj_wangjun",
		"qj_wenyang",
		"qj_shibao",
		"qj_zhanghua",
		"qj_liuxie",
		"qj_liubian",
		"qj_zhangrang",
		"qj_hejin",
		"qj_wangyun",
		"qj_wangrong",
		"qj_fuhuanghou",
		"qj_fuwan",
		"qj_dongcheng",
		"qj_tangji",
		"qj_caiyong",
		"qj_huangfusong",
		"qj_liuchong",
		"qj_liuyao",
		"qj_jianshuo",
	];
	lib.characterSort.mode_extension_qj.qj_yicong = ["yc_niujin", "yc_zhoucang", "yc_quexiaojiang", "yc_wenhu", "yc_mushun", "yc_huweijun", "yc_baimayicong", "yc_xiangbing", "yc_jinfanjun", "yc_bingzhoulangqi", "yc_huangjinleishi", "yc_fuxinsishi", "yc_xiyuanjun","yc_xiliangjingqi"];
	lib.perfectPair = [];
	lib.perfectPair.caiwenji = ["caiyong"];
	lib.perfectPair.caiyong = ["caiwenji"];
	lib.perfectPair.caocao = ["dianwei", "guojia", "xuchu", "yuanshao", "zoushi"];
	lib.perfectPair.caopi = ["jiaxu", "simayi", "zhenji"];
	lib.perfectPair.daqiao = ["xiaoqiao"];
	lib.perfectPair.dianwei = ["caocao"];
	lib.perfectPair.diaochan = ["lvbu", "wangyun"];
	lib.perfectPair.dongcheng = ["liuxie"];
	lib.perfectPair.fuhuanghou = ["liuxie"];
	lib.perfectPair.ganfuren = ["liubei"];
	lib.perfectPair.guanyu = ["liubei", "xuhuang", "zhangfei", "zhangliao"];
	lib.perfectPair.guojia = ["caocao"];
	lib.perfectPair.hansui = ["machao", "mateng"];
	lib.perfectPair.huanggai = ["zhouyu"];
	lib.perfectPair.huangyueying = ["wolong_zhugeliang", "zhugeliang"];
	lib.perfectPair.huangzhong = ["weiyan"];
	lib.perfectPair.jiachong = ["simazhao"];
	lib.perfectPair.jiaxu = ["caopi"];
	lib.perfectPair.jin_simayi = ["zhangchunhua"];
	lib.perfectPair.liubei = ["ganfuren", "guanyu", "sunshangxiang", "wolong_zhugeliang", "zhangfei", "zhugeliang"];
	lib.perfectPair.liubian = ["tangji"];
	lib.perfectPair.liushan = ["zhaoyun"];
	lib.perfectPair.liuxie = ["dongcheng", "fuhuanghou"];
	lib.perfectPair.lusu = ["pangtong", "sunquan", "zhouyu"];
	lib.perfectPair.lvbu = ["diaochan", "zhangliao"];
	lib.perfectPair.lvmeng = ["sunquan"];
	lib.perfectPair.machao = ["hansui"];
	lib.perfectPair.mateng = ["hansui"];
	lib.perfectPair.menghuo = ["zhurongfuren"];
	lib.perfectPair.pangtong = ["lusu", "wolong_zhugeliang", "zhouyu"];
	lib.perfectPair.simashi = ["simazhao", "xiahouhui", "yanghuiyu"];
	lib.perfectPair.simayan = ["zhanghua"];
	lib.perfectPair.simayi = ["caopi", "zhangchunhua"];
	lib.perfectPair.simazhao = ["jiachong", "simashi", "wangyuanji"];
	lib.perfectPair.sunquan = ["lusu", "lvmeng", "zhoutai"];
	lib.perfectPair.sunshangxiang = ["liubei"];
	lib.perfectPair.tangji = ["liubian"];
	lib.perfectPair.wangjun = ["yanghu"];
	lib.perfectPair.wangyuanji = ["simazhao"];
	lib.perfectPair.wangyun = ["diaochan"];
	lib.perfectPair.weiyan = ["huangzhong"];
	lib.perfectPair.wolong_zhugeliang = ["huangyueying", "liubei", "pangtong"];
	lib.perfectPair.xiahoudun = ["xiahouyuan"];
	lib.perfectPair.xiahouhui = ["simashi"];
	lib.perfectPair.xiahouyuan = ["xiahoudun"];
	lib.perfectPair.xiaoqiao = ["daqiao", "zhouyu"];
	lib.perfectPair.xuchu = ["caocao"];
	lib.perfectPair.xuhuang = ["guanyu"];
	lib.perfectPair.yanghu = ["wangjun"];
	lib.perfectPair.yanghuiyu = ["simashi"];
	lib.perfectPair.yanliangwenchou = ["yuanshao"];
	lib.perfectPair.yuanshao = ["caocao", "yanliangwenchou"];
	lib.perfectPair.zhangchunhua = ["jin_simayi", "simayi"];
	lib.perfectPair.zhangfei = ["guanyu", "liubei", "zhaoyun"];
	lib.perfectPair.zhanghua = ["simayan"];
	lib.perfectPair.zhangliao = ["guanyu", "lvbu"];
	lib.perfectPair.zhaoyun = ["liushan", "zhangfei"];
	lib.perfectPair.zhenji = ["caopi"];
	lib.perfectPair.zhoutai = ["sunquan"];
	lib.perfectPair.zhouyu = ["huanggai", "lusu", "pangtong", "xiaoqiao"];
	lib.perfectPair.zhugeliang = ["huangyueying", "liubei"];
	lib.perfectPair.zhurongfuren = ["menghuo"];
	lib.perfectPair.zoushi = ["caocao"];

	if (lib.rank) {
		const rank = {
			s: [],
			ap: ["qj_menghuo"],
			a: ["qj_caopi", "qj_yuejin", "qj_weiyan", "qj_wolong_zhugeliang", "qj_sunshangxiang", "qj_xiaoqiao", "qj_diaochan", "qj_simayan", "qj_simazhao", "qj_xiahouhui", "qj_fuwan"],
			am: ["qj_guojia", "qj_xiahouyuan", "qj_caoren", "qj_liubei", "qj_zhaoyun", "qj_zhangfei", "qj_huangyueying", "qj_huangzhong", "qj_ganning", "qj_zhouyu", "qj_luxun", "qj_daqiao", "qj_lusu", "qj_zhangzhao", "qj_jiaxu", "qj_mateng", "qj_hansui", "qj_jin_simayi", "qj_yanghuiyu", "qj_wenyang", "qj_zhanghua", "qj_fuhuanghou", "qj_liubian", "yc_jinfanjun", "yc_xiyuanjun"],
			bp: ["qj_caocao", "qj_simayi", "qj_xiahoudun", "qj_zhangliao", "qj_xuchu", "qj_zhenji", "qj_zhanghe", "qj_xuhuang", "qj_dianwei", "qj_zhugeliang", "qj_pangtong", "qj_liushan", "qj_huanggai", "qj_taishici", "qj_zhoutai", "qj_dingfeng", "qj_huatuo", "qj_lvbu", "qj_yuanshao", "qj_yanliangwenchou", "qj_pangde", "qj_caiwenji", "qj_jiling", "qj_panfeng", "qj_simashi", "qj_yanghu", "qj_zhanghuyuechen", "qj_zhangrang", "qj_wangyun", "qj_wangrong", "qj_tangji", "qj_huangfusong", "qj_liuchong", "qj_liuyao", "qj_jianshuo", "yc_quexiaojiang", "yc_wenhu", "yc_mushun", "yc_xiangbing", "yc_baimayicong"],
			b: ["qj_xunyu", "qj_guanyu", "qj_machao", "qj_zhurongfuren", "qj_ganfuren", "qj_sunquan", "qj_lvmeng", "qj_sunjian", "qj_zhangjiao", "qj_tianfeng", "qj_zoushi", "qj_jiachong", "qj_wangyuanji", "qj_zhangchunhua", "qj_wangjun", "qj_liuxie", "qj_hejin", "yc_niujin", "yc_zhoucang", "yc_huweijun", "yc_bingzhoulangqi","yc_xiliangjingqi"],
			bm: ["qj_shibao", "qj_dongcheng", "qj_caiyong", "yc_fuxinsishi"],
			c: ["yc_huangjinleishi"],
		};
		for (let i in rank) {
			lib.rank[i].addArray(rank[i]);
		}
		if (lib.rank.rarity) {
			const rarity = {
				legend: ["qj_caocao", "qj_liubei", "qj_guanyu", "qj_zhangfei", "qj_zhugeliang", "qj_zhaoyun", "qj_lvbu", "qj_zhouyu", "qj_simayi", "qj_sunquan", "qj_wolong_zhugeliang", "qj_jin_simayi"],
				epic: ["qj_xiahoudun", "qj_zhangliao", "qj_xuchu", "qj_guojia", "qj_zhenji", "qj_xiahouyuan", "qj_zhanghe", "qj_xuhuang", "qj_caoren", "qj_dianwei", "qj_xunyu", "qj_caopi", "qj_yuejin", "qj_machao", "qj_huangyueying", "qj_huangzhong", "qj_weiyan", "qj_pangtong", "qj_liushan", "qj_menghuo", "qj_zhurongfuren", "qj_ganfuren", "qj_ganning", "qj_lvmeng", "qj_huanggai", "qj_daqiao", "qj_luxun", "qj_sunshangxiang", "qj_sunjian", "qj_xiaoqiao", "qj_taishici", "qj_zhoutai", "qj_lusu", "qj_zhangzhao", "qj_dingfeng", "qj_huatuo", "qj_diaochan", "qj_yuanshao", "qj_yanliangwenchou", "qj_jiaxu", "qj_pangde", "qj_zhangjiao", "qj_caiwenji", "qj_mateng"],
				rare: ["qj_jiling", "qj_tianfeng", "qj_hansui", "qj_simayan", "qj_simashi", "qj_simazhao", "qj_jiachong", "qj_yanghu", "qj_wangyuanji", "qj_xiahouhui", "qj_zhangchunhua", "qj_zhanghuyuechen", "qj_yanghuiyu", "qj_wangjun", "qj_wenyang", "qj_shibao", "qj_zhanghua", "qj_liuxie", "qj_liubian", "qj_zhangrang", "qj_hejin", "qj_wangyun", "qj_fuhuanghou", "qj_dongcheng", "qj_caiyong", "qj_huangfusong", "qj_liuyao"],
				junk: ["qj_panfeng", "qj_zoushi", "qj_wangrong", "qj_tangji", "qj_liuchong", "qj_jianshuo", "qj_fuwan", "yc_niujin", "yc_zhoucang", "yc_quexiaojiang", "yc_wenhu", "yc_mushun", "yc_huweijun", "yc_baimayicong", "yc_xiangbing", "yc_jinfanjun", "yc_bingzhoulangqi", "yc_huangjinleishi","yc_xiliangjingqi", "yc_fuxinsishi", "yc_xiyuanjun"],
			};
			for (let i in rarity) {
				lib.rank.rarity[i].addArray(rarity[i]);
			}
		}
	}
}
