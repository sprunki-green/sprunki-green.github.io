const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.solid,
		C3.Behaviors.Physics,
		C3.Behaviors.Rotate,
		C3.Behaviors.Fade,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Pin,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.LocalStorage,
		C3.Plugins.Audio,
		C3.Plugins.Function,
		C3.Plugins.Mouse,
		C3.Behaviors.lunarray_LiteTween,
		C3.Plugins.Text,
		C3.Plugins.Particles,
		C3.Plugins.Keyboard,
		C3.Plugins.AJAX,
		C3.Plugins.Arr,
		C3.Behaviors.Tween,
		C3.Behaviors.scrollto,
		C3.Behaviors.Anchor,
		C3.Plugins.PlatformInfo,
		C3.Behaviors.Bullet,
		C3.Plugins.GD_SDK,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.PlatformInfo.Cnds.IsOnMobile,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.PlatformInfo.Cnds.IsOniOS,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.SaveState,
		C3.Plugins.System.Acts.LoadState,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Behaviors.Physics.Acts.CreateRevoluteJoint,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.Sprite.Exps.UID,
		C3.Behaviors.Physics.Acts.RemoveJoints,
		C3.Behaviors.Fade.Exps.FadeOutTime,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Function.Cnds.OnFunction,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Function.Acts.CallFunction,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Function.Exps.Param,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.GD_SDK.Acts.ShowAd,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.GD_SDK.Cnds.PauseGame,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Audio.Acts.SetMuted,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Particles.Acts.SetVisible,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Particles.Acts.SetRate,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Browser.Acts.GoToURLWindow,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.Audio.Acts.SetLooping,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.GD_SDK.Acts.ShowRewardedAd,
		C3.Plugins.GD_SDK.Cnds.RewardPlayer,
		C3.Plugins.LocalStorage.Cnds.CompareValue,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.LocalStorage.Cnds.OnAllGetsComplete,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.RotateCounterclockwise,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Particles.Acts.SetInitSize,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.Rotate.Acts.SetSpeed,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Behaviors.Physics.Acts.SetImmovable
	];
};
self.C3_JsPropNameTable = [
	{audioOn: 0},
	{BSound: 0},
	{ButtonExit: 0},
	{LevelNumber: 0},
	{Set: 0},
	{ButtonLevelN: 0},
	{ButtonNo: 0},
	{ButtonCredits: 0},
	{ButtonGame: 0},
	{ButtonStart: 0},
	{ButtonYes: 0},
	{ButtonContinue: 0},
	{ButtonExitBig: 0},
	{ButtonRestart: 0},
	{ButtonReset: 0},
	{menu: 0},
	{desno: 0},
	{lijevo: 0},
	{shop: 0},
	{ButtonGameKraj: 0},
	{BSound2: 0},
	{menu2: 0},
	{ButtonReset2: 0},
	{menu3: 0},
	{menu4: 0},
	{desno2: 0},
	{menu5: 0},
	{menulevels: 0},
	{CreditsLogo: 0},
	{Rope: 0},
	{Sine: 0},
	{PlayerSkins: 0},
	{Rope0: 0},
	{Rope4: 0},
	{Rope3: 0},
	{Rope5: 0},
	{Wheel1: 0},
	{Rope2: 0},
	{Rope1: 0},
	{Rope6: 0},
	{Solid: 0},
	{Physics: 0},
	{BoardFixed: 0},
	{BoardMoving: 0},
	{Wheel2: 0},
	{Rope7: 0},
	{Rope8: 0},
	{Rope9: 0},
	{Rope10: 0},
	{Rope11: 0},
	{Rope12: 0},
	{Wheel3: 0},
	{Rope13: 0},
	{Rope14: 0},
	{Rope15: 0},
	{Rope16: 0},
	{Rope17: 0},
	{Rope18: 0},
	{Rope19: 0},
	{Rope20: 0},
	{BoardRotating: 0},
	{BoardFixed2: 0},
	{BoardFixed3: 0},
	{BoardFixed4: 0},
	{odkorpe: 0},
	{Rotate: 0},
	{BoardRotating2: 0},
	{Fade: 0},
	{BoardFixed5: 0},
	{Rope21: 0},
	{PlayerSkins2: 0},
	{Wheel4: 0},
	{wheelzahelp: 0},
	{DragDrop: 0},
	{BoardFixed6: 0},
	{BoardFixed7: 0},
	{PlayerSkins3: 0},
	{HelpTouch: 0},
	{HelpImg3: 0},
	{HelpImg1: 0},
	{HelpBox: 0},
	{HelpImg2: 0},
	{ruka: 0},
	{HelpImg4: 0},
	{HelpTouch2: 0},
	{HelpTouch3: 0},
	{TextIndex: 0},
	{Pin: 0},
	{TextFont: 0},
	{GameBG: 0},
	{SineVertical: 0},
	{SineWidth: 0},
	{Star: 0},
	{Ready: 0},
	{PiggyBank: 0},
	{Slice: 0},
	{Touch: 0},
	{Browser: 0},
	{LocalStorage: 0},
	{Audio: 0},
	{BackgroundMenu: 0},
	{OrientationShadow: 0},
	{FadeScreen: 0},
	{Function: 0},
	{Mouse: 0},
	{MessageBox: 0},
	{LevelsBG: 0},
	{StarsLevel: 0},
	{WarningScreen: 0},
	{Lock: 0},
	{LiteTween: 0},
	{GameLogo: 0},
	{Knot: 0},
	{"200x200": 0},
	{StartButtonText: 0},
	{StartButton: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite15: 0},
	{FireSparks: 0},
	{SemiRealFire2: 0},
	{candle2: 0},
	{Sprite20: 0},
	{zvijezda: 0},
	{Sprite3: 0},
	{jos: 0},
	{Sprite4: 0},
	{Sprite6: 0},
	{Sprite5: 0},
	{Sprite7: 0},
	{glavastiva: 0},
	{poluga: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite9: 0},
	{Sprite8: 0},
	{home: 0},
	{Sprite17: 0},
	{Sprite11: 0},
	{Sprite19: 0},
	{Sprite18: 0},
	{igraj: 0},
	{Keyboard: 0},
	{platforma: 0},
	{krughelp: 0},
	{finishline: 0},
	{spikes: 0},
	{oh: 0},
	{finishline2: 0},
	{Sprite21: 0},
	{finishline3: 0},
	{spikes2: 0},
	{Firework: 0},
	{okvir: 0},
	{complete: 0},
	{failed: 0},
	{Sprite10: 0},
	{platformahelp: 0},
	{dole: 0},
	{krughelp2: 0},
	{Sprite22: 0},
	{ometanje: 0},
	{Sprite30: 0},
	{ToolTip: 0},
	{Snow: 0},
	{BrushSelector: 0},
	{BrushSelect: 0},
	{ColorSelect: 0},
	{Sprite28: 0},
	{ColorSelector: 0},
	{signplakat: 0},
	{Santa: 0},
	{TextFont1: 0},
	{BackgroundSprite: 0},
	{moregamesadd: 0},
	{Sprite23: 0},
	{AJAX: 0},
	{LanguageData: 0},
	{TextFont2: 0},
	{LanguageIndex: 0},
	{Tween: 0},
	{Flag: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{okvirzajezik: 0},
	{pozadinazatekst: 0},
	{TextFont3: 0},
	{krughelp3: 0},
	{djedmrazplese: 0},
	{SADSANTA: 0},
	{TextFont4: 0},
	{ShopCharacter1: 0},
	{ShopCharacter2: 0},
	{ShopCharacter3: 0},
	{ShopCharacter4: 0},
	{ShopCharacter5: 0},
	{ShopCharacter6: 0},
	{ShopCharacter7: 0},
	{ShopCharacter8: 0},
	{ShopCharacter9: 0},
	{ShopCharacter10: 0},
	{ShopSelector: 0},
	{ShopCharacter11: 0},
	{ShopCharacter12: 0},
	{ShopCharacter13: 0},
	{ShopCharacter14: 0},
	{ShopCharacter15: 0},
	{ShopCharacter16: 0},
	{ShopCharacter17: 0},
	{ShopCharacter18: 0},
	{ShopCharacter19: 0},
	{ShopCharacter20: 0},
	{PlayButton123: 0},
	{ScoreText: 0},
	{Anchor: 0},
	{StarsFont: 0},
	{Particles4: 0},
	{pozadinasnijeg: 0},
	{shoplevel: 0},
	{shopdugme: 0},
	{Lockdrugilik: 0},
	{Lockdrugilik2: 0},
	{Lockdrugilik3: 0},
	{Lockdrugilik4: 0},
	{Sprite25: 0},
	{Lockdrugilik5: 0},
	{Lockdrugilik6: 0},
	{Lockdrugilik7: 0},
	{Lockdrugilik8: 0},
	{Lockdrugilik9: 0},
	{naslov: 0},
	{StarsFont2: 0},
	{finishline4: 0},
	{spikes3: 0},
	{addtimereklama: 0},
	{pozadinamuzika: 0},
	{tekstmuzika: 0},
	{close: 0},
	{info: 0},
	{pozadinazamenu: 0},
	{Sprite26: 0},
	{pozadinazapoene: 0},
	{StarsFont3: 0},
	{StarsFont4: 0},
	{pozadinazaaddgifts: 0},
	{pozadinamuzika2: 0},
	{shoplevel2: 0},
	{pozadinakadizgubis: 0},
	{pozadinazamenuIZaPonovo: 0},
	{ParticlesZAKRAJ: 0},
	{Sine2: 0},
	{Confetti: 0},
	{PlatformInfo: 0},
	{krughelp4: 0},
	{krughelp5: 0},
	{pozadinazashop: 0},
	{pozadinazazvuk: 0},
	{pozadinazareset: 0},
	{keayboardslova: 0},
	{Sprite24: 0},
	{jednako: 0},
	{Sprite12: 0},
	{zidzahow: 0},
	{PiggyBank2: 0},
	{PLAYTEXT: 0},
	{CUTTHEROPE: 0},
	{ROTATE: 0},
	{TOUCHTOREMOVE: 0},
	{PODLOGA: 0},
	{PiggyBank3: 0},
	{LEVELFAILED: 0},
	{WELLDONE: 0},
	{WIN: 0},
	{Face: 0},
	{Beard: 0},
	{Mask: 0},
	{Checker: 0},
	{Eraser: 0},
	{cijedi: 0},
	{cijedi1: 0},
	{Sprite16: 0},
	{usta: 0},
	{Sprite27: 0},
	{dalje: 0},
	{well: 0},
	{Face2: 0},
	{Face3: 0},
	{TextFont5: 0},
	{Text: 0},
	{Text2: 0},
	{Text3: 0},
	{Open: 0},
	{Level: 0},
	{LevelsBlock: 0},
	{SpriteFont123: 0},
	{skip: 0},
	{cibe: 0},
	{kolikociba: 0},
	{kolikociba2: 0},
	{Checker2: 0},
	{Sprite29: 0},
	{Sprite31: 0},
	{Sprite32: 0},
	{Sprite33: 0},
	{Sprite34: 0},
	{Sprite35: 0},
	{Sprite36: 0},
	{dalje2: 0},
	{igraj2: 0},
	{Sprite37: 0},
	{LevelsText: 0},
	{Checker3: 0},
	{Checker4: 0},
	{Sprite38: 0},
	{konfeti: 0},
	{FireworkParticles2: 0},
	{Bullet: 0},
	{leptir: 0},
	{Sprite40: 0},
	{Sprite39: 0},
	{StarsFont5: 0},
	{GameDistributionSDK: 0},
	{PhysicObjects: 0},
	{Buttons: 0},
	{ButtonsAnimation: 0},
	{mobilnidugmad: 0},
	{AnimationVar: 0},
	{WAIT_TIME_CREATESTARS: 0},
	{LAST_LEVEL: 0},
	{LevelComplete: 0},
	{GameState: 0},
	{LevelN: 0},
	{LevelMax: 0},
	{ButtonWidth: 0},
	{PlayerScore: 0},
	{PlayerLevelScore: 0},
	{Score: 0},
	{Kolikociba: 0},
	{WAIT_TIME: 0},
	{STARSVALUE: 0},
	{LEVEL_VALUE: 0},
	{CallJSreturn: 0},
	{ButtonsLock: 0},
	{character: 0},
	{unlocks: 0},
	{stars: 0},
	{Unlock20: 0},
	{Unlock19: 0},
	{Unlock18: 0},
	{Unlock17: 0},
	{Unlock16: 0},
	{Unlock15: 0},
	{Unlock14: 0},
	{Unlock13: 0},
	{Unlock12: 0},
	{Unlock11: 0},
	{Unlock10: 0},
	{Unlock9: 0},
	{Unlock8: 0},
	{Unlock7: 0},
	{Unlock6: 0},
	{Unlock5: 0},
	{Unlock4: 0},
	{Unlock3: 0},
	{Unlock2: 0},
	{Unlock1: 0},
	{StarsLevel1: 0},
	{StarsLevel2: 0},
	{StarsLevel3: 0},
	{StarsLevel4: 0},
	{StarsLevel5: 0},
	{StarsLevel6: 0},
	{StarsLevel7: 0},
	{StarsLevel8: 0},
	{StarsLevel9: 0},
	{StarsLevel10: 0},
	{StarsLevel11: 0},
	{StarsLevel12: 0},
	{StarsLevel13: 0},
	{StarsLevel14: 0},
	{StarsLevel15: 0},
	{StarsLevel16: 0},
	{StarsLevel17: 0},
	{StarsLevel18: 0},
	{StarsLevel19: 0},
	{StarsLevel20: 0},
	{StarsLevel21: 0},
	{StarsLevel22: 0},
	{StarsLevel23: 0},
	{StarsLevel24: 0},
	{GlobalPixelFactor: 0},
	{VIEWPORT_MARGIN: 0},
	{SPACE_BETWEEN_OBJECTS: 0},
	{CurrentMargin: 0},
	{ctlArcadeSaveScore1: 0},
	{ctlArcadeSaveScore2: 0},
	{ctlArcadeStartSession: 0},
	{ctlArcadeEndSession: 0},
	{ctlArcadeRestartLevel: 0},
	{ctlArcadeStartLevel: 0},
	{ctlArcadeEndLevel: 0},
	{ctlArcadeShareEvent1: 0},
	{ctlArcadeShareEvent2: 0},
	{szImg: 0},
	{szTitle: 0},
	{szMsg1: 0},
	{szMsg2: 0},
	{szMsgShare1: 0},
	{szMsgShare2: 0},
	{szComma: 0},
	{ctlArcadeShowInterlevelAD: 0},
	{Sound: 0},
	{SoundEf: 0},
	{TEXT_ORIENTATION: 0},
	{TEXT_SCORE: 0},
	{TEXT_HELP1: 0},
	{TEXT_HELP2: 0},
	{TEXT_HELP3: 0},
	{TEXT_LEVELCOMPLETED: 0},
	{TEXT_LEVEL: 0},
	{TEXT_GAMEOVER: 0},
	{TEXT_PLAY_AGAIN: 0},
	{TEXT_EXITCONFIRM1: 0},
	{TEXT_EXITCONFIRM2: 0},
	{TEXT_SELECTLEVEL: 0},
	{TEXT_START: 0}
];

self.InstanceType = {
	BSound: class extends self.ISpriteInstance {},
	ButtonExit: class extends self.ISpriteInstance {},
	ButtonLevelN: class extends self.ISpriteInstance {},
	ButtonNo: class extends self.ISpriteInstance {},
	ButtonCredits: class extends self.ISpriteInstance {},
	ButtonGame: class extends self.ISpriteInstance {},
	ButtonStart: class extends self.ISpriteInstance {},
	ButtonYes: class extends self.ISpriteInstance {},
	ButtonContinue: class extends self.ISpriteInstance {},
	ButtonExitBig: class extends self.ISpriteInstance {},
	ButtonRestart: class extends self.ISpriteInstance {},
	ButtonReset: class extends self.ISpriteInstance {},
	menu: class extends self.ISpriteInstance {},
	desno: class extends self.ISpriteInstance {},
	lijevo: class extends self.ISpriteInstance {},
	shop: class extends self.ISpriteInstance {},
	ButtonGameKraj: class extends self.ISpriteInstance {},
	BSound2: class extends self.ISpriteInstance {},
	menu2: class extends self.ISpriteInstance {},
	ButtonReset2: class extends self.ISpriteInstance {},
	menu3: class extends self.ISpriteInstance {},
	menu4: class extends self.ISpriteInstance {},
	desno2: class extends self.ISpriteInstance {},
	menu5: class extends self.ISpriteInstance {},
	menulevels: class extends self.ISpriteInstance {},
	CreditsLogo: class extends self.ISpriteInstance {},
	PlayerSkins: class extends self.ISpriteInstance {},
	Rope0: class extends self.ISpriteInstance {},
	Rope4: class extends self.ISpriteInstance {},
	Rope3: class extends self.ISpriteInstance {},
	Rope5: class extends self.ISpriteInstance {},
	Wheel1: class extends self.ISpriteInstance {},
	Rope2: class extends self.ISpriteInstance {},
	Rope1: class extends self.ISpriteInstance {},
	Rope6: class extends self.ISpriteInstance {},
	BoardFixed: class extends self.ISpriteInstance {},
	BoardMoving: class extends self.ISpriteInstance {},
	Wheel2: class extends self.ISpriteInstance {},
	Rope7: class extends self.ISpriteInstance {},
	Rope8: class extends self.ISpriteInstance {},
	Rope9: class extends self.ISpriteInstance {},
	Rope10: class extends self.ISpriteInstance {},
	Rope11: class extends self.ISpriteInstance {},
	Rope12: class extends self.ISpriteInstance {},
	Wheel3: class extends self.ISpriteInstance {},
	Rope13: class extends self.ISpriteInstance {},
	Rope14: class extends self.ISpriteInstance {},
	Rope15: class extends self.ISpriteInstance {},
	Rope16: class extends self.ISpriteInstance {},
	Rope17: class extends self.ISpriteInstance {},
	Rope18: class extends self.ISpriteInstance {},
	Rope19: class extends self.ISpriteInstance {},
	Rope20: class extends self.ISpriteInstance {},
	BoardRotating: class extends self.ISpriteInstance {},
	BoardFixed2: class extends self.ISpriteInstance {},
	BoardFixed3: class extends self.ISpriteInstance {},
	BoardFixed4: class extends self.ISpriteInstance {},
	odkorpe: class extends self.ISpriteInstance {},
	BoardRotating2: class extends self.ISpriteInstance {},
	BoardFixed5: class extends self.ISpriteInstance {},
	Rope21: class extends self.ISpriteInstance {},
	PlayerSkins2: class extends self.ISpriteInstance {},
	Wheel4: class extends self.ISpriteInstance {},
	wheelzahelp: class extends self.ISpriteInstance {},
	BoardFixed6: class extends self.ISpriteInstance {},
	BoardFixed7: class extends self.ISpriteInstance {},
	PlayerSkins3: class extends self.ISpriteInstance {},
	HelpTouch: class extends self.ISpriteInstance {},
	HelpImg3: class extends self.ISpriteInstance {},
	HelpImg1: class extends self.ISpriteInstance {},
	HelpBox: class extends self.ISpriteInstance {},
	HelpImg2: class extends self.ISpriteInstance {},
	ruka: class extends self.ISpriteInstance {},
	HelpImg4: class extends self.ISpriteInstance {},
	HelpTouch2: class extends self.ISpriteInstance {},
	HelpTouch3: class extends self.ISpriteInstance {},
	TextFont: class extends self.ISpriteFontInstance {},
	GameBG: class extends self.ISpriteInstance {},
	Star: class extends self.ISpriteInstance {},
	PiggyBank: class extends self.ISpriteInstance {},
	Slice: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	BackgroundMenu: class extends self.ISpriteInstance {},
	OrientationShadow: class extends self.ISpriteInstance {},
	FadeScreen: class extends self.ISpriteInstance {},
	Function: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	MessageBox: class extends self.ISpriteInstance {},
	LevelsBG: class extends self.ISpriteInstance {},
	StarsLevel: class extends self.ISpriteInstance {},
	WarningScreen: class extends self.ISpriteInstance {},
	Lock: class extends self.ISpriteInstance {},
	GameLogo: class extends self.ISpriteInstance {},
	Knot: class extends self.ISpriteInstance {},
	_200x200: class extends self.ISpriteInstance {},
	StartButtonText: class extends self.ITextInstance {},
	StartButton: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	FireSparks: class extends self.IParticlesInstance {},
	SemiRealFire2: class extends self.IParticlesInstance {},
	candle2: class extends self.IParticlesInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	zvijezda: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	jos: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	glavastiva: class extends self.ISpriteInstance {},
	poluga: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	home: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	igraj: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	platforma: class extends self.ISpriteInstance {},
	krughelp: class extends self.ISpriteInstance {},
	finishline: class extends self.ISpriteInstance {},
	spikes: class extends self.ISpriteInstance {},
	oh: class extends self.ISpriteInstance {},
	finishline2: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	finishline3: class extends self.ISpriteInstance {},
	spikes2: class extends self.ISpriteInstance {},
	Firework: class extends self.IParticlesInstance {},
	okvir: class extends self.ISpriteInstance {},
	complete: class extends self.ISpriteInstance {},
	failed: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	platformahelp: class extends self.ISpriteInstance {},
	dole: class extends self.ISpriteInstance {},
	krughelp2: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	ometanje: class extends self.ISpriteInstance {},
	Sprite30: class extends self.ISpriteInstance {},
	Snow: class extends self.IParticlesInstance {},
	BrushSelector: class extends self.ISpriteInstance {},
	BrushSelect: class extends self.ISpriteInstance {},
	ColorSelect: class extends self.ISpriteInstance {},
	Sprite28: class extends self.ISpriteInstance {},
	ColorSelector: class extends self.ISpriteInstance {},
	signplakat: class extends self.ISpriteInstance {},
	Santa: class extends self.ISpriteInstance {},
	TextFont1: class extends self.ISpriteFontInstance {},
	BackgroundSprite: class extends self.ISpriteInstance {},
	moregamesadd: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	AJAX: class extends self.IInstance {},
	LanguageData: class extends self.IArrayInstance {},
	TextFont2: class extends self.ISpriteFontInstance {},
	Flag: class extends self.ISpriteInstance {},
	Camera: class extends self.ISpriteInstance {},
	okvirzajezik: class extends self.ISpriteInstance {},
	pozadinazatekst: class extends self.ISpriteInstance {},
	TextFont3: class extends self.ISpriteFontInstance {},
	krughelp3: class extends self.ISpriteInstance {},
	djedmrazplese: class extends self.ISpriteInstance {},
	SADSANTA: class extends self.ISpriteInstance {},
	TextFont4: class extends self.ISpriteFontInstance {},
	ShopCharacter1: class extends self.ISpriteInstance {},
	ShopCharacter2: class extends self.ISpriteInstance {},
	ShopCharacter3: class extends self.ISpriteInstance {},
	ShopCharacter4: class extends self.ISpriteInstance {},
	ShopCharacter5: class extends self.ISpriteInstance {},
	ShopCharacter6: class extends self.ISpriteInstance {},
	ShopCharacter7: class extends self.ISpriteInstance {},
	ShopCharacter8: class extends self.ISpriteInstance {},
	ShopCharacter9: class extends self.ISpriteInstance {},
	ShopCharacter10: class extends self.ISpriteInstance {},
	ShopSelector: class extends self.ISpriteInstance {},
	ShopCharacter11: class extends self.ISpriteInstance {},
	ShopCharacter12: class extends self.ISpriteInstance {},
	ShopCharacter13: class extends self.ISpriteInstance {},
	ShopCharacter14: class extends self.ISpriteInstance {},
	ShopCharacter15: class extends self.ISpriteInstance {},
	ShopCharacter16: class extends self.ISpriteInstance {},
	ShopCharacter17: class extends self.ISpriteInstance {},
	ShopCharacter18: class extends self.ISpriteInstance {},
	ShopCharacter19: class extends self.ISpriteInstance {},
	ShopCharacter20: class extends self.ISpriteInstance {},
	PlayButton123: class extends self.ISpriteInstance {},
	ScoreText: class extends self.ITextInstance {},
	StarsFont: class extends self.ISpriteFontInstance {},
	Particles4: class extends self.IParticlesInstance {},
	pozadinasnijeg: class extends self.ISpriteInstance {},
	shoplevel: class extends self.ISpriteInstance {},
	shopdugme: class extends self.ISpriteInstance {},
	Lockdrugilik: class extends self.ISpriteInstance {},
	Lockdrugilik2: class extends self.ISpriteInstance {},
	Lockdrugilik3: class extends self.ISpriteInstance {},
	Lockdrugilik4: class extends self.ISpriteInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	Lockdrugilik5: class extends self.ISpriteInstance {},
	Lockdrugilik6: class extends self.ISpriteInstance {},
	Lockdrugilik7: class extends self.ISpriteInstance {},
	Lockdrugilik8: class extends self.ISpriteInstance {},
	Lockdrugilik9: class extends self.ISpriteInstance {},
	naslov: class extends self.ISpriteInstance {},
	StarsFont2: class extends self.ISpriteFontInstance {},
	finishline4: class extends self.ISpriteInstance {},
	spikes3: class extends self.ISpriteInstance {},
	addtimereklama: class extends self.ISpriteInstance {},
	pozadinamuzika: class extends self.ISpriteInstance {},
	tekstmuzika: class extends self.ITextInstance {},
	close: class extends self.ISpriteInstance {},
	info: class extends self.ISpriteInstance {},
	pozadinazamenu: class extends self.ISpriteInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	pozadinazapoene: class extends self.ISpriteInstance {},
	StarsFont3: class extends self.ISpriteFontInstance {},
	StarsFont4: class extends self.ISpriteFontInstance {},
	pozadinazaaddgifts: class extends self.ISpriteInstance {},
	pozadinamuzika2: class extends self.ISpriteInstance {},
	shoplevel2: class extends self.ISpriteInstance {},
	pozadinakadizgubis: class extends self.ISpriteInstance {},
	pozadinazamenuIZaPonovo: class extends self.ISpriteInstance {},
	ParticlesZAKRAJ: class extends self.IParticlesInstance {},
	Confetti: class extends self.ISpriteInstance {},
	PlatformInfo: class extends self.IInstance {},
	krughelp4: class extends self.ISpriteInstance {},
	krughelp5: class extends self.ISpriteInstance {},
	pozadinazashop: class extends self.ISpriteInstance {},
	pozadinazazvuk: class extends self.ISpriteInstance {},
	pozadinazareset: class extends self.ISpriteInstance {},
	keayboardslova: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	jednako: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	zidzahow: class extends self.ISpriteInstance {},
	PiggyBank2: class extends self.ISpriteInstance {},
	PLAYTEXT: class extends self.ISpriteInstance {},
	CUTTHEROPE: class extends self.ISpriteInstance {},
	ROTATE: class extends self.ISpriteInstance {},
	TOUCHTOREMOVE: class extends self.ISpriteInstance {},
	PODLOGA: class extends self.ISpriteInstance {},
	PiggyBank3: class extends self.ISpriteInstance {},
	LEVELFAILED: class extends self.ISpriteInstance {},
	WELLDONE: class extends self.ISpriteInstance {},
	WIN: class extends self.ISpriteInstance {},
	Face: class extends self.ISpriteInstance {},
	Beard: class extends self.ISpriteInstance {},
	Mask: class extends self.ISpriteInstance {},
	Checker: class extends self.ISpriteInstance {},
	Eraser: class extends self.ISpriteInstance {},
	cijedi: class extends self.ISpriteInstance {},
	cijedi1: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	usta: class extends self.ISpriteInstance {},
	Sprite27: class extends self.ISpriteInstance {},
	dalje: class extends self.ISpriteInstance {},
	well: class extends self.ISpriteInstance {},
	Face2: class extends self.ISpriteInstance {},
	Face3: class extends self.ISpriteInstance {},
	TextFont5: class extends self.ISpriteFontInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	LevelsBlock: class extends self.ISpriteInstance {},
	SpriteFont123: class extends self.ISpriteFontInstance {},
	skip: class extends self.ISpriteInstance {},
	cibe: class extends self.ITextInstance {},
	kolikociba: class extends self.ITextInstance {},
	kolikociba2: class extends self.ITextInstance {},
	Checker2: class extends self.ISpriteInstance {},
	Sprite29: class extends self.ISpriteInstance {},
	Sprite31: class extends self.ISpriteInstance {},
	Sprite32: class extends self.ISpriteInstance {},
	Sprite33: class extends self.ISpriteInstance {},
	Sprite34: class extends self.ISpriteInstance {},
	Sprite35: class extends self.ISpriteInstance {},
	Sprite36: class extends self.ISpriteInstance {},
	dalje2: class extends self.ISpriteInstance {},
	igraj2: class extends self.ISpriteInstance {},
	Sprite37: class extends self.ISpriteInstance {},
	LevelsText: class extends self.ISpriteFontInstance {},
	Checker3: class extends self.ISpriteInstance {},
	Checker4: class extends self.ISpriteInstance {},
	Sprite38: class extends self.ISpriteInstance {},
	konfeti: class extends self.ISpriteInstance {},
	FireworkParticles2: class extends self.IParticlesInstance {},
	leptir: class extends self.ISpriteInstance {},
	Sprite40: class extends self.ISpriteInstance {},
	Sprite39: class extends self.ISpriteInstance {},
	StarsFont5: class extends self.ISpriteFontInstance {},
	GameDistributionSDK: class extends self.IInstance {},
	PhysicObjects: class extends self.ISpriteInstance {},
	Buttons: class extends self.ISpriteInstance {},
	ButtonsAnimation: class extends self.ISpriteInstance {},
	mobilnidugmad: class extends self.ISpriteInstance {}
}