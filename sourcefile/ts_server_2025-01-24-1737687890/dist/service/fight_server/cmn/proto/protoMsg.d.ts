import * as $protobuf from "protobufjs";
/** Namespace DcgProto. */
export namespace DcgProto {

    /** Properties of a S_Role. */
    interface IS_Role {

        /** S_Role InstanceId */
        InstanceId?: (Long|null);

        /** S_Role ShortId */
        ShortId?: (number|null);

        /** S_Role Level */
        Level?: (number|null);

        /** S_Role NickName */
        NickName?: (string|null);

        /** S_Role Icon */
        Icon?: (number|null);

        /** S_Role IconFrame */
        IconFrame?: (number|null);

        /** S_Role RankedSeasonCount */
        RankedSeasonCount?: (number|null);

        /** S_Role RankedStars */
        RankedStars?: (number|null);

        /** S_Role HistoryRankedStars */
        HistoryRankedStars?: (number|null);

        /** S_Role RankedConWin */
        RankedConWin?: (number|null);

        /** S_Role TitleIds */
        TitleIds?: (number[]|null);

        /** S_Role PvpRoomDissolveTime */
        PvpRoomDissolveTime?: (number|null);

        /** S_Role PersonalRoomDissolveTime */
        PersonalRoomDissolveTime?: (number|null);

        /** S_Role DailyFriendIntroCount */
        DailyFriendIntroCount?: (number|null);

        /** S_Role DailyTaskRefreshCount */
        DailyTaskRefreshCount?: (number|null);
    }

    /** Represents a S_Role. */
    class S_Role implements IS_Role {

        /**
         * Constructs a new S_Role.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Role);

        /** S_Role InstanceId. */
        public InstanceId: Long;

        /** S_Role ShortId. */
        public ShortId: number;

        /** S_Role Level. */
        public Level: number;

        /** S_Role NickName. */
        public NickName: string;

        /** S_Role Icon. */
        public Icon: number;

        /** S_Role IconFrame. */
        public IconFrame: number;

        /** S_Role RankedSeasonCount. */
        public RankedSeasonCount: number;

        /** S_Role RankedStars. */
        public RankedStars: number;

        /** S_Role HistoryRankedStars. */
        public HistoryRankedStars: number;

        /** S_Role RankedConWin. */
        public RankedConWin: number;

        /** S_Role TitleIds. */
        public TitleIds: number[];

        /** S_Role PvpRoomDissolveTime. */
        public PvpRoomDissolveTime: number;

        /** S_Role PersonalRoomDissolveTime. */
        public PersonalRoomDissolveTime: number;

        /** S_Role DailyFriendIntroCount. */
        public DailyFriendIntroCount: number;

        /** S_Role DailyTaskRefreshCount. */
        public DailyTaskRefreshCount: number;

        /**
         * Creates a new S_Role instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Role instance
         */
        public static create(properties?: DcgProto.IS_Role): DcgProto.S_Role;

        /**
         * Encodes the specified S_Role message. Does not implicitly {@link DcgProto.S_Role.verify|verify} messages.
         * @param m S_Role message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Role, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Role message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Role;

        /**
         * Verifies a S_Role message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GameServerInfo. */
    interface IS_GameServerInfo {

        /** S_GameServerInfo OpenServerTime */
        OpenServerTime?: (number|null);

        /** S_GameServerInfo StartVersion */
        StartVersion?: (string|null);
    }

    /** Represents a S_GameServerInfo. */
    class S_GameServerInfo implements IS_GameServerInfo {

        /**
         * Constructs a new S_GameServerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GameServerInfo);

        /** S_GameServerInfo OpenServerTime. */
        public OpenServerTime: number;

        /** S_GameServerInfo StartVersion. */
        public StartVersion: string;

        /**
         * Creates a new S_GameServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GameServerInfo instance
         */
        public static create(properties?: DcgProto.IS_GameServerInfo): DcgProto.S_GameServerInfo;

        /**
         * Encodes the specified S_GameServerInfo message. Does not implicitly {@link DcgProto.S_GameServerInfo.verify|verify} messages.
         * @param m S_GameServerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GameServerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GameServerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GameServerInfo;

        /**
         * Verifies a S_GameServerInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CommonUpdate. */
    interface IS_CommonUpdate {

        /** S_CommonUpdate Role */
        Role?: (DcgProto.IS_Role|null);

        /** S_CommonUpdate ServerInfo */
        ServerInfo?: (DcgProto.IS_GameServerInfo|null);

        /** S_CommonUpdate Items */
        Items?: (DcgProto.IS_Item[]|null);

        /** S_CommonUpdate Cards */
        Cards?: (DcgProto.IS_Card[]|null);

        /** S_CommonUpdate Decks */
        Decks?: (DcgProto.IS_DeckInfo[]|null);

        /** S_CommonUpdate DeckExtends */
        DeckExtends?: (DcgProto.IS_DeckExtendInfo[]|null);

        /** S_CommonUpdate Shops */
        Shops?: (DcgProto.IS_Shop[]|null);

        /** S_CommonUpdate CardBags */
        CardBags?: (DcgProto.IS_CardBag[]|null);

        /** S_CommonUpdate Parts */
        Parts?: (DcgProto.IS_Parts[]|null);

        /** S_CommonUpdate CardCollects */
        CardCollects?: (DcgProto.IS_CardCollect[]|null);

        /** S_CommonUpdate MailNews */
        MailNews?: (DcgProto.IS_MailNew[]|null);

        /** S_CommonUpdate Friend */
        Friend?: (DcgProto.IS_Friend[]|null);

        /** S_CommonUpdate FriendApply */
        FriendApply?: (DcgProto.IS_FriendApply[]|null);

        /** S_CommonUpdate FriendBeApply */
        FriendBeApply?: (DcgProto.IS_FriendApply[]|null);

        /** S_CommonUpdate Fight */
        Fight?: (DcgProto.IS_Fight|null);

        /** S_CommonUpdate Match */
        Match?: (DcgProto.IS_Match|null);

        /** S_CommonUpdate PvpInvite */
        PvpInvite?: (DcgProto.IS_PvpInvite[]|null);

        /** S_CommonUpdate PvpBeInvite */
        PvpBeInvite?: (DcgProto.IS_PvpInvite[]|null);

        /** S_CommonUpdate RoleExtra */
        RoleExtra?: (DcgProto.IS_RoleExtra|null);

        /** S_CommonUpdate PersonalRoom */
        PersonalRoom?: (DcgProto.IS_PersonalRoom|null);

        /** S_CommonUpdate PvpRoom */
        PvpRoom?: (DcgProto.IS_PvpRoom|null);

        /** S_CommonUpdate PvpRoomMember */
        PvpRoomMember?: (DcgProto.IS_PvpRoomMember[]|null);

        /** S_CommonUpdate PvpRoomRace */
        PvpRoomRace?: (DcgProto.IS_PvpRoomRace|null);

        /** S_CommonUpdate Tasks */
        Tasks?: (DcgProto.IS_Task[]|null);

        /** S_CommonUpdate StageTasks */
        StageTasks?: (DcgProto.IS_StageTask[]|null);

        /** S_CommonUpdate Storys */
        Storys?: (DcgProto.IS_Story[]|null);

        /** S_CommonUpdate Digimons */
        Digimons?: (DcgProto.IS_Digimon[]|null);

        /** S_CommonUpdate DigimonEvo */
        DigimonEvo?: (DcgProto.IS_DigimonEvo|null);

        /** S_CommonUpdate Ranked */
        Ranked?: (DcgProto.IS_Ranked|null);
    }

    /** Represents a S_CommonUpdate. */
    class S_CommonUpdate implements IS_CommonUpdate {

        /**
         * Constructs a new S_CommonUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CommonUpdate);

        /** S_CommonUpdate Role. */
        public Role?: (DcgProto.IS_Role|null);

        /** S_CommonUpdate ServerInfo. */
        public ServerInfo?: (DcgProto.IS_GameServerInfo|null);

        /** S_CommonUpdate Items. */
        public Items: DcgProto.IS_Item[];

        /** S_CommonUpdate Cards. */
        public Cards: DcgProto.IS_Card[];

        /** S_CommonUpdate Decks. */
        public Decks: DcgProto.IS_DeckInfo[];

        /** S_CommonUpdate DeckExtends. */
        public DeckExtends: DcgProto.IS_DeckExtendInfo[];

        /** S_CommonUpdate Shops. */
        public Shops: DcgProto.IS_Shop[];

        /** S_CommonUpdate CardBags. */
        public CardBags: DcgProto.IS_CardBag[];

        /** S_CommonUpdate Parts. */
        public Parts: DcgProto.IS_Parts[];

        /** S_CommonUpdate CardCollects. */
        public CardCollects: DcgProto.IS_CardCollect[];

        /** S_CommonUpdate MailNews. */
        public MailNews: DcgProto.IS_MailNew[];

        /** S_CommonUpdate Friend. */
        public Friend: DcgProto.IS_Friend[];

        /** S_CommonUpdate FriendApply. */
        public FriendApply: DcgProto.IS_FriendApply[];

        /** S_CommonUpdate FriendBeApply. */
        public FriendBeApply: DcgProto.IS_FriendApply[];

        /** S_CommonUpdate Fight. */
        public Fight?: (DcgProto.IS_Fight|null);

        /** S_CommonUpdate Match. */
        public Match?: (DcgProto.IS_Match|null);

        /** S_CommonUpdate PvpInvite. */
        public PvpInvite: DcgProto.IS_PvpInvite[];

        /** S_CommonUpdate PvpBeInvite. */
        public PvpBeInvite: DcgProto.IS_PvpInvite[];

        /** S_CommonUpdate RoleExtra. */
        public RoleExtra?: (DcgProto.IS_RoleExtra|null);

        /** S_CommonUpdate PersonalRoom. */
        public PersonalRoom?: (DcgProto.IS_PersonalRoom|null);

        /** S_CommonUpdate PvpRoom. */
        public PvpRoom?: (DcgProto.IS_PvpRoom|null);

        /** S_CommonUpdate PvpRoomMember. */
        public PvpRoomMember: DcgProto.IS_PvpRoomMember[];

        /** S_CommonUpdate PvpRoomRace. */
        public PvpRoomRace?: (DcgProto.IS_PvpRoomRace|null);

        /** S_CommonUpdate Tasks. */
        public Tasks: DcgProto.IS_Task[];

        /** S_CommonUpdate StageTasks. */
        public StageTasks: DcgProto.IS_StageTask[];

        /** S_CommonUpdate Storys. */
        public Storys: DcgProto.IS_Story[];

        /** S_CommonUpdate Digimons. */
        public Digimons: DcgProto.IS_Digimon[];

        /** S_CommonUpdate DigimonEvo. */
        public DigimonEvo?: (DcgProto.IS_DigimonEvo|null);

        /** S_CommonUpdate Ranked. */
        public Ranked?: (DcgProto.IS_Ranked|null);

        /**
         * Creates a new S_CommonUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CommonUpdate instance
         */
        public static create(properties?: DcgProto.IS_CommonUpdate): DcgProto.S_CommonUpdate;

        /**
         * Encodes the specified S_CommonUpdate message. Does not implicitly {@link DcgProto.S_CommonUpdate.verify|verify} messages.
         * @param m S_CommonUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CommonUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CommonUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CommonUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CommonUpdate;

        /**
         * Verifies a S_CommonUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CommonDelete. */
    interface IS_CommonDelete {

        /** S_CommonDelete Items */
        Items?: (Long[]|null);

        /** S_CommonDelete Cards */
        Cards?: (Long[]|null);

        /** S_CommonDelete Decks */
        Decks?: (Long[]|null);

        /** S_CommonDelete DeckExtends */
        DeckExtends?: (Long[]|null);

        /** S_CommonDelete Shops */
        Shops?: (Long[]|null);

        /** S_CommonDelete CardBags */
        CardBags?: (Long[]|null);

        /** S_CommonDelete Parts */
        Parts?: (Long[]|null);

        /** S_CommonDelete MailNews */
        MailNews?: (Long[]|null);

        /** S_CommonDelete Friends */
        Friends?: (Long[]|null);

        /** S_CommonDelete FriendApply */
        FriendApply?: (Long[]|null);

        /** S_CommonDelete PvpInvites */
        PvpInvites?: (Long[]|null);

        /** S_CommonDelete PvpRoom */
        PvpRoom?: (Long|null);

        /** S_CommonDelete PvpRoomMembers */
        PvpRoomMembers?: (Long[]|null);

        /** S_CommonDelete Match */
        Match?: (Long|null);

        /** S_CommonDelete Fight */
        Fight?: (Long|null);

        /** S_CommonDelete PersonalRoom */
        PersonalRoom?: (Long|null);

        /** S_CommonDelete Tasks */
        Tasks?: (Long[]|null);

        /** S_CommonDelete StageTasks */
        StageTasks?: (Long[]|null);

        /** S_CommonDelete Storys */
        Storys?: (Long[]|null);

        /** S_CommonDelete Digimons */
        Digimons?: (Long[]|null);
    }

    /** Represents a S_CommonDelete. */
    class S_CommonDelete implements IS_CommonDelete {

        /**
         * Constructs a new S_CommonDelete.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CommonDelete);

        /** S_CommonDelete Items. */
        public Items: Long[];

        /** S_CommonDelete Cards. */
        public Cards: Long[];

        /** S_CommonDelete Decks. */
        public Decks: Long[];

        /** S_CommonDelete DeckExtends. */
        public DeckExtends: Long[];

        /** S_CommonDelete Shops. */
        public Shops: Long[];

        /** S_CommonDelete CardBags. */
        public CardBags: Long[];

        /** S_CommonDelete Parts. */
        public Parts: Long[];

        /** S_CommonDelete MailNews. */
        public MailNews: Long[];

        /** S_CommonDelete Friends. */
        public Friends: Long[];

        /** S_CommonDelete FriendApply. */
        public FriendApply: Long[];

        /** S_CommonDelete PvpInvites. */
        public PvpInvites: Long[];

        /** S_CommonDelete PvpRoom. */
        public PvpRoom: Long;

        /** S_CommonDelete PvpRoomMembers. */
        public PvpRoomMembers: Long[];

        /** S_CommonDelete Match. */
        public Match: Long;

        /** S_CommonDelete Fight. */
        public Fight: Long;

        /** S_CommonDelete PersonalRoom. */
        public PersonalRoom: Long;

        /** S_CommonDelete Tasks. */
        public Tasks: Long[];

        /** S_CommonDelete StageTasks. */
        public StageTasks: Long[];

        /** S_CommonDelete Storys. */
        public Storys: Long[];

        /** S_CommonDelete Digimons. */
        public Digimons: Long[];

        /**
         * Creates a new S_CommonDelete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CommonDelete instance
         */
        public static create(properties?: DcgProto.IS_CommonDelete): DcgProto.S_CommonDelete;

        /**
         * Encodes the specified S_CommonDelete message. Does not implicitly {@link DcgProto.S_CommonDelete.verify|verify} messages.
         * @param m S_CommonDelete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CommonDelete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CommonDelete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CommonDelete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CommonDelete;

        /**
         * Verifies a S_CommonDelete message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CommonReq. */
    interface IS_CommonReq {
    }

    /** Represents a S_CommonReq. */
    class S_CommonReq implements IS_CommonReq {

        /**
         * Constructs a new S_CommonReq.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CommonReq);

        /**
         * Creates a new S_CommonReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CommonReq instance
         */
        public static create(properties?: DcgProto.IS_CommonReq): DcgProto.S_CommonReq;

        /**
         * Encodes the specified S_CommonReq message. Does not implicitly {@link DcgProto.S_CommonReq.verify|verify} messages.
         * @param m S_CommonReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CommonReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CommonReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CommonReq;

        /**
         * Verifies a S_CommonReq message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_AddData. */
    interface IS_AddData {

        /** S_AddData AddInfoList */
        AddInfoList?: (DcgProto.IS_AddInfo[]|null);
    }

    /** Represents a S_AddData. */
    class S_AddData implements IS_AddData {

        /**
         * Constructs a new S_AddData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_AddData);

        /** S_AddData AddInfoList. */
        public AddInfoList: DcgProto.IS_AddInfo[];

        /**
         * Creates a new S_AddData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_AddData instance
         */
        public static create(properties?: DcgProto.IS_AddData): DcgProto.S_AddData;

        /**
         * Encodes the specified S_AddData message. Does not implicitly {@link DcgProto.S_AddData.verify|verify} messages.
         * @param m S_AddData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_AddData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_AddData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_AddData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_AddData;

        /**
         * Verifies a S_AddData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_AddInfo. */
    interface IS_AddInfo {

        /** S_AddInfo CfgId */
        CfgId?: (number|null);

        /** S_AddInfo Num */
        Num?: (number|null);

        /** S_AddInfo RealCfgId */
        RealCfgId?: (number|null);

        /** S_AddInfo RealNum */
        RealNum?: (number|null);
    }

    /** Represents a S_AddInfo. */
    class S_AddInfo implements IS_AddInfo {

        /**
         * Constructs a new S_AddInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_AddInfo);

        /** S_AddInfo CfgId. */
        public CfgId: number;

        /** S_AddInfo Num. */
        public Num: number;

        /** S_AddInfo RealCfgId. */
        public RealCfgId: number;

        /** S_AddInfo RealNum. */
        public RealNum: number;

        /**
         * Creates a new S_AddInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_AddInfo instance
         */
        public static create(properties?: DcgProto.IS_AddInfo): DcgProto.S_AddInfo;

        /**
         * Encodes the specified S_AddInfo message. Does not implicitly {@link DcgProto.S_AddInfo.verify|verify} messages.
         * @param m S_AddInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_AddInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_AddInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_AddInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_AddInfo;

        /**
         * Verifies a S_AddInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CommonResp. */
    interface IS_CommonResp {

        /** S_CommonResp ServerTime */
        ServerTime?: (number|null);

        /** S_CommonResp CommonUpdate */
        CommonUpdate?: (DcgProto.IS_CommonUpdate|null);

        /** S_CommonResp CommonDelete */
        CommonDelete?: (DcgProto.IS_CommonDelete|null);

        /** S_CommonResp AddInfoList */
        AddInfoList?: (DcgProto.IS_AddInfo[]|null);
    }

    /** Represents a S_CommonResp. */
    class S_CommonResp implements IS_CommonResp {

        /**
         * Constructs a new S_CommonResp.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CommonResp);

        /** S_CommonResp ServerTime. */
        public ServerTime: number;

        /** S_CommonResp CommonUpdate. */
        public CommonUpdate?: (DcgProto.IS_CommonUpdate|null);

        /** S_CommonResp CommonDelete. */
        public CommonDelete?: (DcgProto.IS_CommonDelete|null);

        /** S_CommonResp AddInfoList. */
        public AddInfoList: DcgProto.IS_AddInfo[];

        /**
         * Creates a new S_CommonResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CommonResp instance
         */
        public static create(properties?: DcgProto.IS_CommonResp): DcgProto.S_CommonResp;

        /**
         * Encodes the specified S_CommonResp message. Does not implicitly {@link DcgProto.S_CommonResp.verify|verify} messages.
         * @param m S_CommonResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CommonResp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CommonResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CommonResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CommonResp;

        /**
         * Verifies a S_CommonResp message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_OtherRole. */
    interface IS_OtherRole {

        /** S_OtherRole InstanceId */
        InstanceId?: (Long|null);

        /** S_OtherRole Level */
        Level?: (number|null);

        /** S_OtherRole NickName */
        NickName?: (string|null);

        /** S_OtherRole Icon */
        Icon?: (number|null);

        /** S_OtherRole IconFrame */
        IconFrame?: (number|null);

        /** S_OtherRole Paper */
        Paper?: (number|null);

        /** S_OtherRole TitleIds */
        TitleIds?: (number[]|null);

        /** S_OtherRole IsOnline */
        IsOnline?: (boolean|null);

        /** S_OtherRole IsFight */
        IsFight?: (boolean|null);

        /** S_OtherRole RoomIID */
        RoomIID?: (Long|null);

        /** S_OtherRole ShortId */
        ShortId?: (number|null);

        /** S_OtherRole RankedStars */
        RankedStars?: (number|null);

        /** S_OtherRole RankedSeasonCount */
        RankedSeasonCount?: (number|null);
    }

    /** Represents a S_OtherRole. */
    class S_OtherRole implements IS_OtherRole {

        /**
         * Constructs a new S_OtherRole.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_OtherRole);

        /** S_OtherRole InstanceId. */
        public InstanceId: Long;

        /** S_OtherRole Level. */
        public Level: number;

        /** S_OtherRole NickName. */
        public NickName: string;

        /** S_OtherRole Icon. */
        public Icon: number;

        /** S_OtherRole IconFrame. */
        public IconFrame: number;

        /** S_OtherRole Paper. */
        public Paper: number;

        /** S_OtherRole TitleIds. */
        public TitleIds: number[];

        /** S_OtherRole IsOnline. */
        public IsOnline: boolean;

        /** S_OtherRole IsFight. */
        public IsFight: boolean;

        /** S_OtherRole RoomIID. */
        public RoomIID: Long;

        /** S_OtherRole ShortId. */
        public ShortId: number;

        /** S_OtherRole RankedStars. */
        public RankedStars: number;

        /** S_OtherRole RankedSeasonCount. */
        public RankedSeasonCount: number;

        /**
         * Creates a new S_OtherRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_OtherRole instance
         */
        public static create(properties?: DcgProto.IS_OtherRole): DcgProto.S_OtherRole;

        /**
         * Encodes the specified S_OtherRole message. Does not implicitly {@link DcgProto.S_OtherRole.verify|verify} messages.
         * @param m S_OtherRole message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_OtherRole, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_OtherRole message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_OtherRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_OtherRole;

        /**
         * Verifies a S_OtherRole message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_InnerRole. */
    interface IS_InnerRole {

        /** S_InnerRole OtherRole */
        OtherRole?: (DcgProto.IS_OtherRole|null);

        /** S_InnerRole LastLoginTime */
        LastLoginTime?: (number|null);

        /** S_InnerRole MatchScore */
        MatchScore?: (number|null);

        /** S_InnerRole RankedMatchScore */
        RankedMatchScore?: (number|null);
    }

    /** Represents a S_InnerRole. */
    class S_InnerRole implements IS_InnerRole {

        /**
         * Constructs a new S_InnerRole.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_InnerRole);

        /** S_InnerRole OtherRole. */
        public OtherRole?: (DcgProto.IS_OtherRole|null);

        /** S_InnerRole LastLoginTime. */
        public LastLoginTime: number;

        /** S_InnerRole MatchScore. */
        public MatchScore: number;

        /** S_InnerRole RankedMatchScore. */
        public RankedMatchScore: number;

        /**
         * Creates a new S_InnerRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_InnerRole instance
         */
        public static create(properties?: DcgProto.IS_InnerRole): DcgProto.S_InnerRole;

        /**
         * Encodes the specified S_InnerRole message. Does not implicitly {@link DcgProto.S_InnerRole.verify|verify} messages.
         * @param m S_InnerRole message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_InnerRole, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_InnerRole message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_InnerRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_InnerRole;

        /**
         * Verifies a S_InnerRole message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoomInfo. */
    interface IS_RoomInfo {

        /** S_RoomInfo RoomData */
        RoomData?: (DcgProto.IS_RoomData|null);

        /** S_RoomInfo RoomPanel */
        RoomPanel?: (DcgProto.IS_RoomPanel|null);
    }

    /** Represents a S_RoomInfo. */
    class S_RoomInfo implements IS_RoomInfo {

        /**
         * Constructs a new S_RoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoomInfo);

        /** S_RoomInfo RoomData. */
        public RoomData?: (DcgProto.IS_RoomData|null);

        /** S_RoomInfo RoomPanel. */
        public RoomPanel?: (DcgProto.IS_RoomPanel|null);

        /**
         * Creates a new S_RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoomInfo instance
         */
        public static create(properties?: DcgProto.IS_RoomInfo): DcgProto.S_RoomInfo;

        /**
         * Encodes the specified S_RoomInfo message. Does not implicitly {@link DcgProto.S_RoomInfo.verify|verify} messages.
         * @param m S_RoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoomInfo;

        /**
         * Verifies a S_RoomInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoomPanel. */
    interface IS_RoomPanel {

        /** S_RoomPanel WinReward */
        WinReward?: (DcgProto.IS_Reward[]|null);

        /** S_RoomPanel LostReward */
        LostReward?: (DcgProto.IS_Reward[]|null);
    }

    /** Represents a S_RoomPanel. */
    class S_RoomPanel implements IS_RoomPanel {

        /**
         * Constructs a new S_RoomPanel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoomPanel);

        /** S_RoomPanel WinReward. */
        public WinReward: DcgProto.IS_Reward[];

        /** S_RoomPanel LostReward. */
        public LostReward: DcgProto.IS_Reward[];

        /**
         * Creates a new S_RoomPanel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoomPanel instance
         */
        public static create(properties?: DcgProto.IS_RoomPanel): DcgProto.S_RoomPanel;

        /**
         * Encodes the specified S_RoomPanel message. Does not implicitly {@link DcgProto.S_RoomPanel.verify|verify} messages.
         * @param m S_RoomPanel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoomPanel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoomPanel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoomPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoomPanel;

        /**
         * Verifies a S_RoomPanel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoomData. */
    interface IS_RoomData {

        /** S_RoomData InstanceId */
        InstanceId?: (Long|null);

        /** S_RoomData Status */
        Status?: (DcgProto.E_ROOM_STATUS|null);

        /** S_RoomData FightRoleA */
        FightRoleA?: (DcgProto.IS_RoomRoleData|null);

        /** S_RoomData FightRoleB */
        FightRoleB?: (DcgProto.IS_RoomRoleData|null);

        /** S_RoomData ViewerNum */
        ViewerNum?: (number|null);

        /** S_RoomData Ready */
        Ready?: (DcgProto.IS_RoomReadyData|null);

        /** S_RoomData RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);

        /** S_RoomData CreateTime */
        CreateTime?: (number|null);
    }

    /** Represents a S_RoomData. */
    class S_RoomData implements IS_RoomData {

        /**
         * Constructs a new S_RoomData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoomData);

        /** S_RoomData InstanceId. */
        public InstanceId: Long;

        /** S_RoomData Status. */
        public Status: DcgProto.E_ROOM_STATUS;

        /** S_RoomData FightRoleA. */
        public FightRoleA?: (DcgProto.IS_RoomRoleData|null);

        /** S_RoomData FightRoleB. */
        public FightRoleB?: (DcgProto.IS_RoomRoleData|null);

        /** S_RoomData ViewerNum. */
        public ViewerNum: number;

        /** S_RoomData Ready. */
        public Ready?: (DcgProto.IS_RoomReadyData|null);

        /** S_RoomData RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /** S_RoomData CreateTime. */
        public CreateTime: number;

        /**
         * Creates a new S_RoomData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoomData instance
         */
        public static create(properties?: DcgProto.IS_RoomData): DcgProto.S_RoomData;

        /**
         * Encodes the specified S_RoomData message. Does not implicitly {@link DcgProto.S_RoomData.verify|verify} messages.
         * @param m S_RoomData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoomData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoomData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoomData;

        /**
         * Verifies a S_RoomData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoomRoleData. */
    interface IS_RoomRoleData {

        /** S_RoomRoleData OtherRole */
        OtherRole?: (DcgProto.IS_OtherRole|null);

        /** S_RoomRoleData IsJoin */
        IsJoin?: (boolean|null);

        /** S_RoomRoleData DeckInfo */
        DeckInfo?: (DcgProto.IS_DeckInfo|null);

        /** S_RoomRoleData RobotData */
        RobotData?: (DcgProto.IS_RobotData|null);

        /** S_RoomRoleData MatchScore */
        MatchScore?: (number|null);

        /** S_RoomRoleData RankedMatchScore */
        RankedMatchScore?: (number|null);
    }

    /** Represents a S_RoomRoleData. */
    class S_RoomRoleData implements IS_RoomRoleData {

        /**
         * Constructs a new S_RoomRoleData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoomRoleData);

        /** S_RoomRoleData OtherRole. */
        public OtherRole?: (DcgProto.IS_OtherRole|null);

        /** S_RoomRoleData IsJoin. */
        public IsJoin: boolean;

        /** S_RoomRoleData DeckInfo. */
        public DeckInfo?: (DcgProto.IS_DeckInfo|null);

        /** S_RoomRoleData RobotData. */
        public RobotData?: (DcgProto.IS_RobotData|null);

        /** S_RoomRoleData MatchScore. */
        public MatchScore: number;

        /** S_RoomRoleData RankedMatchScore. */
        public RankedMatchScore: number;

        /**
         * Creates a new S_RoomRoleData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoomRoleData instance
         */
        public static create(properties?: DcgProto.IS_RoomRoleData): DcgProto.S_RoomRoleData;

        /**
         * Encodes the specified S_RoomRoleData message. Does not implicitly {@link DcgProto.S_RoomRoleData.verify|verify} messages.
         * @param m S_RoomRoleData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoomRoleData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoomRoleData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoomRoleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoomRoleData;

        /**
         * Verifies a S_RoomRoleData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RobotData. */
    interface IS_RobotData {

        /** S_RobotData CfgId */
        CfgId?: (number|null);
    }

    /** Represents a S_RobotData. */
    class S_RobotData implements IS_RobotData {

        /**
         * Constructs a new S_RobotData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RobotData);

        /** S_RobotData CfgId. */
        public CfgId: number;

        /**
         * Creates a new S_RobotData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RobotData instance
         */
        public static create(properties?: DcgProto.IS_RobotData): DcgProto.S_RobotData;

        /**
         * Encodes the specified S_RobotData message. Does not implicitly {@link DcgProto.S_RobotData.verify|verify} messages.
         * @param m S_RobotData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RobotData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RobotData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RobotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RobotData;

        /**
         * Verifies a S_RobotData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoomReadyData. */
    interface IS_RoomReadyData {

        /** S_RoomReadyData FirstAtkAccountIID */
        FirstAtkAccountIID?: (Long|null);

        /** S_RoomReadyData GuessFist */
        GuessFist?: (DcgProto.IS_GuessFist[]|null);
    }

    /** Represents a S_RoomReadyData. */
    class S_RoomReadyData implements IS_RoomReadyData {

        /**
         * Constructs a new S_RoomReadyData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoomReadyData);

        /** S_RoomReadyData FirstAtkAccountIID. */
        public FirstAtkAccountIID: Long;

        /** S_RoomReadyData GuessFist. */
        public GuessFist: DcgProto.IS_GuessFist[];

        /**
         * Creates a new S_RoomReadyData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoomReadyData instance
         */
        public static create(properties?: DcgProto.IS_RoomReadyData): DcgProto.S_RoomReadyData;

        /**
         * Encodes the specified S_RoomReadyData message. Does not implicitly {@link DcgProto.S_RoomReadyData.verify|verify} messages.
         * @param m S_RoomReadyData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoomReadyData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoomReadyData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoomReadyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoomReadyData;

        /**
         * Verifies a S_RoomReadyData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GuessFist. */
    interface IS_GuessFist {

        /** S_GuessFist RoleA */
        RoleA?: (DcgProto.IS_GuessFistRole|null);

        /** S_GuessFist RoleB */
        RoleB?: (DcgProto.IS_GuessFistRole|null);
    }

    /** Represents a S_GuessFist. */
    class S_GuessFist implements IS_GuessFist {

        /**
         * Constructs a new S_GuessFist.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GuessFist);

        /** S_GuessFist RoleA. */
        public RoleA?: (DcgProto.IS_GuessFistRole|null);

        /** S_GuessFist RoleB. */
        public RoleB?: (DcgProto.IS_GuessFistRole|null);

        /**
         * Creates a new S_GuessFist instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GuessFist instance
         */
        public static create(properties?: DcgProto.IS_GuessFist): DcgProto.S_GuessFist;

        /**
         * Encodes the specified S_GuessFist message. Does not implicitly {@link DcgProto.S_GuessFist.verify|verify} messages.
         * @param m S_GuessFist message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GuessFist, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GuessFist message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GuessFist
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GuessFist;

        /**
         * Verifies a S_GuessFist message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GuessFistRole. */
    interface IS_GuessFistRole {

        /** S_GuessFistRole RoleIID */
        RoleIID?: (Long|null);

        /** S_GuessFistRole GuessFist */
        GuessFist?: (DcgProto.E_GUESS_FIST|null);

        /** S_GuessFistRole FightResult */
        FightResult?: (DcgProto.E_FightResult|null);
    }

    /** Represents a S_GuessFistRole. */
    class S_GuessFistRole implements IS_GuessFistRole {

        /**
         * Constructs a new S_GuessFistRole.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GuessFistRole);

        /** S_GuessFistRole RoleIID. */
        public RoleIID: Long;

        /** S_GuessFistRole GuessFist. */
        public GuessFist: DcgProto.E_GUESS_FIST;

        /** S_GuessFistRole FightResult. */
        public FightResult: DcgProto.E_FightResult;

        /**
         * Creates a new S_GuessFistRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GuessFistRole instance
         */
        public static create(properties?: DcgProto.IS_GuessFistRole): DcgProto.S_GuessFistRole;

        /**
         * Encodes the specified S_GuessFistRole message. Does not implicitly {@link DcgProto.S_GuessFistRole.verify|verify} messages.
         * @param m S_GuessFistRole message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GuessFistRole, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GuessFistRole message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GuessFistRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GuessFistRole;

        /**
         * Verifies a S_GuessFistRole message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleMsg. */
    interface IS_BattleMsg {

        /** S_BattleMsg FrameIndex */
        FrameIndex?: (number|null);

        /** S_BattleMsg FightA */
        FightA?: (DcgProto.IS_RoomFight[]|null);

        /** S_BattleMsg FightB */
        FightB?: (DcgProto.IS_RoomFight[]|null);

        /** S_BattleMsg Viewer */
        Viewer?: (DcgProto.IS_RoomFight[]|null);

        /** S_BattleMsg CurrRoundRoleIID */
        CurrRoundRoleIID?: (Long|null);

        /** S_BattleMsg EndTurnTime */
        EndTurnTime?: (number|null);
    }

    /** Represents a S_BattleMsg. */
    class S_BattleMsg implements IS_BattleMsg {

        /**
         * Constructs a new S_BattleMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleMsg);

        /** S_BattleMsg FrameIndex. */
        public FrameIndex: number;

        /** S_BattleMsg FightA. */
        public FightA: DcgProto.IS_RoomFight[];

        /** S_BattleMsg FightB. */
        public FightB: DcgProto.IS_RoomFight[];

        /** S_BattleMsg Viewer. */
        public Viewer: DcgProto.IS_RoomFight[];

        /** S_BattleMsg CurrRoundRoleIID. */
        public CurrRoundRoleIID: Long;

        /** S_BattleMsg EndTurnTime. */
        public EndTurnTime: number;

        /**
         * Creates a new S_BattleMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleMsg instance
         */
        public static create(properties?: DcgProto.IS_BattleMsg): DcgProto.S_BattleMsg;

        /**
         * Encodes the specified S_BattleMsg message. Does not implicitly {@link DcgProto.S_BattleMsg.verify|verify} messages.
         * @param m S_BattleMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleMsg;

        /**
         * Verifies a S_BattleMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_EventMsg. */
    interface IS_EventMsg {

        /** S_EventMsg RoundChange */
        RoundChange?: (DcgProto.IS_RoundChange|null);

        /** S_EventMsg AreaCardsCountChange */
        AreaCardsCountChange?: (DcgProto.IS_AreaCardsCountChange|null);

        /** S_EventMsg DigimonEvolution */
        DigimonEvolution?: (DcgProto.IS_DigimonEvolution|null);

        /** S_EventMsg HitterChoose */
        HitterChoose?: (DcgProto.IS_HitterChoose|null);

        /** S_EventMsg OnPlay */
        OnPlay?: (DcgProto.IS_OnPlay|null);

        /** S_EventMsg OnActionEffect */
        OnActionEffect?: (DcgProto.IS_OnActionEffect|null);

        /** S_EventMsg BattleInfo */
        BattleInfo?: (DcgProto.IS_BattleInfo|null);

        /** S_EventMsg DigimonChangeBattleState */
        DigimonChangeBattleState?: (DcgProto.IS_DigimonChangeBattleState|null);

        /** S_EventMsg BeforePlay */
        BeforePlay?: (DcgProto.IS_BeforePlay|null);

        /** S_EventMsg CommonCardInfo */
        CommonCardInfo?: (DcgProto.IS_CommonCardInfo|null);
    }

    /** Represents a S_EventMsg. */
    class S_EventMsg implements IS_EventMsg {

        /**
         * Constructs a new S_EventMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_EventMsg);

        /** S_EventMsg RoundChange. */
        public RoundChange?: (DcgProto.IS_RoundChange|null);

        /** S_EventMsg AreaCardsCountChange. */
        public AreaCardsCountChange?: (DcgProto.IS_AreaCardsCountChange|null);

        /** S_EventMsg DigimonEvolution. */
        public DigimonEvolution?: (DcgProto.IS_DigimonEvolution|null);

        /** S_EventMsg HitterChoose. */
        public HitterChoose?: (DcgProto.IS_HitterChoose|null);

        /** S_EventMsg OnPlay. */
        public OnPlay?: (DcgProto.IS_OnPlay|null);

        /** S_EventMsg OnActionEffect. */
        public OnActionEffect?: (DcgProto.IS_OnActionEffect|null);

        /** S_EventMsg BattleInfo. */
        public BattleInfo?: (DcgProto.IS_BattleInfo|null);

        /** S_EventMsg DigimonChangeBattleState. */
        public DigimonChangeBattleState?: (DcgProto.IS_DigimonChangeBattleState|null);

        /** S_EventMsg BeforePlay. */
        public BeforePlay?: (DcgProto.IS_BeforePlay|null);

        /** S_EventMsg CommonCardInfo. */
        public CommonCardInfo?: (DcgProto.IS_CommonCardInfo|null);

        /**
         * Creates a new S_EventMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_EventMsg instance
         */
        public static create(properties?: DcgProto.IS_EventMsg): DcgProto.S_EventMsg;

        /**
         * Encodes the specified S_EventMsg message. Does not implicitly {@link DcgProto.S_EventMsg.verify|verify} messages.
         * @param m S_EventMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_EventMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_EventMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_EventMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_EventMsg;

        /**
         * Verifies a S_EventMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DigimonChangeBattleState. */
    interface IS_DigimonChangeBattleState {

        /** S_DigimonChangeBattleState CardIID */
        CardIID?: (Long|null);

        /** S_DigimonChangeBattleState Reason */
        Reason?: (DcgProto.E_CHANGE_DIGIMON_BATTLE_STATE_REASON|null);

        /** S_DigimonChangeBattleState ToState */
        ToState?: (DcgProto.E_CARD_BATTLE_STATE|null);
    }

    /** Represents a S_DigimonChangeBattleState. */
    class S_DigimonChangeBattleState implements IS_DigimonChangeBattleState {

        /**
         * Constructs a new S_DigimonChangeBattleState.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DigimonChangeBattleState);

        /** S_DigimonChangeBattleState CardIID. */
        public CardIID: Long;

        /** S_DigimonChangeBattleState Reason. */
        public Reason: DcgProto.E_CHANGE_DIGIMON_BATTLE_STATE_REASON;

        /** S_DigimonChangeBattleState ToState. */
        public ToState: DcgProto.E_CARD_BATTLE_STATE;

        /**
         * Creates a new S_DigimonChangeBattleState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DigimonChangeBattleState instance
         */
        public static create(properties?: DcgProto.IS_DigimonChangeBattleState): DcgProto.S_DigimonChangeBattleState;

        /**
         * Encodes the specified S_DigimonChangeBattleState message. Does not implicitly {@link DcgProto.S_DigimonChangeBattleState.verify|verify} messages.
         * @param m S_DigimonChangeBattleState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DigimonChangeBattleState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DigimonChangeBattleState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DigimonChangeBattleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DigimonChangeBattleState;

        /**
         * Verifies a S_DigimonChangeBattleState message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleInfo. */
    interface IS_BattleInfo {

        /** S_BattleInfo AtkCardIID */
        AtkCardIID?: (Long|null);

        /** S_BattleInfo DefCardIID */
        DefCardIID?: (Long|null);

        /** S_BattleInfo AtkType */
        AtkType?: (DcgProto.E_ATTACK_TYPE|null);
    }

    /** Represents a S_BattleInfo. */
    class S_BattleInfo implements IS_BattleInfo {

        /**
         * Constructs a new S_BattleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleInfo);

        /** S_BattleInfo AtkCardIID. */
        public AtkCardIID: Long;

        /** S_BattleInfo DefCardIID. */
        public DefCardIID: Long;

        /** S_BattleInfo AtkType. */
        public AtkType: DcgProto.E_ATTACK_TYPE;

        /**
         * Creates a new S_BattleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleInfo instance
         */
        public static create(properties?: DcgProto.IS_BattleInfo): DcgProto.S_BattleInfo;

        /**
         * Encodes the specified S_BattleInfo message. Does not implicitly {@link DcgProto.S_BattleInfo.verify|verify} messages.
         * @param m S_BattleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleInfo;

        /**
         * Verifies a S_BattleInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_OnActionEffect. */
    interface IS_OnActionEffect {

        /** S_OnActionEffect CardIID */
        CardIID?: (Long|null);

        /** S_OnActionEffect reason */
        reason?: (DcgProto.E_ACTION_EFFECT_TYPE|null);

        /** S_OnActionEffect OriginCardIID */
        OriginCardIID?: (Long|null);

        /** S_OnActionEffect ActionId */
        ActionId?: (number|null);
    }

    /** Represents a S_OnActionEffect. */
    class S_OnActionEffect implements IS_OnActionEffect {

        /**
         * Constructs a new S_OnActionEffect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_OnActionEffect);

        /** S_OnActionEffect CardIID. */
        public CardIID: Long;

        /** S_OnActionEffect reason. */
        public reason: DcgProto.E_ACTION_EFFECT_TYPE;

        /** S_OnActionEffect OriginCardIID. */
        public OriginCardIID: Long;

        /** S_OnActionEffect ActionId. */
        public ActionId: number;

        /**
         * Creates a new S_OnActionEffect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_OnActionEffect instance
         */
        public static create(properties?: DcgProto.IS_OnActionEffect): DcgProto.S_OnActionEffect;

        /**
         * Encodes the specified S_OnActionEffect message. Does not implicitly {@link DcgProto.S_OnActionEffect.verify|verify} messages.
         * @param m S_OnActionEffect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_OnActionEffect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_OnActionEffect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_OnActionEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_OnActionEffect;

        /**
         * Verifies a S_OnActionEffect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoundChange. */
    interface IS_RoundChange {

        /** S_RoundChange PlayerIID */
        PlayerIID?: (Long|null);

        /** S_RoundChange RoundNum */
        RoundNum?: (number|null);
    }

    /** Represents a S_RoundChange. */
    class S_RoundChange implements IS_RoundChange {

        /**
         * Constructs a new S_RoundChange.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoundChange);

        /** S_RoundChange PlayerIID. */
        public PlayerIID: Long;

        /** S_RoundChange RoundNum. */
        public RoundNum: number;

        /**
         * Creates a new S_RoundChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoundChange instance
         */
        public static create(properties?: DcgProto.IS_RoundChange): DcgProto.S_RoundChange;

        /**
         * Encodes the specified S_RoundChange message. Does not implicitly {@link DcgProto.S_RoundChange.verify|verify} messages.
         * @param m S_RoundChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoundChange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoundChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoundChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoundChange;

        /**
         * Verifies a S_RoundChange message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_AreaCardsCountChange. */
    interface IS_AreaCardsCountChange {

        /** S_AreaCardsCountChange PlayerIID */
        PlayerIID?: (Long|null);

        /** S_AreaCardsCountChange AreaType */
        AreaType?: (DcgProto.E_AREA_TYPE|null);

        /** S_AreaCardsCountChange CurAreaNumber */
        CurAreaNumber?: (number|null);
    }

    /** Represents a S_AreaCardsCountChange. */
    class S_AreaCardsCountChange implements IS_AreaCardsCountChange {

        /**
         * Constructs a new S_AreaCardsCountChange.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_AreaCardsCountChange);

        /** S_AreaCardsCountChange PlayerIID. */
        public PlayerIID: Long;

        /** S_AreaCardsCountChange AreaType. */
        public AreaType: DcgProto.E_AREA_TYPE;

        /** S_AreaCardsCountChange CurAreaNumber. */
        public CurAreaNumber: number;

        /**
         * Creates a new S_AreaCardsCountChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_AreaCardsCountChange instance
         */
        public static create(properties?: DcgProto.IS_AreaCardsCountChange): DcgProto.S_AreaCardsCountChange;

        /**
         * Encodes the specified S_AreaCardsCountChange message. Does not implicitly {@link DcgProto.S_AreaCardsCountChange.verify|verify} messages.
         * @param m S_AreaCardsCountChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_AreaCardsCountChange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_AreaCardsCountChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_AreaCardsCountChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_AreaCardsCountChange;

        /**
         * Verifies a S_AreaCardsCountChange message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DigimonEvolution. */
    interface IS_DigimonEvolution {

        /** S_DigimonEvolution Cost */
        Cost?: (number|null);

        /** S_DigimonEvolution EvoCardIID */
        EvoCardIID?: (Long|null);

        /** S_DigimonEvolution OriCardIID */
        OriCardIID?: (Long|null);

        /** S_DigimonEvolution BottomCardIID */
        BottomCardIID?: (Long|null);

        /** S_DigimonEvolution EvolutionType */
        EvolutionType?: (DcgProto.E_EVOLUTION_TYPE|null);
    }

    /** Represents a S_DigimonEvolution. */
    class S_DigimonEvolution implements IS_DigimonEvolution {

        /**
         * Constructs a new S_DigimonEvolution.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DigimonEvolution);

        /** S_DigimonEvolution Cost. */
        public Cost: number;

        /** S_DigimonEvolution EvoCardIID. */
        public EvoCardIID: Long;

        /** S_DigimonEvolution OriCardIID. */
        public OriCardIID: Long;

        /** S_DigimonEvolution BottomCardIID. */
        public BottomCardIID: Long;

        /** S_DigimonEvolution EvolutionType. */
        public EvolutionType: DcgProto.E_EVOLUTION_TYPE;

        /**
         * Creates a new S_DigimonEvolution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DigimonEvolution instance
         */
        public static create(properties?: DcgProto.IS_DigimonEvolution): DcgProto.S_DigimonEvolution;

        /**
         * Encodes the specified S_DigimonEvolution message. Does not implicitly {@link DcgProto.S_DigimonEvolution.verify|verify} messages.
         * @param m S_DigimonEvolution message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DigimonEvolution, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DigimonEvolution message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DigimonEvolution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DigimonEvolution;

        /**
         * Verifies a S_DigimonEvolution message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BeforePlay. */
    interface IS_BeforePlay {

        /** S_BeforePlay CardIID */
        CardIID?: (Long|null);

        /** S_BeforePlay WherePlay */
        WherePlay?: (DcgProto.E_AREA_TYPE|null);
    }

    /** Represents a S_BeforePlay. */
    class S_BeforePlay implements IS_BeforePlay {

        /**
         * Constructs a new S_BeforePlay.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BeforePlay);

        /** S_BeforePlay CardIID. */
        public CardIID: Long;

        /** S_BeforePlay WherePlay. */
        public WherePlay: DcgProto.E_AREA_TYPE;

        /**
         * Creates a new S_BeforePlay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BeforePlay instance
         */
        public static create(properties?: DcgProto.IS_BeforePlay): DcgProto.S_BeforePlay;

        /**
         * Encodes the specified S_BeforePlay message. Does not implicitly {@link DcgProto.S_BeforePlay.verify|verify} messages.
         * @param m S_BeforePlay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BeforePlay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BeforePlay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BeforePlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BeforePlay;

        /**
         * Verifies a S_BeforePlay message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CommonCardInfo. */
    interface IS_CommonCardInfo {

        /** S_CommonCardInfo CardIID */
        CardIID?: (Long|null);
    }

    /** Represents a S_CommonCardInfo. */
    class S_CommonCardInfo implements IS_CommonCardInfo {

        /**
         * Constructs a new S_CommonCardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CommonCardInfo);

        /** S_CommonCardInfo CardIID. */
        public CardIID: Long;

        /**
         * Creates a new S_CommonCardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CommonCardInfo instance
         */
        public static create(properties?: DcgProto.IS_CommonCardInfo): DcgProto.S_CommonCardInfo;

        /**
         * Encodes the specified S_CommonCardInfo message. Does not implicitly {@link DcgProto.S_CommonCardInfo.verify|verify} messages.
         * @param m S_CommonCardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CommonCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CommonCardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CommonCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CommonCardInfo;

        /**
         * Verifies a S_CommonCardInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_HitterChoose. */
    interface IS_HitterChoose {

        /** S_HitterChoose AtkCardIID */
        AtkCardIID?: (Long|null);

        /** S_HitterChoose AtkType */
        AtkType?: (DcgProto.E_ATTACK_TYPE|null);

        /** S_HitterChoose DefenseCardIID */
        DefenseCardIID?: (Long|null);

        /** S_HitterChoose ListDef */
        ListDef?: (Long[]|null);
    }

    /** Represents a S_HitterChoose. */
    class S_HitterChoose implements IS_HitterChoose {

        /**
         * Constructs a new S_HitterChoose.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_HitterChoose);

        /** S_HitterChoose AtkCardIID. */
        public AtkCardIID: Long;

        /** S_HitterChoose AtkType. */
        public AtkType: DcgProto.E_ATTACK_TYPE;

        /** S_HitterChoose DefenseCardIID. */
        public DefenseCardIID: Long;

        /** S_HitterChoose ListDef. */
        public ListDef: Long[];

        /**
         * Creates a new S_HitterChoose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_HitterChoose instance
         */
        public static create(properties?: DcgProto.IS_HitterChoose): DcgProto.S_HitterChoose;

        /**
         * Encodes the specified S_HitterChoose message. Does not implicitly {@link DcgProto.S_HitterChoose.verify|verify} messages.
         * @param m S_HitterChoose message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_HitterChoose, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_HitterChoose message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_HitterChoose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_HitterChoose;

        /**
         * Verifies a S_HitterChoose message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_OnPlay. */
    interface IS_OnPlay {

        /** S_OnPlay CardIID */
        CardIID?: (Long|null);

        /** S_OnPlay Reason */
        Reason?: (number|null);
    }

    /** Represents a S_OnPlay. */
    class S_OnPlay implements IS_OnPlay {

        /**
         * Constructs a new S_OnPlay.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_OnPlay);

        /** S_OnPlay CardIID. */
        public CardIID: Long;

        /** S_OnPlay Reason. */
        public Reason: number;

        /**
         * Creates a new S_OnPlay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_OnPlay instance
         */
        public static create(properties?: DcgProto.IS_OnPlay): DcgProto.S_OnPlay;

        /**
         * Encodes the specified S_OnPlay message. Does not implicitly {@link DcgProto.S_OnPlay.verify|verify} messages.
         * @param m S_OnPlay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_OnPlay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_OnPlay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_OnPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_OnPlay;

        /**
         * Verifies a S_OnPlay message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoomFight. */
    interface IS_RoomFight {

        /** S_RoomFight BattleStartMsg */
        BattleStartMsg?: (DcgProto.IS_BattleStartMsg|null);

        /** S_RoomFight SetBattlePhase */
        SetBattlePhase?: (DcgProto.IS_SetBattlePhase|null);

        /** S_RoomFight DigimonSetCost */
        DigimonSetCost?: (DcgProto.IS_DigimonSetCost|null);

        /** S_RoomFight GameOver */
        GameOver?: (DcgProto.IS_GameOver|null);

        /** S_RoomFight MoveCardMessage */
        MoveCardMessage?: (DcgProto.IS_MoveCardMessage|null);

        /** S_RoomFight EvoDigimon */
        EvoDigimon?: (DcgProto.IS_EvoDigimon|null);

        /** S_RoomFight UpdateCardDetails */
        UpdateCardDetails?: (DcgProto.IS_UpdateCardDetails|null);

        /** S_RoomFight PlayerChoose */
        PlayerChoose?: (DcgProto.IS_PlayerChoose|null);

        /** S_RoomFight PlayerDefenseSelect */
        PlayerDefenseSelect?: (DcgProto.IS_PlayerDefenseSelect|null);

        /** S_RoomFight PlayerSelectOptions */
        PlayerSelectOptions?: (DcgProto.IS_PlayerSelectOptions|null);

        /** S_RoomFight ClientShow */
        ClientShow?: (DcgProto.IS_ClientShow|null);

        /** S_RoomFight BattleDetail */
        BattleDetail?: (DcgProto.IS_BattleDetail|null);

        /** S_RoomFight PlayerSelectEffectActivate */
        PlayerSelectEffectActivate?: (DcgProto.IS_PlayerSelectEffectActivate|null);

        /** S_RoomFight UpdateGameBattleCardInfo */
        UpdateGameBattleCardInfo?: (DcgProto.IS_UpdateGameBattleCardInfo|null);

        /** S_RoomFight DigimonDegenerate */
        DigimonDegenerate?: (DcgProto.IS_DigimonDegenerate|null);

        /** S_RoomFight PlayerExcavated */
        PlayerExcavated?: (DcgProto.IS_PlayerExcavated|null);

        /** S_RoomFight PlayerSceneEvent */
        PlayerSceneEvent?: (DcgProto.IS_PlayerSceneEvent|null);
    }

    /** Represents a S_RoomFight. */
    class S_RoomFight implements IS_RoomFight {

        /**
         * Constructs a new S_RoomFight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoomFight);

        /** S_RoomFight BattleStartMsg. */
        public BattleStartMsg?: (DcgProto.IS_BattleStartMsg|null);

        /** S_RoomFight SetBattlePhase. */
        public SetBattlePhase?: (DcgProto.IS_SetBattlePhase|null);

        /** S_RoomFight DigimonSetCost. */
        public DigimonSetCost?: (DcgProto.IS_DigimonSetCost|null);

        /** S_RoomFight GameOver. */
        public GameOver?: (DcgProto.IS_GameOver|null);

        /** S_RoomFight MoveCardMessage. */
        public MoveCardMessage?: (DcgProto.IS_MoveCardMessage|null);

        /** S_RoomFight EvoDigimon. */
        public EvoDigimon?: (DcgProto.IS_EvoDigimon|null);

        /** S_RoomFight UpdateCardDetails. */
        public UpdateCardDetails?: (DcgProto.IS_UpdateCardDetails|null);

        /** S_RoomFight PlayerChoose. */
        public PlayerChoose?: (DcgProto.IS_PlayerChoose|null);

        /** S_RoomFight PlayerDefenseSelect. */
        public PlayerDefenseSelect?: (DcgProto.IS_PlayerDefenseSelect|null);

        /** S_RoomFight PlayerSelectOptions. */
        public PlayerSelectOptions?: (DcgProto.IS_PlayerSelectOptions|null);

        /** S_RoomFight ClientShow. */
        public ClientShow?: (DcgProto.IS_ClientShow|null);

        /** S_RoomFight BattleDetail. */
        public BattleDetail?: (DcgProto.IS_BattleDetail|null);

        /** S_RoomFight PlayerSelectEffectActivate. */
        public PlayerSelectEffectActivate?: (DcgProto.IS_PlayerSelectEffectActivate|null);

        /** S_RoomFight UpdateGameBattleCardInfo. */
        public UpdateGameBattleCardInfo?: (DcgProto.IS_UpdateGameBattleCardInfo|null);

        /** S_RoomFight DigimonDegenerate. */
        public DigimonDegenerate?: (DcgProto.IS_DigimonDegenerate|null);

        /** S_RoomFight PlayerExcavated. */
        public PlayerExcavated?: (DcgProto.IS_PlayerExcavated|null);

        /** S_RoomFight PlayerSceneEvent. */
        public PlayerSceneEvent?: (DcgProto.IS_PlayerSceneEvent|null);

        /**
         * Creates a new S_RoomFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoomFight instance
         */
        public static create(properties?: DcgProto.IS_RoomFight): DcgProto.S_RoomFight;

        /**
         * Encodes the specified S_RoomFight message. Does not implicitly {@link DcgProto.S_RoomFight.verify|verify} messages.
         * @param m S_RoomFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoomFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoomFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoomFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoomFight;

        /**
         * Verifies a S_RoomFight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ClientShow. */
    interface IS_ClientShow {

        /** S_ClientShow PlayerIID */
        PlayerIID?: (Long|null);

        /** S_ClientShow ShowType */
        ShowType?: (number|null);

        /** S_ClientShow CardIIDS */
        CardIIDS?: (Long[]|null);

        /** S_ClientShow other */
        other?: (string|null);
    }

    /** Represents a S_ClientShow. */
    class S_ClientShow implements IS_ClientShow {

        /**
         * Constructs a new S_ClientShow.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ClientShow);

        /** S_ClientShow PlayerIID. */
        public PlayerIID: Long;

        /** S_ClientShow ShowType. */
        public ShowType: number;

        /** S_ClientShow CardIIDS. */
        public CardIIDS: Long[];

        /** S_ClientShow other. */
        public other: string;

        /**
         * Creates a new S_ClientShow instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ClientShow instance
         */
        public static create(properties?: DcgProto.IS_ClientShow): DcgProto.S_ClientShow;

        /**
         * Encodes the specified S_ClientShow message. Does not implicitly {@link DcgProto.S_ClientShow.verify|verify} messages.
         * @param m S_ClientShow message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ClientShow, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ClientShow message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ClientShow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ClientShow;

        /**
         * Verifies a S_ClientShow message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleStartMsg. */
    interface IS_BattleStartMsg {

        /** S_BattleStartMsg PlayerA */
        PlayerA?: (DcgProto.IS_PlayerBattleDetail|null);

        /** S_BattleStartMsg PlayerB */
        PlayerB?: (DcgProto.IS_PlayerBattleDetail|null);
    }

    /** Represents a S_BattleStartMsg. */
    class S_BattleStartMsg implements IS_BattleStartMsg {

        /**
         * Constructs a new S_BattleStartMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleStartMsg);

        /** S_BattleStartMsg PlayerA. */
        public PlayerA?: (DcgProto.IS_PlayerBattleDetail|null);

        /** S_BattleStartMsg PlayerB. */
        public PlayerB?: (DcgProto.IS_PlayerBattleDetail|null);

        /**
         * Creates a new S_BattleStartMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleStartMsg instance
         */
        public static create(properties?: DcgProto.IS_BattleStartMsg): DcgProto.S_BattleStartMsg;

        /**
         * Encodes the specified S_BattleStartMsg message. Does not implicitly {@link DcgProto.S_BattleStartMsg.verify|verify} messages.
         * @param m S_BattleStartMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleStartMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleStartMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleStartMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleStartMsg;

        /**
         * Verifies a S_BattleStartMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleDetail. */
    interface IS_BattleDetail {

        /** S_BattleDetail PlayerA */
        PlayerA?: (DcgProto.IS_PlayerBattleDetail|null);

        /** S_BattleDetail PlayerB */
        PlayerB?: (DcgProto.IS_PlayerBattleDetail|null);

        /** S_BattleDetail WaitPlayerIID */
        WaitPlayerIID?: (Long|null);

        /** S_BattleDetail TimeOutEndTime */
        TimeOutEndTime?: (number|null);

        /** S_BattleDetail IsPause */
        IsPause?: (boolean|null);
    }

    /** Represents a S_BattleDetail. */
    class S_BattleDetail implements IS_BattleDetail {

        /**
         * Constructs a new S_BattleDetail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleDetail);

        /** S_BattleDetail PlayerA. */
        public PlayerA?: (DcgProto.IS_PlayerBattleDetail|null);

        /** S_BattleDetail PlayerB. */
        public PlayerB?: (DcgProto.IS_PlayerBattleDetail|null);

        /** S_BattleDetail WaitPlayerIID. */
        public WaitPlayerIID: Long;

        /** S_BattleDetail TimeOutEndTime. */
        public TimeOutEndTime: number;

        /** S_BattleDetail IsPause. */
        public IsPause: boolean;

        /**
         * Creates a new S_BattleDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleDetail instance
         */
        public static create(properties?: DcgProto.IS_BattleDetail): DcgProto.S_BattleDetail;

        /**
         * Encodes the specified S_BattleDetail message. Does not implicitly {@link DcgProto.S_BattleDetail.verify|verify} messages.
         * @param m S_BattleDetail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleDetail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleDetail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleDetail;

        /**
         * Verifies a S_BattleDetail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerSelectEffectActivate. */
    interface IS_PlayerSelectEffectActivate {

        /** S_PlayerSelectEffectActivate PlayerIID */
        PlayerIID?: (Long|null);

        /** S_PlayerSelectEffectActivate EffectActivate */
        EffectActivate?: (DcgProto.IS_EffectActivate[]|null);

        /** S_PlayerSelectEffectActivate RequestId */
        RequestId?: (number|null);
    }

    /** Represents a S_PlayerSelectEffectActivate. */
    class S_PlayerSelectEffectActivate implements IS_PlayerSelectEffectActivate {

        /**
         * Constructs a new S_PlayerSelectEffectActivate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerSelectEffectActivate);

        /** S_PlayerSelectEffectActivate PlayerIID. */
        public PlayerIID: Long;

        /** S_PlayerSelectEffectActivate EffectActivate. */
        public EffectActivate: DcgProto.IS_EffectActivate[];

        /** S_PlayerSelectEffectActivate RequestId. */
        public RequestId: number;

        /**
         * Creates a new S_PlayerSelectEffectActivate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerSelectEffectActivate instance
         */
        public static create(properties?: DcgProto.IS_PlayerSelectEffectActivate): DcgProto.S_PlayerSelectEffectActivate;

        /**
         * Encodes the specified S_PlayerSelectEffectActivate message. Does not implicitly {@link DcgProto.S_PlayerSelectEffectActivate.verify|verify} messages.
         * @param m S_PlayerSelectEffectActivate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerSelectEffectActivate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerSelectEffectActivate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerSelectEffectActivate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerSelectEffectActivate;

        /**
         * Verifies a S_PlayerSelectEffectActivate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_UpdateGameBattleCardInfo. */
    interface IS_UpdateGameBattleCardInfo {

        /** S_UpdateGameBattleCardInfo GameBattlePlayers */
        GameBattlePlayers?: (DcgProto.IS_GameBattlePlayer[]|null);
    }

    /** Represents a S_UpdateGameBattleCardInfo. */
    class S_UpdateGameBattleCardInfo implements IS_UpdateGameBattleCardInfo {

        /**
         * Constructs a new S_UpdateGameBattleCardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_UpdateGameBattleCardInfo);

        /** S_UpdateGameBattleCardInfo GameBattlePlayers. */
        public GameBattlePlayers: DcgProto.IS_GameBattlePlayer[];

        /**
         * Creates a new S_UpdateGameBattleCardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_UpdateGameBattleCardInfo instance
         */
        public static create(properties?: DcgProto.IS_UpdateGameBattleCardInfo): DcgProto.S_UpdateGameBattleCardInfo;

        /**
         * Encodes the specified S_UpdateGameBattleCardInfo message. Does not implicitly {@link DcgProto.S_UpdateGameBattleCardInfo.verify|verify} messages.
         * @param m S_UpdateGameBattleCardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_UpdateGameBattleCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_UpdateGameBattleCardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_UpdateGameBattleCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_UpdateGameBattleCardInfo;

        /**
         * Verifies a S_UpdateGameBattleCardInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DigimonDegenerate. */
    interface IS_DigimonDegenerate {

        /** S_DigimonDegenerate PlayerIID */
        PlayerIID?: (Long|null);

        /** S_DigimonDegenerate DegenerateCard */
        DegenerateCard?: (DcgProto.IS_OtherCard|null);

        /** S_DigimonDegenerate ProcessDegenCards */
        ProcessDegenCards?: (DcgProto.IS_OtherCard[]|null);

        /** S_DigimonDegenerate DegType */
        DegType?: (number|null);

        /** S_DigimonDegenerate CasterCard */
        CasterCard?: (DcgProto.IS_OtherCard|null);
    }

    /** Represents a S_DigimonDegenerate. */
    class S_DigimonDegenerate implements IS_DigimonDegenerate {

        /**
         * Constructs a new S_DigimonDegenerate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DigimonDegenerate);

        /** S_DigimonDegenerate PlayerIID. */
        public PlayerIID: Long;

        /** S_DigimonDegenerate DegenerateCard. */
        public DegenerateCard?: (DcgProto.IS_OtherCard|null);

        /** S_DigimonDegenerate ProcessDegenCards. */
        public ProcessDegenCards: DcgProto.IS_OtherCard[];

        /** S_DigimonDegenerate DegType. */
        public DegType: number;

        /** S_DigimonDegenerate CasterCard. */
        public CasterCard?: (DcgProto.IS_OtherCard|null);

        /**
         * Creates a new S_DigimonDegenerate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DigimonDegenerate instance
         */
        public static create(properties?: DcgProto.IS_DigimonDegenerate): DcgProto.S_DigimonDegenerate;

        /**
         * Encodes the specified S_DigimonDegenerate message. Does not implicitly {@link DcgProto.S_DigimonDegenerate.verify|verify} messages.
         * @param m S_DigimonDegenerate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DigimonDegenerate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DigimonDegenerate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DigimonDegenerate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DigimonDegenerate;

        /**
         * Verifies a S_DigimonDegenerate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GameBattlePlayer. */
    interface IS_GameBattlePlayer {

        /** S_GameBattlePlayer PlayerIID */
        PlayerIID?: (Long|null);

        /** S_GameBattlePlayer GameBattleCards */
        GameBattleCards?: (DcgProto.IS_GameBattleCard[]|null);

        /** S_GameBattlePlayer GameHandCards */
        GameHandCards?: (DcgProto.IS_GameHandCard[]|null);

        /** S_GameBattlePlayer PlayerBuffs */
        PlayerBuffs?: (number[]|null);
    }

    /** Represents a S_GameBattlePlayer. */
    class S_GameBattlePlayer implements IS_GameBattlePlayer {

        /**
         * Constructs a new S_GameBattlePlayer.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GameBattlePlayer);

        /** S_GameBattlePlayer PlayerIID. */
        public PlayerIID: Long;

        /** S_GameBattlePlayer GameBattleCards. */
        public GameBattleCards: DcgProto.IS_GameBattleCard[];

        /** S_GameBattlePlayer GameHandCards. */
        public GameHandCards: DcgProto.IS_GameHandCard[];

        /** S_GameBattlePlayer PlayerBuffs. */
        public PlayerBuffs: number[];

        /**
         * Creates a new S_GameBattlePlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GameBattlePlayer instance
         */
        public static create(properties?: DcgProto.IS_GameBattlePlayer): DcgProto.S_GameBattlePlayer;

        /**
         * Encodes the specified S_GameBattlePlayer message. Does not implicitly {@link DcgProto.S_GameBattlePlayer.verify|verify} messages.
         * @param m S_GameBattlePlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GameBattlePlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GameBattlePlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GameBattlePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GameBattlePlayer;

        /**
         * Verifies a S_GameBattlePlayer message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GameBattleCard. */
    interface IS_GameBattleCard {

        /** S_GameBattleCard CardIID */
        CardIID?: (Long|null);

        /** S_GameBattleCard LastDP */
        LastDP?: (number|null);

        /** S_GameBattleCard GameBattleCardInfos */
        GameBattleCardInfos?: (DcgProto.IS_GameBattleCardInfo[]|null);

        /** S_GameBattleCard CanActivateEffects */
        CanActivateEffects?: (number[]|null);

        /** S_GameBattleCard EffectInfos */
        EffectInfos?: (DcgProto.IS_BattleCardEffectInfo[]|null);
    }

    /** Represents a S_GameBattleCard. */
    class S_GameBattleCard implements IS_GameBattleCard {

        /**
         * Constructs a new S_GameBattleCard.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GameBattleCard);

        /** S_GameBattleCard CardIID. */
        public CardIID: Long;

        /** S_GameBattleCard LastDP. */
        public LastDP: number;

        /** S_GameBattleCard GameBattleCardInfos. */
        public GameBattleCardInfos: DcgProto.IS_GameBattleCardInfo[];

        /** S_GameBattleCard CanActivateEffects. */
        public CanActivateEffects: number[];

        /** S_GameBattleCard EffectInfos. */
        public EffectInfos: DcgProto.IS_BattleCardEffectInfo[];

        /**
         * Creates a new S_GameBattleCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GameBattleCard instance
         */
        public static create(properties?: DcgProto.IS_GameBattleCard): DcgProto.S_GameBattleCard;

        /**
         * Encodes the specified S_GameBattleCard message. Does not implicitly {@link DcgProto.S_GameBattleCard.verify|verify} messages.
         * @param m S_GameBattleCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GameBattleCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GameBattleCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GameBattleCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GameBattleCard;

        /**
         * Verifies a S_GameBattleCard message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GameBattleCardInfo. */
    interface IS_GameBattleCardInfo {

        /** S_GameBattleCardInfo Type */
        Type?: (number|null);

        /** S_GameBattleCardInfo SubType */
        SubType?: (number|null);

        /** S_GameBattleCardInfo Data */
        Data?: (number|null);
    }

    /** Represents a S_GameBattleCardInfo. */
    class S_GameBattleCardInfo implements IS_GameBattleCardInfo {

        /**
         * Constructs a new S_GameBattleCardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GameBattleCardInfo);

        /** S_GameBattleCardInfo Type. */
        public Type: number;

        /** S_GameBattleCardInfo SubType. */
        public SubType: number;

        /** S_GameBattleCardInfo Data. */
        public Data: number;

        /**
         * Creates a new S_GameBattleCardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GameBattleCardInfo instance
         */
        public static create(properties?: DcgProto.IS_GameBattleCardInfo): DcgProto.S_GameBattleCardInfo;

        /**
         * Encodes the specified S_GameBattleCardInfo message. Does not implicitly {@link DcgProto.S_GameBattleCardInfo.verify|verify} messages.
         * @param m S_GameBattleCardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GameBattleCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GameBattleCardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GameBattleCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GameBattleCardInfo;

        /**
         * Verifies a S_GameBattleCardInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleCardEffectInfo. */
    interface IS_BattleCardEffectInfo {

        /** S_BattleCardEffectInfo CardIID */
        CardIID?: (Long|null);

        /** S_BattleCardEffectInfo EffectId */
        EffectId?: (number|null);

        /** S_BattleCardEffectInfo param */
        param?: (number|null);
    }

    /** Represents a S_BattleCardEffectInfo. */
    class S_BattleCardEffectInfo implements IS_BattleCardEffectInfo {

        /**
         * Constructs a new S_BattleCardEffectInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleCardEffectInfo);

        /** S_BattleCardEffectInfo CardIID. */
        public CardIID: Long;

        /** S_BattleCardEffectInfo EffectId. */
        public EffectId: number;

        /** S_BattleCardEffectInfo param. */
        public param: number;

        /**
         * Creates a new S_BattleCardEffectInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleCardEffectInfo instance
         */
        public static create(properties?: DcgProto.IS_BattleCardEffectInfo): DcgProto.S_BattleCardEffectInfo;

        /**
         * Encodes the specified S_BattleCardEffectInfo message. Does not implicitly {@link DcgProto.S_BattleCardEffectInfo.verify|verify} messages.
         * @param m S_BattleCardEffectInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleCardEffectInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleCardEffectInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleCardEffectInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleCardEffectInfo;

        /**
         * Verifies a S_BattleCardEffectInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GameHandCard. */
    interface IS_GameHandCard {

        /** S_GameHandCard CardIID */
        CardIID?: (Long|null);

        /** S_GameHandCard PlayCost */
        PlayCost?: (number|null);

        /** S_GameHandCard CanActivateEffects */
        CanActivateEffects?: (number[]|null);

        /** S_GameHandCard CardSpecEvo */
        CardSpecEvo?: (DcgProto.IS_GameCardSpecEvoEffect[]|null);

        /** S_GameHandCard Buffs */
        Buffs?: (number[]|null);
    }

    /** Represents a S_GameHandCard. */
    class S_GameHandCard implements IS_GameHandCard {

        /**
         * Constructs a new S_GameHandCard.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GameHandCard);

        /** S_GameHandCard CardIID. */
        public CardIID: Long;

        /** S_GameHandCard PlayCost. */
        public PlayCost: number;

        /** S_GameHandCard CanActivateEffects. */
        public CanActivateEffects: number[];

        /** S_GameHandCard CardSpecEvo. */
        public CardSpecEvo: DcgProto.IS_GameCardSpecEvoEffect[];

        /** S_GameHandCard Buffs. */
        public Buffs: number[];

        /**
         * Creates a new S_GameHandCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GameHandCard instance
         */
        public static create(properties?: DcgProto.IS_GameHandCard): DcgProto.S_GameHandCard;

        /**
         * Encodes the specified S_GameHandCard message. Does not implicitly {@link DcgProto.S_GameHandCard.verify|verify} messages.
         * @param m S_GameHandCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GameHandCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GameHandCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GameHandCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GameHandCard;

        /**
         * Verifies a S_GameHandCard message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GameCardSpecEvoEffect. */
    interface IS_GameCardSpecEvoEffect {

        /** S_GameCardSpecEvoEffect CardIID */
        CardIID?: (Long|null);

        /** S_GameCardSpecEvoEffect Cost */
        Cost?: (number|null);
    }

    /** Represents a S_GameCardSpecEvoEffect. */
    class S_GameCardSpecEvoEffect implements IS_GameCardSpecEvoEffect {

        /**
         * Constructs a new S_GameCardSpecEvoEffect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GameCardSpecEvoEffect);

        /** S_GameCardSpecEvoEffect CardIID. */
        public CardIID: Long;

        /** S_GameCardSpecEvoEffect Cost. */
        public Cost: number;

        /**
         * Creates a new S_GameCardSpecEvoEffect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GameCardSpecEvoEffect instance
         */
        public static create(properties?: DcgProto.IS_GameCardSpecEvoEffect): DcgProto.S_GameCardSpecEvoEffect;

        /**
         * Encodes the specified S_GameCardSpecEvoEffect message. Does not implicitly {@link DcgProto.S_GameCardSpecEvoEffect.verify|verify} messages.
         * @param m S_GameCardSpecEvoEffect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GameCardSpecEvoEffect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GameCardSpecEvoEffect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GameCardSpecEvoEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GameCardSpecEvoEffect;

        /**
         * Verifies a S_GameCardSpecEvoEffect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_EffectActivate. */
    interface IS_EffectActivate {

        /** S_EffectActivate CardIID */
        CardIID?: (Long|null);

        /** S_EffectActivate CfgId */
        CfgId?: (number|null);

        /** S_EffectActivate EffectCfgId */
        EffectCfgId?: (number|null);

        /** S_EffectActivate AskActivate */
        AskActivate?: (boolean|null);

        /** S_EffectActivate EffectIndex */
        EffectIndex?: (number|null);

        /** S_EffectActivate IsCon */
        IsCon?: (boolean|null);

        /** S_EffectActivate IsUseful */
        IsUseful?: (boolean|null);
    }

    /** Represents a S_EffectActivate. */
    class S_EffectActivate implements IS_EffectActivate {

        /**
         * Constructs a new S_EffectActivate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_EffectActivate);

        /** S_EffectActivate CardIID. */
        public CardIID: Long;

        /** S_EffectActivate CfgId. */
        public CfgId: number;

        /** S_EffectActivate EffectCfgId. */
        public EffectCfgId: number;

        /** S_EffectActivate AskActivate. */
        public AskActivate: boolean;

        /** S_EffectActivate EffectIndex. */
        public EffectIndex: number;

        /** S_EffectActivate IsCon. */
        public IsCon: boolean;

        /** S_EffectActivate IsUseful. */
        public IsUseful: boolean;

        /**
         * Creates a new S_EffectActivate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_EffectActivate instance
         */
        public static create(properties?: DcgProto.IS_EffectActivate): DcgProto.S_EffectActivate;

        /**
         * Encodes the specified S_EffectActivate message. Does not implicitly {@link DcgProto.S_EffectActivate.verify|verify} messages.
         * @param m S_EffectActivate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_EffectActivate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_EffectActivate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_EffectActivate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_EffectActivate;

        /**
         * Verifies a S_EffectActivate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerBattleDetail. */
    interface IS_PlayerBattleDetail {

        /** S_PlayerBattleDetail PlayerIID */
        PlayerIID?: (Long|null);

        /** S_PlayerBattleDetail AreaDefenseCount */
        AreaDefenseCount?: (number|null);

        /** S_PlayerBattleDetail AreaDigitamaCount */
        AreaDigitamaCount?: (number|null);

        /** S_PlayerBattleDetail AreaDeckCount */
        AreaDeckCount?: (number|null);

        /** S_PlayerBattleDetail PlayerRemainingTime */
        PlayerRemainingTime?: (number|null);
    }

    /** Represents a S_PlayerBattleDetail. */
    class S_PlayerBattleDetail implements IS_PlayerBattleDetail {

        /**
         * Constructs a new S_PlayerBattleDetail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerBattleDetail);

        /** S_PlayerBattleDetail PlayerIID. */
        public PlayerIID: Long;

        /** S_PlayerBattleDetail AreaDefenseCount. */
        public AreaDefenseCount: number;

        /** S_PlayerBattleDetail AreaDigitamaCount. */
        public AreaDigitamaCount: number;

        /** S_PlayerBattleDetail AreaDeckCount. */
        public AreaDeckCount: number;

        /** S_PlayerBattleDetail PlayerRemainingTime. */
        public PlayerRemainingTime: number;

        /**
         * Creates a new S_PlayerBattleDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerBattleDetail instance
         */
        public static create(properties?: DcgProto.IS_PlayerBattleDetail): DcgProto.S_PlayerBattleDetail;

        /**
         * Encodes the specified S_PlayerBattleDetail message. Does not implicitly {@link DcgProto.S_PlayerBattleDetail.verify|verify} messages.
         * @param m S_PlayerBattleDetail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerBattleDetail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerBattleDetail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerBattleDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerBattleDetail;

        /**
         * Verifies a S_PlayerBattleDetail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_SetBattlePhase. */
    interface IS_SetBattlePhase {

        /** S_SetBattlePhase PlayerIID */
        PlayerIID?: (Long|null);

        /** S_SetBattlePhase CurRound */
        CurRound?: (number|null);

        /** S_SetBattlePhase BattlePhase */
        BattlePhase?: (DcgProto.E_BATTLE_PHASE|null);
    }

    /** Represents a S_SetBattlePhase. */
    class S_SetBattlePhase implements IS_SetBattlePhase {

        /**
         * Constructs a new S_SetBattlePhase.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_SetBattlePhase);

        /** S_SetBattlePhase PlayerIID. */
        public PlayerIID: Long;

        /** S_SetBattlePhase CurRound. */
        public CurRound: number;

        /** S_SetBattlePhase BattlePhase. */
        public BattlePhase: DcgProto.E_BATTLE_PHASE;

        /**
         * Creates a new S_SetBattlePhase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_SetBattlePhase instance
         */
        public static create(properties?: DcgProto.IS_SetBattlePhase): DcgProto.S_SetBattlePhase;

        /**
         * Encodes the specified S_SetBattlePhase message. Does not implicitly {@link DcgProto.S_SetBattlePhase.verify|verify} messages.
         * @param m S_SetBattlePhase message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_SetBattlePhase, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SetBattlePhase message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_SetBattlePhase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_SetBattlePhase;

        /**
         * Verifies a S_SetBattlePhase message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DigimonSetCost. */
    interface IS_DigimonSetCost {

        /** S_DigimonSetCost Cost */
        Cost?: (number|null);
    }

    /** Represents a S_DigimonSetCost. */
    class S_DigimonSetCost implements IS_DigimonSetCost {

        /**
         * Constructs a new S_DigimonSetCost.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DigimonSetCost);

        /** S_DigimonSetCost Cost. */
        public Cost: number;

        /**
         * Creates a new S_DigimonSetCost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DigimonSetCost instance
         */
        public static create(properties?: DcgProto.IS_DigimonSetCost): DcgProto.S_DigimonSetCost;

        /**
         * Encodes the specified S_DigimonSetCost message. Does not implicitly {@link DcgProto.S_DigimonSetCost.verify|verify} messages.
         * @param m S_DigimonSetCost message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DigimonSetCost, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DigimonSetCost message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DigimonSetCost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DigimonSetCost;

        /**
         * Verifies a S_DigimonSetCost message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GameOver. */
    interface IS_GameOver {

        /** S_GameOver PlayerIID */
        PlayerIID?: (Long|null);

        /** S_GameOver Reason */
        Reason?: (number|null);

        /** S_GameOver RoomPanel */
        RoomPanel?: (DcgProto.IS_RoomPanel|null);
    }

    /** Represents a S_GameOver. */
    class S_GameOver implements IS_GameOver {

        /**
         * Constructs a new S_GameOver.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GameOver);

        /** S_GameOver PlayerIID. */
        public PlayerIID: Long;

        /** S_GameOver Reason. */
        public Reason: number;

        /** S_GameOver RoomPanel. */
        public RoomPanel?: (DcgProto.IS_RoomPanel|null);

        /**
         * Creates a new S_GameOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GameOver instance
         */
        public static create(properties?: DcgProto.IS_GameOver): DcgProto.S_GameOver;

        /**
         * Encodes the specified S_GameOver message. Does not implicitly {@link DcgProto.S_GameOver.verify|verify} messages.
         * @param m S_GameOver message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GameOver, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GameOver message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GameOver;

        /**
         * Verifies a S_GameOver message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MoveCardMessage. */
    interface IS_MoveCardMessage {

        /** S_MoveCardMessage PlayerIID */
        PlayerIID?: (Long|null);

        /** S_MoveCardMessage From */
        From?: (DcgProto.E_AREA_TYPE|null);

        /** S_MoveCardMessage To */
        To?: (DcgProto.E_AREA_TYPE|null);

        /** S_MoveCardMessage CardData */
        CardData?: (DcgProto.IS_OtherCard|null);

        /** S_MoveCardMessage CardDetail */
        CardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_MoveCardMessage Reason */
        Reason?: (number|null);

        /** S_MoveCardMessage CardIndex */
        CardIndex?: (number|null);
    }

    /** Represents a S_MoveCardMessage. */
    class S_MoveCardMessage implements IS_MoveCardMessage {

        /**
         * Constructs a new S_MoveCardMessage.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MoveCardMessage);

        /** S_MoveCardMessage PlayerIID. */
        public PlayerIID: Long;

        /** S_MoveCardMessage From. */
        public From: DcgProto.E_AREA_TYPE;

        /** S_MoveCardMessage To. */
        public To: DcgProto.E_AREA_TYPE;

        /** S_MoveCardMessage CardData. */
        public CardData?: (DcgProto.IS_OtherCard|null);

        /** S_MoveCardMessage CardDetail. */
        public CardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_MoveCardMessage Reason. */
        public Reason: number;

        /** S_MoveCardMessage CardIndex. */
        public CardIndex: number;

        /**
         * Creates a new S_MoveCardMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MoveCardMessage instance
         */
        public static create(properties?: DcgProto.IS_MoveCardMessage): DcgProto.S_MoveCardMessage;

        /**
         * Encodes the specified S_MoveCardMessage message. Does not implicitly {@link DcgProto.S_MoveCardMessage.verify|verify} messages.
         * @param m S_MoveCardMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MoveCardMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MoveCardMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MoveCardMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MoveCardMessage;

        /**
         * Verifies a S_MoveCardMessage message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_EvoDigimon. */
    interface IS_EvoDigimon {

        /** S_EvoDigimon PlayerIID */
        PlayerIID?: (Long|null);

        /** S_EvoDigimon EvoCardData */
        EvoCardData?: (DcgProto.IS_OtherCard|null);

        /** S_EvoDigimon EvoCardDetail */
        EvoCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_EvoDigimon OriginCardData */
        OriginCardData?: (DcgProto.IS_OtherCard|null);

        /** S_EvoDigimon OriginCardDetail */
        OriginCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_EvoDigimon BottomCardData */
        BottomCardData?: (DcgProto.IS_OtherCard|null);

        /** S_EvoDigimon BottomCardDetail */
        BottomCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_EvoDigimon EvolutionType */
        EvolutionType?: (DcgProto.E_EVOLUTION_TYPE|null);
    }

    /** Represents a S_EvoDigimon. */
    class S_EvoDigimon implements IS_EvoDigimon {

        /**
         * Constructs a new S_EvoDigimon.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_EvoDigimon);

        /** S_EvoDigimon PlayerIID. */
        public PlayerIID: Long;

        /** S_EvoDigimon EvoCardData. */
        public EvoCardData?: (DcgProto.IS_OtherCard|null);

        /** S_EvoDigimon EvoCardDetail. */
        public EvoCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_EvoDigimon OriginCardData. */
        public OriginCardData?: (DcgProto.IS_OtherCard|null);

        /** S_EvoDigimon OriginCardDetail. */
        public OriginCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_EvoDigimon BottomCardData. */
        public BottomCardData?: (DcgProto.IS_OtherCard|null);

        /** S_EvoDigimon BottomCardDetail. */
        public BottomCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_EvoDigimon EvolutionType. */
        public EvolutionType: DcgProto.E_EVOLUTION_TYPE;

        /**
         * Creates a new S_EvoDigimon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_EvoDigimon instance
         */
        public static create(properties?: DcgProto.IS_EvoDigimon): DcgProto.S_EvoDigimon;

        /**
         * Encodes the specified S_EvoDigimon message. Does not implicitly {@link DcgProto.S_EvoDigimon.verify|verify} messages.
         * @param m S_EvoDigimon message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_EvoDigimon, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_EvoDigimon message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_EvoDigimon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_EvoDigimon;

        /**
         * Verifies a S_EvoDigimon message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_UpdateCardDetails. */
    interface IS_UpdateCardDetails {

        /** S_UpdateCardDetails PlayerIID */
        PlayerIID?: (Long|null);

        /** S_UpdateCardDetails Card */
        Card?: (DcgProto.IS_OtherCard|null);

        /** S_UpdateCardDetails Detail */
        Detail?: (DcgProto.IS_OtherCardDetail|null);
    }

    /** Represents a S_UpdateCardDetails. */
    class S_UpdateCardDetails implements IS_UpdateCardDetails {

        /**
         * Constructs a new S_UpdateCardDetails.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_UpdateCardDetails);

        /** S_UpdateCardDetails PlayerIID. */
        public PlayerIID: Long;

        /** S_UpdateCardDetails Card. */
        public Card?: (DcgProto.IS_OtherCard|null);

        /** S_UpdateCardDetails Detail. */
        public Detail?: (DcgProto.IS_OtherCardDetail|null);

        /**
         * Creates a new S_UpdateCardDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_UpdateCardDetails instance
         */
        public static create(properties?: DcgProto.IS_UpdateCardDetails): DcgProto.S_UpdateCardDetails;

        /**
         * Encodes the specified S_UpdateCardDetails message. Does not implicitly {@link DcgProto.S_UpdateCardDetails.verify|verify} messages.
         * @param m S_UpdateCardDetails message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_UpdateCardDetails, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_UpdateCardDetails message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_UpdateCardDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_UpdateCardDetails;

        /**
         * Verifies a S_UpdateCardDetails message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerChoose. */
    interface IS_PlayerChoose {

        /** S_PlayerChoose PlayerIID */
        PlayerIID?: (Long|null);

        /** S_PlayerChoose EffectCard */
        EffectCard?: (DcgProto.IS_OtherCard|null);

        /** S_PlayerChoose Compare */
        Compare?: (DcgProto.E_COMPARE|null);

        /** S_PlayerChoose ChooseNums */
        ChooseNums?: (number|null);

        /** S_PlayerChoose CheckCards */
        CheckCards?: (DcgProto.IS_OtherCard[]|null);

        /** S_PlayerChoose CanCancel */
        CanCancel?: (boolean|null);

        /** S_PlayerChoose EffectOriginInfo */
        EffectOriginInfo?: (DcgProto.IS_EffectOriginInfo|null);

        /** S_PlayerChoose RequestId */
        RequestId?: (number|null);

        /** S_PlayerChoose CompareExtend */
        CompareExtend?: (number|null);
    }

    /** Represents a S_PlayerChoose. */
    class S_PlayerChoose implements IS_PlayerChoose {

        /**
         * Constructs a new S_PlayerChoose.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerChoose);

        /** S_PlayerChoose PlayerIID. */
        public PlayerIID: Long;

        /** S_PlayerChoose EffectCard. */
        public EffectCard?: (DcgProto.IS_OtherCard|null);

        /** S_PlayerChoose Compare. */
        public Compare: DcgProto.E_COMPARE;

        /** S_PlayerChoose ChooseNums. */
        public ChooseNums: number;

        /** S_PlayerChoose CheckCards. */
        public CheckCards: DcgProto.IS_OtherCard[];

        /** S_PlayerChoose CanCancel. */
        public CanCancel: boolean;

        /** S_PlayerChoose EffectOriginInfo. */
        public EffectOriginInfo?: (DcgProto.IS_EffectOriginInfo|null);

        /** S_PlayerChoose RequestId. */
        public RequestId: number;

        /** S_PlayerChoose CompareExtend. */
        public CompareExtend: number;

        /**
         * Creates a new S_PlayerChoose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerChoose instance
         */
        public static create(properties?: DcgProto.IS_PlayerChoose): DcgProto.S_PlayerChoose;

        /**
         * Encodes the specified S_PlayerChoose message. Does not implicitly {@link DcgProto.S_PlayerChoose.verify|verify} messages.
         * @param m S_PlayerChoose message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerChoose, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerChoose message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerChoose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerChoose;

        /**
         * Verifies a S_PlayerChoose message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_EffectOriginInfo. */
    interface IS_EffectOriginInfo {

        /** S_EffectOriginInfo CardIID */
        CardIID?: (Long|null);

        /** S_EffectOriginInfo EffectId */
        EffectId?: (number|null);

        /** S_EffectOriginInfo Index */
        Index?: (number|null);
    }

    /** Represents a S_EffectOriginInfo. */
    class S_EffectOriginInfo implements IS_EffectOriginInfo {

        /**
         * Constructs a new S_EffectOriginInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_EffectOriginInfo);

        /** S_EffectOriginInfo CardIID. */
        public CardIID: Long;

        /** S_EffectOriginInfo EffectId. */
        public EffectId: number;

        /** S_EffectOriginInfo Index. */
        public Index: number;

        /**
         * Creates a new S_EffectOriginInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_EffectOriginInfo instance
         */
        public static create(properties?: DcgProto.IS_EffectOriginInfo): DcgProto.S_EffectOriginInfo;

        /**
         * Encodes the specified S_EffectOriginInfo message. Does not implicitly {@link DcgProto.S_EffectOriginInfo.verify|verify} messages.
         * @param m S_EffectOriginInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_EffectOriginInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_EffectOriginInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_EffectOriginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_EffectOriginInfo;

        /**
         * Verifies a S_EffectOriginInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerExcavated. */
    interface IS_PlayerExcavated {

        /** S_PlayerExcavated PlayerIID */
        PlayerIID?: (Long|null);

        /** S_PlayerExcavated EffectCard */
        EffectCard?: (DcgProto.IS_OtherCard|null);

        /** S_PlayerExcavated type */
        type?: (DcgProto.E_SHOW_TO_PLAYER_TYPE|null);

        /** S_PlayerExcavated CheckCards */
        CheckCards?: (DcgProto.IS_OtherCard[]|null);

        /** S_PlayerExcavated From */
        From?: (DcgProto.E_AREA_TYPE|null);
    }

    /** Represents a S_PlayerExcavated. */
    class S_PlayerExcavated implements IS_PlayerExcavated {

        /**
         * Constructs a new S_PlayerExcavated.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerExcavated);

        /** S_PlayerExcavated PlayerIID. */
        public PlayerIID: Long;

        /** S_PlayerExcavated EffectCard. */
        public EffectCard?: (DcgProto.IS_OtherCard|null);

        /** S_PlayerExcavated type. */
        public type: DcgProto.E_SHOW_TO_PLAYER_TYPE;

        /** S_PlayerExcavated CheckCards. */
        public CheckCards: DcgProto.IS_OtherCard[];

        /** S_PlayerExcavated From. */
        public From: DcgProto.E_AREA_TYPE;

        /**
         * Creates a new S_PlayerExcavated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerExcavated instance
         */
        public static create(properties?: DcgProto.IS_PlayerExcavated): DcgProto.S_PlayerExcavated;

        /**
         * Encodes the specified S_PlayerExcavated message. Does not implicitly {@link DcgProto.S_PlayerExcavated.verify|verify} messages.
         * @param m S_PlayerExcavated message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerExcavated, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerExcavated message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerExcavated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerExcavated;

        /**
         * Verifies a S_PlayerExcavated message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerSceneEvent. */
    interface IS_PlayerSceneEvent {

        /** S_PlayerSceneEvent SCENE_EVENT_ID */
        SCENE_EVENT_ID?: (number|null);
    }

    /** Represents a S_PlayerSceneEvent. */
    class S_PlayerSceneEvent implements IS_PlayerSceneEvent {

        /**
         * Constructs a new S_PlayerSceneEvent.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerSceneEvent);

        /** S_PlayerSceneEvent SCENE_EVENT_ID. */
        public SCENE_EVENT_ID: number;

        /**
         * Creates a new S_PlayerSceneEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerSceneEvent instance
         */
        public static create(properties?: DcgProto.IS_PlayerSceneEvent): DcgProto.S_PlayerSceneEvent;

        /**
         * Encodes the specified S_PlayerSceneEvent message. Does not implicitly {@link DcgProto.S_PlayerSceneEvent.verify|verify} messages.
         * @param m S_PlayerSceneEvent message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerSceneEvent, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerSceneEvent message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerSceneEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerSceneEvent;

        /**
         * Verifies a S_PlayerSceneEvent message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerDefenseSelect. */
    interface IS_PlayerDefenseSelect {

        /** S_PlayerDefenseSelect PlayerIID */
        PlayerIID?: (Long|null);

        /** S_PlayerDefenseSelect AtkCard */
        AtkCard?: (DcgProto.IS_OtherCard|null);

        /** S_PlayerDefenseSelect AtkType */
        AtkType?: (DcgProto.E_ATTACK_TYPE|null);

        /** S_PlayerDefenseSelect ChooseDefenseCards */
        ChooseDefenseCards?: (DcgProto.IS_OtherCard[]|null);

        /** S_PlayerDefenseSelect RequestId */
        RequestId?: (number|null);
    }

    /** Represents a S_PlayerDefenseSelect. */
    class S_PlayerDefenseSelect implements IS_PlayerDefenseSelect {

        /**
         * Constructs a new S_PlayerDefenseSelect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerDefenseSelect);

        /** S_PlayerDefenseSelect PlayerIID. */
        public PlayerIID: Long;

        /** S_PlayerDefenseSelect AtkCard. */
        public AtkCard?: (DcgProto.IS_OtherCard|null);

        /** S_PlayerDefenseSelect AtkType. */
        public AtkType: DcgProto.E_ATTACK_TYPE;

        /** S_PlayerDefenseSelect ChooseDefenseCards. */
        public ChooseDefenseCards: DcgProto.IS_OtherCard[];

        /** S_PlayerDefenseSelect RequestId. */
        public RequestId: number;

        /**
         * Creates a new S_PlayerDefenseSelect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerDefenseSelect instance
         */
        public static create(properties?: DcgProto.IS_PlayerDefenseSelect): DcgProto.S_PlayerDefenseSelect;

        /**
         * Encodes the specified S_PlayerDefenseSelect message. Does not implicitly {@link DcgProto.S_PlayerDefenseSelect.verify|verify} messages.
         * @param m S_PlayerDefenseSelect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerDefenseSelect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerDefenseSelect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerDefenseSelect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerDefenseSelect;

        /**
         * Verifies a S_PlayerDefenseSelect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerSelectOptions. */
    interface IS_PlayerSelectOptions {

        /** S_PlayerSelectOptions PlayerIID */
        PlayerIID?: (Long|null);

        /** S_PlayerSelectOptions Num */
        Num?: (number|null);

        /** S_PlayerSelectOptions EffectOriginInfo */
        EffectOriginInfo?: (DcgProto.IS_EffectOriginInfo|null);

        /** S_PlayerSelectOptions RequestId */
        RequestId?: (number|null);
    }

    /** Represents a S_PlayerSelectOptions. */
    class S_PlayerSelectOptions implements IS_PlayerSelectOptions {

        /**
         * Constructs a new S_PlayerSelectOptions.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerSelectOptions);

        /** S_PlayerSelectOptions PlayerIID. */
        public PlayerIID: Long;

        /** S_PlayerSelectOptions Num. */
        public Num: number;

        /** S_PlayerSelectOptions EffectOriginInfo. */
        public EffectOriginInfo?: (DcgProto.IS_EffectOriginInfo|null);

        /** S_PlayerSelectOptions RequestId. */
        public RequestId: number;

        /**
         * Creates a new S_PlayerSelectOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerSelectOptions instance
         */
        public static create(properties?: DcgProto.IS_PlayerSelectOptions): DcgProto.S_PlayerSelectOptions;

        /**
         * Encodes the specified S_PlayerSelectOptions message. Does not implicitly {@link DcgProto.S_PlayerSelectOptions.verify|verify} messages.
         * @param m S_PlayerSelectOptions message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerSelectOptions, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerSelectOptions message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerSelectOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerSelectOptions;

        /**
         * Verifies a S_PlayerSelectOptions message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_OtherCard. */
    interface IS_OtherCard {

        /** S_OtherCard CardIID */
        CardIID?: (Long|null);

        /** S_OtherCard CfgId */
        CfgId?: (number|null);

        /** S_OtherCard CardBattleState */
        CardBattleState?: (DcgProto.E_CARD_BATTLE_STATE|null);

        /** S_OtherCard CardSummonRound */
        CardSummonRound?: (number|null);

        /** S_OtherCard EvoOriginPrevCardIID */
        EvoOriginPrevCardIID?: (Long|null);

        /** S_OtherCard PlayerIID */
        PlayerIID?: (Long|null);
    }

    /** Represents a S_OtherCard. */
    class S_OtherCard implements IS_OtherCard {

        /**
         * Constructs a new S_OtherCard.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_OtherCard);

        /** S_OtherCard CardIID. */
        public CardIID: Long;

        /** S_OtherCard CfgId. */
        public CfgId: number;

        /** S_OtherCard CardBattleState. */
        public CardBattleState: DcgProto.E_CARD_BATTLE_STATE;

        /** S_OtherCard CardSummonRound. */
        public CardSummonRound: number;

        /** S_OtherCard EvoOriginPrevCardIID. */
        public EvoOriginPrevCardIID: Long;

        /** S_OtherCard PlayerIID. */
        public PlayerIID: Long;

        /**
         * Creates a new S_OtherCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_OtherCard instance
         */
        public static create(properties?: DcgProto.IS_OtherCard): DcgProto.S_OtherCard;

        /**
         * Encodes the specified S_OtherCard message. Does not implicitly {@link DcgProto.S_OtherCard.verify|verify} messages.
         * @param m S_OtherCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_OtherCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_OtherCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_OtherCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_OtherCard;

        /**
         * Verifies a S_OtherCard message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_OtherCardDetail. */
    interface IS_OtherCardDetail {

        /** S_OtherCardDetail AreaType */
        AreaType?: (DcgProto.E_AREA_TYPE|null);

        /** S_OtherCardDetail LastDP */
        LastDP?: (number|null);
    }

    /** Represents a S_OtherCardDetail. */
    class S_OtherCardDetail implements IS_OtherCardDetail {

        /**
         * Constructs a new S_OtherCardDetail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_OtherCardDetail);

        /** S_OtherCardDetail AreaType. */
        public AreaType: DcgProto.E_AREA_TYPE;

        /** S_OtherCardDetail LastDP. */
        public LastDP: number;

        /**
         * Creates a new S_OtherCardDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_OtherCardDetail instance
         */
        public static create(properties?: DcgProto.IS_OtherCardDetail): DcgProto.S_OtherCardDetail;

        /**
         * Encodes the specified S_OtherCardDetail message. Does not implicitly {@link DcgProto.S_OtherCardDetail.verify|verify} messages.
         * @param m S_OtherCardDetail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_OtherCardDetail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_OtherCardDetail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_OtherCardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_OtherCardDetail;

        /**
         * Verifies a S_OtherCardDetail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReconnectData. */
    interface IS_ReconnectData {

        /** S_ReconnectData CurRound */
        CurRound?: (number|null);

        /** S_ReconnectData CurCost */
        CurCost?: (number|null);

        /** S_ReconnectData CurTurnPlayerIID */
        CurTurnPlayerIID?: (Long|null);

        /** S_ReconnectData BattlePhase */
        BattlePhase?: (DcgProto.E_BATTLE_PHASE|null);

        /** S_ReconnectData PlayerA */
        PlayerA?: (DcgProto.IS_ReconnectPlayer|null);

        /** S_ReconnectData PlayerB */
        PlayerB?: (DcgProto.IS_ReconnectPlayer|null);

        /** S_ReconnectData RoomFight */
        RoomFight?: (DcgProto.IS_RoomFight|null);

        /** S_ReconnectData StartChangeCardState */
        StartChangeCardState?: (number|null);

        /** S_ReconnectData RoomBrowse */
        RoomBrowse?: (DcgProto.IS_PlayerExcavated|null);

        /** S_ReconnectData CurActionPlayerId */
        CurActionPlayerId?: (Long|null);

        /** S_ReconnectData ClientShowList */
        ClientShowList?: (DcgProto.IS_ClientShow[]|null);

        /** S_ReconnectData TimeOutEndTime */
        TimeOutEndTime?: (number|null);

        /** S_ReconnectData globalBuff */
        globalBuff?: (DcgProto.IS_ReconnectGlobalBuff[]|null);

        /** S_ReconnectData IsPause */
        IsPause?: (boolean|null);
    }

    /** Represents a S_ReconnectData. */
    class S_ReconnectData implements IS_ReconnectData {

        /**
         * Constructs a new S_ReconnectData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReconnectData);

        /** S_ReconnectData CurRound. */
        public CurRound: number;

        /** S_ReconnectData CurCost. */
        public CurCost: number;

        /** S_ReconnectData CurTurnPlayerIID. */
        public CurTurnPlayerIID: Long;

        /** S_ReconnectData BattlePhase. */
        public BattlePhase: DcgProto.E_BATTLE_PHASE;

        /** S_ReconnectData PlayerA. */
        public PlayerA?: (DcgProto.IS_ReconnectPlayer|null);

        /** S_ReconnectData PlayerB. */
        public PlayerB?: (DcgProto.IS_ReconnectPlayer|null);

        /** S_ReconnectData RoomFight. */
        public RoomFight?: (DcgProto.IS_RoomFight|null);

        /** S_ReconnectData StartChangeCardState. */
        public StartChangeCardState: number;

        /** S_ReconnectData RoomBrowse. */
        public RoomBrowse?: (DcgProto.IS_PlayerExcavated|null);

        /** S_ReconnectData CurActionPlayerId. */
        public CurActionPlayerId: Long;

        /** S_ReconnectData ClientShowList. */
        public ClientShowList: DcgProto.IS_ClientShow[];

        /** S_ReconnectData TimeOutEndTime. */
        public TimeOutEndTime: number;

        /** S_ReconnectData globalBuff. */
        public globalBuff: DcgProto.IS_ReconnectGlobalBuff[];

        /** S_ReconnectData IsPause. */
        public IsPause: boolean;

        /**
         * Creates a new S_ReconnectData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReconnectData instance
         */
        public static create(properties?: DcgProto.IS_ReconnectData): DcgProto.S_ReconnectData;

        /**
         * Encodes the specified S_ReconnectData message. Does not implicitly {@link DcgProto.S_ReconnectData.verify|verify} messages.
         * @param m S_ReconnectData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReconnectData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReconnectData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReconnectData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReconnectData;

        /**
         * Verifies a S_ReconnectData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReconnectCard. */
    interface IS_ReconnectCard {

        /** S_ReconnectCard OtherCard */
        OtherCard?: (DcgProto.IS_OtherCard|null);

        /** S_ReconnectCard OtherCardDetail */
        OtherCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_ReconnectCard LastBattleInfo */
        LastBattleInfo?: (DcgProto.IS_GameBattleCard|null);

        /** S_ReconnectCard LastHandInfo */
        LastHandInfo?: (DcgProto.IS_GameHandCard|null);
    }

    /** Represents a S_ReconnectCard. */
    class S_ReconnectCard implements IS_ReconnectCard {

        /**
         * Constructs a new S_ReconnectCard.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReconnectCard);

        /** S_ReconnectCard OtherCard. */
        public OtherCard?: (DcgProto.IS_OtherCard|null);

        /** S_ReconnectCard OtherCardDetail. */
        public OtherCardDetail?: (DcgProto.IS_OtherCardDetail|null);

        /** S_ReconnectCard LastBattleInfo. */
        public LastBattleInfo?: (DcgProto.IS_GameBattleCard|null);

        /** S_ReconnectCard LastHandInfo. */
        public LastHandInfo?: (DcgProto.IS_GameHandCard|null);

        /**
         * Creates a new S_ReconnectCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReconnectCard instance
         */
        public static create(properties?: DcgProto.IS_ReconnectCard): DcgProto.S_ReconnectCard;

        /**
         * Encodes the specified S_ReconnectCard message. Does not implicitly {@link DcgProto.S_ReconnectCard.verify|verify} messages.
         * @param m S_ReconnectCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReconnectCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReconnectCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReconnectCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReconnectCard;

        /**
         * Verifies a S_ReconnectCard message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReconnectPlayer. */
    interface IS_ReconnectPlayer {

        /** S_ReconnectPlayer AreaDeck */
        AreaDeck?: (number|null);

        /** S_ReconnectPlayer AreaDefense */
        AreaDefense?: (number|null);

        /** S_ReconnectPlayer AreaDigitama */
        AreaDigitama?: (number|null);

        /** S_ReconnectPlayer AreaDigitamaHatch */
        AreaDigitamaHatch?: (DcgProto.IS_ReconnectCard|null);

        /** S_ReconnectPlayer AreaGraveyard */
        AreaGraveyard?: (DcgProto.IS_ReconnectCard[]|null);

        /** S_ReconnectPlayer AreaHand */
        AreaHand?: (DcgProto.IS_ReconnectCard[]|null);

        /** S_ReconnectPlayer AreaInBattle */
        AreaInBattle?: (DcgProto.IS_ReconnectCard[]|null);

        /** S_ReconnectPlayer AreaEvo */
        AreaEvo?: (DcgProto.IS_ReconnectCard[]|null);

        /** S_ReconnectPlayer AreaWait */
        AreaWait?: (DcgProto.IS_ReconnectCard[]|null);

        /** S_ReconnectPlayer PlayerIID */
        PlayerIID?: (Long|null);

        /** S_ReconnectPlayer AreaBrowse */
        AreaBrowse?: (DcgProto.IS_ReconnectCard[]|null);

        /** S_ReconnectPlayer AreaWaitBefore */
        AreaWaitBefore?: (DcgProto.E_AREA_TYPE|null);

        /** S_ReconnectPlayer AreaBrowseBefore */
        AreaBrowseBefore?: (DcgProto.E_AREA_TYPE|null);

        /** S_ReconnectPlayer RemainingTime */
        RemainingTime?: (number|null);
    }

    /** Represents a S_ReconnectPlayer. */
    class S_ReconnectPlayer implements IS_ReconnectPlayer {

        /**
         * Constructs a new S_ReconnectPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReconnectPlayer);

        /** S_ReconnectPlayer AreaDeck. */
        public AreaDeck: number;

        /** S_ReconnectPlayer AreaDefense. */
        public AreaDefense: number;

        /** S_ReconnectPlayer AreaDigitama. */
        public AreaDigitama: number;

        /** S_ReconnectPlayer AreaDigitamaHatch. */
        public AreaDigitamaHatch?: (DcgProto.IS_ReconnectCard|null);

        /** S_ReconnectPlayer AreaGraveyard. */
        public AreaGraveyard: DcgProto.IS_ReconnectCard[];

        /** S_ReconnectPlayer AreaHand. */
        public AreaHand: DcgProto.IS_ReconnectCard[];

        /** S_ReconnectPlayer AreaInBattle. */
        public AreaInBattle: DcgProto.IS_ReconnectCard[];

        /** S_ReconnectPlayer AreaEvo. */
        public AreaEvo: DcgProto.IS_ReconnectCard[];

        /** S_ReconnectPlayer AreaWait. */
        public AreaWait: DcgProto.IS_ReconnectCard[];

        /** S_ReconnectPlayer PlayerIID. */
        public PlayerIID: Long;

        /** S_ReconnectPlayer AreaBrowse. */
        public AreaBrowse: DcgProto.IS_ReconnectCard[];

        /** S_ReconnectPlayer AreaWaitBefore. */
        public AreaWaitBefore: DcgProto.E_AREA_TYPE;

        /** S_ReconnectPlayer AreaBrowseBefore. */
        public AreaBrowseBefore: DcgProto.E_AREA_TYPE;

        /** S_ReconnectPlayer RemainingTime. */
        public RemainingTime: number;

        /**
         * Creates a new S_ReconnectPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReconnectPlayer instance
         */
        public static create(properties?: DcgProto.IS_ReconnectPlayer): DcgProto.S_ReconnectPlayer;

        /**
         * Encodes the specified S_ReconnectPlayer message. Does not implicitly {@link DcgProto.S_ReconnectPlayer.verify|verify} messages.
         * @param m S_ReconnectPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReconnectPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReconnectPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReconnectPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReconnectPlayer;

        /**
         * Verifies a S_ReconnectPlayer message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReconnectGlobalBuff. */
    interface IS_ReconnectGlobalBuff {

        /** S_ReconnectGlobalBuff PlayerIID */
        PlayerIID?: (Long|null);

        /** S_ReconnectGlobalBuff CardIID */
        CardIID?: (Long|null);

        /** S_ReconnectGlobalBuff EffectId */
        EffectId?: (number|null);
    }

    /** Represents a S_ReconnectGlobalBuff. */
    class S_ReconnectGlobalBuff implements IS_ReconnectGlobalBuff {

        /**
         * Constructs a new S_ReconnectGlobalBuff.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReconnectGlobalBuff);

        /** S_ReconnectGlobalBuff PlayerIID. */
        public PlayerIID: Long;

        /** S_ReconnectGlobalBuff CardIID. */
        public CardIID: Long;

        /** S_ReconnectGlobalBuff EffectId. */
        public EffectId: number;

        /**
         * Creates a new S_ReconnectGlobalBuff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReconnectGlobalBuff instance
         */
        public static create(properties?: DcgProto.IS_ReconnectGlobalBuff): DcgProto.S_ReconnectGlobalBuff;

        /**
         * Encodes the specified S_ReconnectGlobalBuff message. Does not implicitly {@link DcgProto.S_ReconnectGlobalBuff.verify|verify} messages.
         * @param m S_ReconnectGlobalBuff message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReconnectGlobalBuff, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReconnectGlobalBuff message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReconnectGlobalBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReconnectGlobalBuff;

        /**
         * Verifies a S_ReconnectGlobalBuff message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleResult. */
    interface IS_BattleResult {

        /** S_BattleResult PlayerResult */
        PlayerResult?: (DcgProto.IS_PlayerResult[]|null);

        /** S_BattleResult TotalRound */
        TotalRound?: (number|null);

        /** S_BattleResult EndTime */
        EndTime?: (number|null);
    }

    /** Represents a S_BattleResult. */
    class S_BattleResult implements IS_BattleResult {

        /**
         * Constructs a new S_BattleResult.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleResult);

        /** S_BattleResult PlayerResult. */
        public PlayerResult: DcgProto.IS_PlayerResult[];

        /** S_BattleResult TotalRound. */
        public TotalRound: number;

        /** S_BattleResult EndTime. */
        public EndTime: number;

        /**
         * Creates a new S_BattleResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleResult instance
         */
        public static create(properties?: DcgProto.IS_BattleResult): DcgProto.S_BattleResult;

        /**
         * Encodes the specified S_BattleResult message. Does not implicitly {@link DcgProto.S_BattleResult.verify|verify} messages.
         * @param m S_BattleResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleResult;

        /**
         * Verifies a S_BattleResult message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PlayerResult. */
    interface IS_PlayerResult {

        /** S_PlayerResult FightResult */
        FightResult?: (DcgProto.E_FightResult|null);

        /** S_PlayerResult PlayerIID */
        PlayerIID?: (Long|null);

        /** S_PlayerResult NickName */
        NickName?: (string|null);

        /** S_PlayerResult Icon */
        Icon?: (number|null);

        /** S_PlayerResult MatchScore */
        MatchScore?: (number|null);

        /** S_PlayerResult RankedMatchScore */
        RankedMatchScore?: (number|null);

        /** S_PlayerResult RankedStars */
        RankedStars?: (number|null);
    }

    /** Represents a S_PlayerResult. */
    class S_PlayerResult implements IS_PlayerResult {

        /**
         * Constructs a new S_PlayerResult.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PlayerResult);

        /** S_PlayerResult FightResult. */
        public FightResult: DcgProto.E_FightResult;

        /** S_PlayerResult PlayerIID. */
        public PlayerIID: Long;

        /** S_PlayerResult NickName. */
        public NickName: string;

        /** S_PlayerResult Icon. */
        public Icon: number;

        /** S_PlayerResult MatchScore. */
        public MatchScore: number;

        /** S_PlayerResult RankedMatchScore. */
        public RankedMatchScore: number;

        /** S_PlayerResult RankedStars. */
        public RankedStars: number;

        /**
         * Creates a new S_PlayerResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PlayerResult instance
         */
        public static create(properties?: DcgProto.IS_PlayerResult): DcgProto.S_PlayerResult;

        /**
         * Encodes the specified S_PlayerResult message. Does not implicitly {@link DcgProto.S_PlayerResult.verify|verify} messages.
         * @param m S_PlayerResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PlayerResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PlayerResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PlayerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PlayerResult;

        /**
         * Verifies a S_PlayerResult message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleTask. */
    interface IS_BattleTask {

        /** S_BattleTask PlayerTask */
        PlayerTask?: (DcgProto.IS_BattlePlayerTask[]|null);
    }

    /** Represents a S_BattleTask. */
    class S_BattleTask implements IS_BattleTask {

        /**
         * Constructs a new S_BattleTask.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleTask);

        /** S_BattleTask PlayerTask. */
        public PlayerTask: DcgProto.IS_BattlePlayerTask[];

        /**
         * Creates a new S_BattleTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleTask instance
         */
        public static create(properties?: DcgProto.IS_BattleTask): DcgProto.S_BattleTask;

        /**
         * Encodes the specified S_BattleTask message. Does not implicitly {@link DcgProto.S_BattleTask.verify|verify} messages.
         * @param m S_BattleTask message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleTask, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleTask message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleTask;

        /**
         * Verifies a S_BattleTask message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattlePlayerTask. */
    interface IS_BattlePlayerTask {

        /** S_BattlePlayerTask PlayerIID */
        PlayerIID?: (Long|null);

        /** S_BattlePlayerTask DrawCardNum */
        DrawCardNum?: (number|null);

        /** S_BattlePlayerTask BlockOppAttackCount */
        BlockOppAttackCount?: (number|null);

        /** S_BattlePlayerTask KillMonsterNum */
        KillMonsterNum?: (number|null);

        /** S_BattlePlayerTask AttackCount */
        AttackCount?: (number|null);

        /** S_BattlePlayerTask AttackDefenseCount */
        AttackDefenseCount?: (number|null);
    }

    /** Represents a S_BattlePlayerTask. */
    class S_BattlePlayerTask implements IS_BattlePlayerTask {

        /**
         * Constructs a new S_BattlePlayerTask.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattlePlayerTask);

        /** S_BattlePlayerTask PlayerIID. */
        public PlayerIID: Long;

        /** S_BattlePlayerTask DrawCardNum. */
        public DrawCardNum: number;

        /** S_BattlePlayerTask BlockOppAttackCount. */
        public BlockOppAttackCount: number;

        /** S_BattlePlayerTask KillMonsterNum. */
        public KillMonsterNum: number;

        /** S_BattlePlayerTask AttackCount. */
        public AttackCount: number;

        /** S_BattlePlayerTask AttackDefenseCount. */
        public AttackDefenseCount: number;

        /**
         * Creates a new S_BattlePlayerTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattlePlayerTask instance
         */
        public static create(properties?: DcgProto.IS_BattlePlayerTask): DcgProto.S_BattlePlayerTask;

        /**
         * Encodes the specified S_BattlePlayerTask message. Does not implicitly {@link DcgProto.S_BattlePlayerTask.verify|verify} messages.
         * @param m S_BattlePlayerTask message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattlePlayerTask, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattlePlayerTask message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattlePlayerTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattlePlayerTask;

        /**
         * Verifies a S_BattlePlayerTask message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DeckInfo. */
    interface IS_DeckInfo {

        /** S_DeckInfo DeckIID */
        DeckIID?: (Long|null);

        /** S_DeckInfo DeckName */
        DeckName?: (string|null);

        /** S_DeckInfo CardEgg */
        CardEgg?: (DcgProto.IS_CardData[]|null);

        /** S_DeckInfo CardDeck */
        CardDeck?: (DcgProto.IS_CardData[]|null);

        /** S_DeckInfo CardHand */
        CardHand?: (DcgProto.IS_CardData[]|null);

        /** S_DeckInfo DeckType */
        DeckType?: (DcgProto.E_DeckType|null);

        /** S_DeckInfo CreateTime */
        CreateTime?: (number|null);

        /** S_DeckInfo CfgId */
        CfgId?: (number|null);
    }

    /** Represents a S_DeckInfo. */
    class S_DeckInfo implements IS_DeckInfo {

        /**
         * Constructs a new S_DeckInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DeckInfo);

        /** S_DeckInfo DeckIID. */
        public DeckIID: Long;

        /** S_DeckInfo DeckName. */
        public DeckName: string;

        /** S_DeckInfo CardEgg. */
        public CardEgg: DcgProto.IS_CardData[];

        /** S_DeckInfo CardDeck. */
        public CardDeck: DcgProto.IS_CardData[];

        /** S_DeckInfo CardHand. */
        public CardHand: DcgProto.IS_CardData[];

        /** S_DeckInfo DeckType. */
        public DeckType: DcgProto.E_DeckType;

        /** S_DeckInfo CreateTime. */
        public CreateTime: number;

        /** S_DeckInfo CfgId. */
        public CfgId: number;

        /**
         * Creates a new S_DeckInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DeckInfo instance
         */
        public static create(properties?: DcgProto.IS_DeckInfo): DcgProto.S_DeckInfo;

        /**
         * Encodes the specified S_DeckInfo message. Does not implicitly {@link DcgProto.S_DeckInfo.verify|verify} messages.
         * @param m S_DeckInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DeckInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DeckInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DeckInfo;

        /**
         * Verifies a S_DeckInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DeckExtendInfo. */
    interface IS_DeckExtendInfo {

        /** S_DeckExtendInfo DeckExtendIID */
        DeckExtendIID?: (Long|null);

        /** S_DeckExtendInfo DeckIID */
        DeckIID?: (Long|null);

        /** S_DeckExtendInfo CardBoxCfgId */
        CardBoxCfgId?: (number|null);

        /** S_DeckExtendInfo CardCoverCfgId */
        CardCoverCfgId?: (number|null);

        /** S_DeckExtendInfo DuelCfgId */
        DuelCfgId?: (number|null);

        /** S_DeckExtendInfo Pages */
        Pages?: (number[]|null);
    }

    /** Represents a S_DeckExtendInfo. */
    class S_DeckExtendInfo implements IS_DeckExtendInfo {

        /**
         * Constructs a new S_DeckExtendInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DeckExtendInfo);

        /** S_DeckExtendInfo DeckExtendIID. */
        public DeckExtendIID: Long;

        /** S_DeckExtendInfo DeckIID. */
        public DeckIID: Long;

        /** S_DeckExtendInfo CardBoxCfgId. */
        public CardBoxCfgId: number;

        /** S_DeckExtendInfo CardCoverCfgId. */
        public CardCoverCfgId: number;

        /** S_DeckExtendInfo DuelCfgId. */
        public DuelCfgId: number;

        /** S_DeckExtendInfo Pages. */
        public Pages: number[];

        /**
         * Creates a new S_DeckExtendInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DeckExtendInfo instance
         */
        public static create(properties?: DcgProto.IS_DeckExtendInfo): DcgProto.S_DeckExtendInfo;

        /**
         * Encodes the specified S_DeckExtendInfo message. Does not implicitly {@link DcgProto.S_DeckExtendInfo.verify|verify} messages.
         * @param m S_DeckExtendInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DeckExtendInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DeckExtendInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DeckExtendInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DeckExtendInfo;

        /**
         * Verifies a S_DeckExtendInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CardData. */
    interface IS_CardData {

        /** S_CardData CfgId */
        CfgId?: (number|null);

        /** S_CardData Num */
        Num?: (number|null);

        /** S_CardData Number */
        Number?: (string|null);
    }

    /** Represents a S_CardData. */
    class S_CardData implements IS_CardData {

        /**
         * Constructs a new S_CardData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CardData);

        /** S_CardData CfgId. */
        public CfgId: number;

        /** S_CardData Num. */
        public Num: number;

        /** S_CardData Number. */
        public Number: string;

        /**
         * Creates a new S_CardData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CardData instance
         */
        public static create(properties?: DcgProto.IS_CardData): DcgProto.S_CardData;

        /**
         * Encodes the specified S_CardData message. Does not implicitly {@link DcgProto.S_CardData.verify|verify} messages.
         * @param m S_CardData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CardData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CardData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CardData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CardData;

        /**
         * Verifies a S_CardData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CardInfo. */
    interface IS_CardInfo {

        /** S_CardInfo CardIID */
        CardIID?: (Long|null);

        /** S_CardInfo CfgId */
        CfgId?: (number|null);

        /** S_CardInfo Num */
        Num?: (number|null);
    }

    /** Represents a S_CardInfo. */
    class S_CardInfo implements IS_CardInfo {

        /**
         * Constructs a new S_CardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CardInfo);

        /** S_CardInfo CardIID. */
        public CardIID: Long;

        /** S_CardInfo CfgId. */
        public CfgId: number;

        /** S_CardInfo Num. */
        public Num: number;

        /**
         * Creates a new S_CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CardInfo instance
         */
        public static create(properties?: DcgProto.IS_CardInfo): DcgProto.S_CardInfo;

        /**
         * Encodes the specified S_CardInfo message. Does not implicitly {@link DcgProto.S_CardInfo.verify|verify} messages.
         * @param m S_CardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CardInfo;

        /**
         * Verifies a S_CardInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ShelvesRefTime. */
    interface IS_ShelvesRefTime {

        /** S_ShelvesRefTime CfgTime */
        CfgTime?: (number|null);

        /** S_ShelvesRefTime Time */
        Time?: (number|null);
    }

    /** Represents a S_ShelvesRefTime. */
    class S_ShelvesRefTime implements IS_ShelvesRefTime {

        /**
         * Constructs a new S_ShelvesRefTime.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ShelvesRefTime);

        /** S_ShelvesRefTime CfgTime. */
        public CfgTime: number;

        /** S_ShelvesRefTime Time. */
        public Time: number;

        /**
         * Creates a new S_ShelvesRefTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ShelvesRefTime instance
         */
        public static create(properties?: DcgProto.IS_ShelvesRefTime): DcgProto.S_ShelvesRefTime;

        /**
         * Encodes the specified S_ShelvesRefTime message. Does not implicitly {@link DcgProto.S_ShelvesRefTime.verify|verify} messages.
         * @param m S_ShelvesRefTime message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ShelvesRefTime, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ShelvesRefTime message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ShelvesRefTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ShelvesRefTime;

        /**
         * Verifies a S_ShelvesRefTime message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Item. */
    interface IS_Item {

        /** S_Item InstanceId */
        InstanceId?: (Long|null);

        /** S_Item Num */
        Num?: (Long|null);

        /** S_Item CfgId */
        CfgId?: (number|null);
    }

    /** Represents a S_Item. */
    class S_Item implements IS_Item {

        /**
         * Constructs a new S_Item.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Item);

        /** S_Item InstanceId. */
        public InstanceId: Long;

        /** S_Item Num. */
        public Num: Long;

        /** S_Item CfgId. */
        public CfgId: number;

        /**
         * Creates a new S_Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Item instance
         */
        public static create(properties?: DcgProto.IS_Item): DcgProto.S_Item;

        /**
         * Encodes the specified S_Item message. Does not implicitly {@link DcgProto.S_Item.verify|verify} messages.
         * @param m S_Item message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Item, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Item message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Item;

        /**
         * Verifies a S_Item message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Digimon. */
    interface IS_Digimon {

        /** S_Digimon InstanceId */
        InstanceId?: (Long|null);

        /** S_Digimon CfgId */
        CfgId?: (number|null);

        /** S_Digimon Exp */
        Exp?: (number|null);
    }

    /** Represents a S_Digimon. */
    class S_Digimon implements IS_Digimon {

        /**
         * Constructs a new S_Digimon.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Digimon);

        /** S_Digimon InstanceId. */
        public InstanceId: Long;

        /** S_Digimon CfgId. */
        public CfgId: number;

        /** S_Digimon Exp. */
        public Exp: number;

        /**
         * Creates a new S_Digimon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Digimon instance
         */
        public static create(properties?: DcgProto.IS_Digimon): DcgProto.S_Digimon;

        /**
         * Encodes the specified S_Digimon message. Does not implicitly {@link DcgProto.S_Digimon.verify|verify} messages.
         * @param m S_Digimon message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Digimon, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Digimon message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Digimon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Digimon;

        /**
         * Verifies a S_Digimon message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DigimonEvo. */
    interface IS_DigimonEvo {

        /** S_DigimonEvo DigimonIID */
        DigimonIID?: (Long|null);

        /** S_DigimonEvo TrainTime */
        TrainTime?: (number|null);
    }

    /** Represents a S_DigimonEvo. */
    class S_DigimonEvo implements IS_DigimonEvo {

        /**
         * Constructs a new S_DigimonEvo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DigimonEvo);

        /** S_DigimonEvo DigimonIID. */
        public DigimonIID: Long;

        /** S_DigimonEvo TrainTime. */
        public TrainTime: number;

        /**
         * Creates a new S_DigimonEvo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DigimonEvo instance
         */
        public static create(properties?: DcgProto.IS_DigimonEvo): DcgProto.S_DigimonEvo;

        /**
         * Encodes the specified S_DigimonEvo message. Does not implicitly {@link DcgProto.S_DigimonEvo.verify|verify} messages.
         * @param m S_DigimonEvo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DigimonEvo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DigimonEvo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DigimonEvo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DigimonEvo;

        /**
         * Verifies a S_DigimonEvo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_DigimonLogs. */
    interface IS_DigimonLogs {

        /** S_DigimonLogs CfgId */
        CfgId?: (number|null);

        /** S_DigimonLogs CardCfgId */
        CardCfgId?: (number|null);

        /** S_DigimonLogs CreateTime */
        CreateTime?: (number|null);
    }

    /** Represents a S_DigimonLogs. */
    class S_DigimonLogs implements IS_DigimonLogs {

        /**
         * Constructs a new S_DigimonLogs.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_DigimonLogs);

        /** S_DigimonLogs CfgId. */
        public CfgId: number;

        /** S_DigimonLogs CardCfgId. */
        public CardCfgId: number;

        /** S_DigimonLogs CreateTime. */
        public CreateTime: number;

        /**
         * Creates a new S_DigimonLogs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_DigimonLogs instance
         */
        public static create(properties?: DcgProto.IS_DigimonLogs): DcgProto.S_DigimonLogs;

        /**
         * Encodes the specified S_DigimonLogs message. Does not implicitly {@link DcgProto.S_DigimonLogs.verify|verify} messages.
         * @param m S_DigimonLogs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_DigimonLogs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DigimonLogs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_DigimonLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_DigimonLogs;

        /**
         * Verifies a S_DigimonLogs message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Card. */
    interface IS_Card {

        /** S_Card InstanceId */
        InstanceId?: (Long|null);

        /** S_Card Num */
        Num?: (Long|null);

        /** S_Card CfgId */
        CfgId?: (number|null);

        /** S_Card CreateTime */
        CreateTime?: (number|null);
    }

    /** Represents a S_Card. */
    class S_Card implements IS_Card {

        /**
         * Constructs a new S_Card.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Card);

        /** S_Card InstanceId. */
        public InstanceId: Long;

        /** S_Card Num. */
        public Num: Long;

        /** S_Card CfgId. */
        public CfgId: number;

        /** S_Card CreateTime. */
        public CreateTime: number;

        /**
         * Creates a new S_Card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Card instance
         */
        public static create(properties?: DcgProto.IS_Card): DcgProto.S_Card;

        /**
         * Encodes the specified S_Card message. Does not implicitly {@link DcgProto.S_Card.verify|verify} messages.
         * @param m S_Card message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Card, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Card message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Card;

        /**
         * Verifies a S_Card message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Shop. */
    interface IS_Shop {

        /** S_Shop InstanceId */
        InstanceId?: (Long|null);

        /** S_Shop ShopCfgId */
        ShopCfgId?: (number|null);

        /** S_Shop ShopDetail */
        ShopDetail?: (DcgProto.IS_ShopGoodsShelvesInfo[]|null);

        /** S_Shop CreateTime */
        CreateTime?: (number|null);
    }

    /** Represents a S_Shop. */
    class S_Shop implements IS_Shop {

        /**
         * Constructs a new S_Shop.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Shop);

        /** S_Shop InstanceId. */
        public InstanceId: Long;

        /** S_Shop ShopCfgId. */
        public ShopCfgId: number;

        /** S_Shop ShopDetail. */
        public ShopDetail: DcgProto.IS_ShopGoodsShelvesInfo[];

        /** S_Shop CreateTime. */
        public CreateTime: number;

        /**
         * Creates a new S_Shop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Shop instance
         */
        public static create(properties?: DcgProto.IS_Shop): DcgProto.S_Shop;

        /**
         * Encodes the specified S_Shop message. Does not implicitly {@link DcgProto.S_Shop.verify|verify} messages.
         * @param m S_Shop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Shop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Shop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Shop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Shop;

        /**
         * Verifies a S_Shop message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GoodsShelvesInfo. */
    interface IS_GoodsShelvesInfo {

        /** S_GoodsShelvesInfo Info */
        Info?: (DcgProto.IS_ShopGoodsShelvesInfo|null);
    }

    /** Represents a S_GoodsShelvesInfo. */
    class S_GoodsShelvesInfo implements IS_GoodsShelvesInfo {

        /**
         * Constructs a new S_GoodsShelvesInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GoodsShelvesInfo);

        /** S_GoodsShelvesInfo Info. */
        public Info?: (DcgProto.IS_ShopGoodsShelvesInfo|null);

        /**
         * Creates a new S_GoodsShelvesInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GoodsShelvesInfo instance
         */
        public static create(properties?: DcgProto.IS_GoodsShelvesInfo): DcgProto.S_GoodsShelvesInfo;

        /**
         * Encodes the specified S_GoodsShelvesInfo message. Does not implicitly {@link DcgProto.S_GoodsShelvesInfo.verify|verify} messages.
         * @param m S_GoodsShelvesInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GoodsShelvesInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GoodsShelvesInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GoodsShelvesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GoodsShelvesInfo;

        /**
         * Verifies a S_GoodsShelvesInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ShopGoodsShelvesInfo. */
    interface IS_ShopGoodsShelvesInfo {

        /** S_ShopGoodsShelvesInfo GoodsShelvesId */
        GoodsShelvesId?: (number|null);

        /** S_ShopGoodsShelvesInfo BuyNum */
        BuyNum?: (number|null);

        /** S_ShopGoodsShelvesInfo CfgId */
        CfgId?: (number|null);

        /** S_ShopGoodsShelvesInfo DetailCfgId */
        DetailCfgId?: (number|null);

        /** S_ShopGoodsShelvesInfo NextRefreshTime */
        NextRefreshTime?: (number|null);
    }

    /** Represents a S_ShopGoodsShelvesInfo. */
    class S_ShopGoodsShelvesInfo implements IS_ShopGoodsShelvesInfo {

        /**
         * Constructs a new S_ShopGoodsShelvesInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ShopGoodsShelvesInfo);

        /** S_ShopGoodsShelvesInfo GoodsShelvesId. */
        public GoodsShelvesId: number;

        /** S_ShopGoodsShelvesInfo BuyNum. */
        public BuyNum: number;

        /** S_ShopGoodsShelvesInfo CfgId. */
        public CfgId: number;

        /** S_ShopGoodsShelvesInfo DetailCfgId. */
        public DetailCfgId: number;

        /** S_ShopGoodsShelvesInfo NextRefreshTime. */
        public NextRefreshTime: number;

        /**
         * Creates a new S_ShopGoodsShelvesInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ShopGoodsShelvesInfo instance
         */
        public static create(properties?: DcgProto.IS_ShopGoodsShelvesInfo): DcgProto.S_ShopGoodsShelvesInfo;

        /**
         * Encodes the specified S_ShopGoodsShelvesInfo message. Does not implicitly {@link DcgProto.S_ShopGoodsShelvesInfo.verify|verify} messages.
         * @param m S_ShopGoodsShelvesInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ShopGoodsShelvesInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ShopGoodsShelvesInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ShopGoodsShelvesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ShopGoodsShelvesInfo;

        /**
         * Verifies a S_ShopGoodsShelvesInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Parts. */
    interface IS_Parts {

        /** S_Parts InstanceId */
        InstanceId?: (Long|null);

        /** S_Parts CfgId */
        CfgId?: (number|null);
    }

    /** Represents a S_Parts. */
    class S_Parts implements IS_Parts {

        /**
         * Constructs a new S_Parts.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Parts);

        /** S_Parts InstanceId. */
        public InstanceId: Long;

        /** S_Parts CfgId. */
        public CfgId: number;

        /**
         * Creates a new S_Parts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Parts instance
         */
        public static create(properties?: DcgProto.IS_Parts): DcgProto.S_Parts;

        /**
         * Encodes the specified S_Parts message. Does not implicitly {@link DcgProto.S_Parts.verify|verify} messages.
         * @param m S_Parts message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Parts, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Parts message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Parts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Parts;

        /**
         * Verifies a S_Parts message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CardBag. */
    interface IS_CardBag {

        /** S_CardBag InstanceId */
        InstanceId?: (Long|null);

        /** S_CardBag CfgId */
        CfgId?: (number|null);

        /** S_CardBag TotalBuyCount */
        TotalBuyCount?: (number|null);

        /** S_CardBag BuyCount */
        BuyCount?: (number|null);

        /** S_CardBag TenBuyCount */
        TenBuyCount?: (number|null);

        /** S_CardBag NextRefreshTime */
        NextRefreshTime?: (number|null);

        /** S_CardBag CreateTime */
        CreateTime?: (number|null);
    }

    /** Represents a S_CardBag. */
    class S_CardBag implements IS_CardBag {

        /**
         * Constructs a new S_CardBag.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CardBag);

        /** S_CardBag InstanceId. */
        public InstanceId: Long;

        /** S_CardBag CfgId. */
        public CfgId: number;

        /** S_CardBag TotalBuyCount. */
        public TotalBuyCount: number;

        /** S_CardBag BuyCount. */
        public BuyCount: number;

        /** S_CardBag TenBuyCount. */
        public TenBuyCount: number;

        /** S_CardBag NextRefreshTime. */
        public NextRefreshTime: number;

        /** S_CardBag CreateTime. */
        public CreateTime: number;

        /**
         * Creates a new S_CardBag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CardBag instance
         */
        public static create(properties?: DcgProto.IS_CardBag): DcgProto.S_CardBag;

        /**
         * Encodes the specified S_CardBag message. Does not implicitly {@link DcgProto.S_CardBag.verify|verify} messages.
         * @param m S_CardBag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CardBag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CardBag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CardBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CardBag;

        /**
         * Verifies a S_CardBag message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_CardCollect. */
    interface IS_CardCollect {

        /** S_CardCollect InstanceId */
        InstanceId?: (Long|null);

        /** S_CardCollect CfgId */
        CfgId?: (number[]|null);
    }

    /** Represents a S_CardCollect. */
    class S_CardCollect implements IS_CardCollect {

        /**
         * Constructs a new S_CardCollect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_CardCollect);

        /** S_CardCollect InstanceId. */
        public InstanceId: Long;

        /** S_CardCollect CfgId. */
        public CfgId: number[];

        /**
         * Creates a new S_CardCollect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_CardCollect instance
         */
        public static create(properties?: DcgProto.IS_CardCollect): DcgProto.S_CardCollect;

        /**
         * Encodes the specified S_CardCollect message. Does not implicitly {@link DcgProto.S_CardCollect.verify|verify} messages.
         * @param m S_CardCollect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_CardCollect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CardCollect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_CardCollect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_CardCollect;

        /**
         * Verifies a S_CardCollect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailNew. */
    interface IS_MailNew {

        /** S_MailNew InstanceId */
        InstanceId?: (Long|null);

        /** S_MailNew Type */
        Type?: (DcgProto.E_MailNewType|null);

        /** S_MailNew Status */
        Status?: (DcgProto.E_MailNewStatus|null);

        /** S_MailNew Collection */
        Collection?: (number|null);

        /** S_MailNew SendFrom */
        SendFrom?: (string|null);

        /** S_MailNew SendFromIID */
        SendFromIID?: (Long|null);

        /** S_MailNew ExpiredTime */
        ExpiredTime?: (number|null);

        /** S_MailNew CreateTime */
        CreateTime?: (number|null);

        /** S_MailNew TemplateParam */
        TemplateParam?: (DcgProto.IS_MailParam|null);

        /** S_MailNew Attach */
        Attach?: (string|null);
    }

    /** Represents a S_MailNew. */
    class S_MailNew implements IS_MailNew {

        /**
         * Constructs a new S_MailNew.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailNew);

        /** S_MailNew InstanceId. */
        public InstanceId: Long;

        /** S_MailNew Type. */
        public Type: DcgProto.E_MailNewType;

        /** S_MailNew Status. */
        public Status: DcgProto.E_MailNewStatus;

        /** S_MailNew Collection. */
        public Collection: number;

        /** S_MailNew SendFrom. */
        public SendFrom: string;

        /** S_MailNew SendFromIID. */
        public SendFromIID: Long;

        /** S_MailNew ExpiredTime. */
        public ExpiredTime: number;

        /** S_MailNew CreateTime. */
        public CreateTime: number;

        /** S_MailNew TemplateParam. */
        public TemplateParam?: (DcgProto.IS_MailParam|null);

        /** S_MailNew Attach. */
        public Attach: string;

        /**
         * Creates a new S_MailNew instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailNew instance
         */
        public static create(properties?: DcgProto.IS_MailNew): DcgProto.S_MailNew;

        /**
         * Encodes the specified S_MailNew message. Does not implicitly {@link DcgProto.S_MailNew.verify|verify} messages.
         * @param m S_MailNew message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailNew, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailNew message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailNew
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailNew;

        /**
         * Verifies a S_MailNew message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailParam. */
    interface IS_MailParam {

        /** S_MailParam MailSys */
        MailSys?: (DcgProto.IS_MailSys|null);

        /** S_MailParam PvpRoom */
        PvpRoom?: (DcgProto.IS_MailPvpRoom|null);

        /** S_MailParam MatchFight */
        MatchFight?: (DcgProto.IS_MailMatchFight|null);

        /** S_MailParam FriendFight */
        FriendFight?: (DcgProto.IS_MailFriendFight|null);

        /** S_MailParam TaskBox */
        TaskBox?: (DcgProto.IS_MailTaskBox|null);

        /** S_MailParam TaskLogin */
        TaskLogin?: (DcgProto.IS_MailTaskLogin|null);
    }

    /** Represents a S_MailParam. */
    class S_MailParam implements IS_MailParam {

        /**
         * Constructs a new S_MailParam.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailParam);

        /** S_MailParam MailSys. */
        public MailSys?: (DcgProto.IS_MailSys|null);

        /** S_MailParam PvpRoom. */
        public PvpRoom?: (DcgProto.IS_MailPvpRoom|null);

        /** S_MailParam MatchFight. */
        public MatchFight?: (DcgProto.IS_MailMatchFight|null);

        /** S_MailParam FriendFight. */
        public FriendFight?: (DcgProto.IS_MailFriendFight|null);

        /** S_MailParam TaskBox. */
        public TaskBox?: (DcgProto.IS_MailTaskBox|null);

        /** S_MailParam TaskLogin. */
        public TaskLogin?: (DcgProto.IS_MailTaskLogin|null);

        /**
         * Creates a new S_MailParam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailParam instance
         */
        public static create(properties?: DcgProto.IS_MailParam): DcgProto.S_MailParam;

        /**
         * Encodes the specified S_MailParam message. Does not implicitly {@link DcgProto.S_MailParam.verify|verify} messages.
         * @param m S_MailParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailParam;

        /**
         * Verifies a S_MailParam message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailSys. */
    interface IS_MailSys {

        /** S_MailSys Title */
        Title?: (string|null);

        /** S_MailSys Sender */
        Sender?: (string|null);

        /** S_MailSys UpdateUrl */
        UpdateUrl?: (string|null);

        /** S_MailSys ReceiverIds */
        ReceiverIds?: (Long[]|null);

        /** S_MailSys Content */
        Content?: (string|null);
    }

    /** Represents a S_MailSys. */
    class S_MailSys implements IS_MailSys {

        /**
         * Constructs a new S_MailSys.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailSys);

        /** S_MailSys Title. */
        public Title: string;

        /** S_MailSys Sender. */
        public Sender: string;

        /** S_MailSys UpdateUrl. */
        public UpdateUrl: string;

        /** S_MailSys ReceiverIds. */
        public ReceiverIds: Long[];

        /** S_MailSys Content. */
        public Content: string;

        /**
         * Creates a new S_MailSys instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailSys instance
         */
        public static create(properties?: DcgProto.IS_MailSys): DcgProto.S_MailSys;

        /**
         * Encodes the specified S_MailSys message. Does not implicitly {@link DcgProto.S_MailSys.verify|verify} messages.
         * @param m S_MailSys message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailSys, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailSys message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailSys
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailSys;

        /**
         * Verifies a S_MailSys message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailPvpRoom. */
    interface IS_MailPvpRoom {

        /** S_MailPvpRoom RoomName */
        RoomName?: (string|null);

        /** S_MailPvpRoom CfgId */
        CfgId?: (number|null);

        /** S_MailPvpRoom Rank */
        Rank?: (number|null);
    }

    /** Represents a S_MailPvpRoom. */
    class S_MailPvpRoom implements IS_MailPvpRoom {

        /**
         * Constructs a new S_MailPvpRoom.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailPvpRoom);

        /** S_MailPvpRoom RoomName. */
        public RoomName: string;

        /** S_MailPvpRoom CfgId. */
        public CfgId: number;

        /** S_MailPvpRoom Rank. */
        public Rank: number;

        /**
         * Creates a new S_MailPvpRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailPvpRoom instance
         */
        public static create(properties?: DcgProto.IS_MailPvpRoom): DcgProto.S_MailPvpRoom;

        /**
         * Encodes the specified S_MailPvpRoom message. Does not implicitly {@link DcgProto.S_MailPvpRoom.verify|verify} messages.
         * @param m S_MailPvpRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailPvpRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailPvpRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailPvpRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailPvpRoom;

        /**
         * Verifies a S_MailPvpRoom message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailTaskBox. */
    interface IS_MailTaskBox {

        /** S_MailTaskBox Score */
        Score?: (number|null);
    }

    /** Represents a S_MailTaskBox. */
    class S_MailTaskBox implements IS_MailTaskBox {

        /**
         * Constructs a new S_MailTaskBox.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailTaskBox);

        /** S_MailTaskBox Score. */
        public Score: number;

        /**
         * Creates a new S_MailTaskBox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailTaskBox instance
         */
        public static create(properties?: DcgProto.IS_MailTaskBox): DcgProto.S_MailTaskBox;

        /**
         * Encodes the specified S_MailTaskBox message. Does not implicitly {@link DcgProto.S_MailTaskBox.verify|verify} messages.
         * @param m S_MailTaskBox message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailTaskBox, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailTaskBox message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailTaskBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailTaskBox;

        /**
         * Verifies a S_MailTaskBox message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailTaskLogin. */
    interface IS_MailTaskLogin {

        /** S_MailTaskLogin Episode */
        Episode?: (number|null);

        /** S_MailTaskLogin Days */
        Days?: (number|null);
    }

    /** Represents a S_MailTaskLogin. */
    class S_MailTaskLogin implements IS_MailTaskLogin {

        /**
         * Constructs a new S_MailTaskLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailTaskLogin);

        /** S_MailTaskLogin Episode. */
        public Episode: number;

        /** S_MailTaskLogin Days. */
        public Days: number;

        /**
         * Creates a new S_MailTaskLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailTaskLogin instance
         */
        public static create(properties?: DcgProto.IS_MailTaskLogin): DcgProto.S_MailTaskLogin;

        /**
         * Encodes the specified S_MailTaskLogin message. Does not implicitly {@link DcgProto.S_MailTaskLogin.verify|verify} messages.
         * @param m S_MailTaskLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailTaskLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailTaskLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailTaskLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailTaskLogin;

        /**
         * Verifies a S_MailTaskLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattlePlayerIO. */
    interface IS_BattlePlayerIO {

        /** S_BattlePlayerIO FightResult */
        FightResult?: (DcgProto.E_FightResult|null);

        /** S_BattlePlayerIO PlayerIID */
        PlayerIID?: (Long|null);

        /** S_BattlePlayerIO NickName */
        NickName?: (string|null);
    }

    /** Represents a S_BattlePlayerIO. */
    class S_BattlePlayerIO implements IS_BattlePlayerIO {

        /**
         * Constructs a new S_BattlePlayerIO.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattlePlayerIO);

        /** S_BattlePlayerIO FightResult. */
        public FightResult: DcgProto.E_FightResult;

        /** S_BattlePlayerIO PlayerIID. */
        public PlayerIID: Long;

        /** S_BattlePlayerIO NickName. */
        public NickName: string;

        /**
         * Creates a new S_BattlePlayerIO instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattlePlayerIO instance
         */
        public static create(properties?: DcgProto.IS_BattlePlayerIO): DcgProto.S_BattlePlayerIO;

        /**
         * Encodes the specified S_BattlePlayerIO message. Does not implicitly {@link DcgProto.S_BattlePlayerIO.verify|verify} messages.
         * @param m S_BattlePlayerIO message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattlePlayerIO, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattlePlayerIO message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattlePlayerIO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattlePlayerIO;

        /**
         * Verifies a S_BattlePlayerIO message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleIO. */
    interface IS_BattleIO {

        /** S_BattleIO PlayerIO */
        PlayerIO?: (DcgProto.IS_BattlePlayerIO[]|null);
    }

    /** Represents a S_BattleIO. */
    class S_BattleIO implements IS_BattleIO {

        /**
         * Constructs a new S_BattleIO.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleIO);

        /** S_BattleIO PlayerIO. */
        public PlayerIO: DcgProto.IS_BattlePlayerIO[];

        /**
         * Creates a new S_BattleIO instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleIO instance
         */
        public static create(properties?: DcgProto.IS_BattleIO): DcgProto.S_BattleIO;

        /**
         * Encodes the specified S_BattleIO message. Does not implicitly {@link DcgProto.S_BattleIO.verify|verify} messages.
         * @param m S_BattleIO message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleIO, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleIO message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleIO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleIO;

        /**
         * Verifies a S_BattleIO message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailMatchFight. */
    interface IS_MailMatchFight {

        /** S_MailMatchFight BattleInfo */
        BattleInfo?: (DcgProto.IS_BattleIO|null);
    }

    /** Represents a S_MailMatchFight. */
    class S_MailMatchFight implements IS_MailMatchFight {

        /**
         * Constructs a new S_MailMatchFight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailMatchFight);

        /** S_MailMatchFight BattleInfo. */
        public BattleInfo?: (DcgProto.IS_BattleIO|null);

        /**
         * Creates a new S_MailMatchFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailMatchFight instance
         */
        public static create(properties?: DcgProto.IS_MailMatchFight): DcgProto.S_MailMatchFight;

        /**
         * Encodes the specified S_MailMatchFight message. Does not implicitly {@link DcgProto.S_MailMatchFight.verify|verify} messages.
         * @param m S_MailMatchFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailMatchFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailMatchFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailMatchFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailMatchFight;

        /**
         * Verifies a S_MailMatchFight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MailFriendFight. */
    interface IS_MailFriendFight {

        /** S_MailFriendFight BattleInfo */
        BattleInfo?: (DcgProto.IS_BattleIO|null);
    }

    /** Represents a S_MailFriendFight. */
    class S_MailFriendFight implements IS_MailFriendFight {

        /**
         * Constructs a new S_MailFriendFight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MailFriendFight);

        /** S_MailFriendFight BattleInfo. */
        public BattleInfo?: (DcgProto.IS_BattleIO|null);

        /**
         * Creates a new S_MailFriendFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MailFriendFight instance
         */
        public static create(properties?: DcgProto.IS_MailFriendFight): DcgProto.S_MailFriendFight;

        /**
         * Encodes the specified S_MailFriendFight message. Does not implicitly {@link DcgProto.S_MailFriendFight.verify|verify} messages.
         * @param m S_MailFriendFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MailFriendFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MailFriendFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MailFriendFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MailFriendFight;

        /**
         * Verifies a S_MailFriendFight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_FriendApply. */
    interface IS_FriendApply {

        /** S_FriendApply ApplyIID */
        ApplyIID?: (Long|null);

        /** S_FriendApply ApplyTime */
        ApplyTime?: (number|null);

        /** S_FriendApply RoleInfo */
        RoleInfo?: (DcgProto.IS_OtherRole|null);
    }

    /** Represents a S_FriendApply. */
    class S_FriendApply implements IS_FriendApply {

        /**
         * Constructs a new S_FriendApply.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_FriendApply);

        /** S_FriendApply ApplyIID. */
        public ApplyIID: Long;

        /** S_FriendApply ApplyTime. */
        public ApplyTime: number;

        /** S_FriendApply RoleInfo. */
        public RoleInfo?: (DcgProto.IS_OtherRole|null);

        /**
         * Creates a new S_FriendApply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_FriendApply instance
         */
        public static create(properties?: DcgProto.IS_FriendApply): DcgProto.S_FriendApply;

        /**
         * Encodes the specified S_FriendApply message. Does not implicitly {@link DcgProto.S_FriendApply.verify|verify} messages.
         * @param m S_FriendApply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_FriendApply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FriendApply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_FriendApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_FriendApply;

        /**
         * Verifies a S_FriendApply message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Friend. */
    interface IS_Friend {

        /** S_Friend FriendIID */
        FriendIID?: (Long|null);

        /** S_Friend RoleInfo */
        RoleInfo?: (DcgProto.IS_OtherRole|null);
    }

    /** Represents a S_Friend. */
    class S_Friend implements IS_Friend {

        /**
         * Constructs a new S_Friend.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Friend);

        /** S_Friend FriendIID. */
        public FriendIID: Long;

        /** S_Friend RoleInfo. */
        public RoleInfo?: (DcgProto.IS_OtherRole|null);

        /**
         * Creates a new S_Friend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Friend instance
         */
        public static create(properties?: DcgProto.IS_Friend): DcgProto.S_Friend;

        /**
         * Encodes the specified S_Friend message. Does not implicitly {@link DcgProto.S_Friend.verify|verify} messages.
         * @param m S_Friend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Friend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Friend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Friend;

        /**
         * Verifies a S_Friend message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PvpInvite. */
    interface IS_PvpInvite {

        /** S_PvpInvite InviteIID */
        InviteIID?: (Long|null);

        /** S_PvpInvite CreateTime */
        CreateTime?: (number|null);

        /** S_PvpInvite EndTime */
        EndTime?: (number|null);

        /** S_PvpInvite RoleInfo */
        RoleInfo?: (DcgProto.IS_OtherRole|null);

        /** S_PvpInvite RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);

        /** S_PvpInvite RoomIID */
        RoomIID?: (Long|null);

        /** S_PvpInvite RoomShortId */
        RoomShortId?: (number|null);
    }

    /** Represents a S_PvpInvite. */
    class S_PvpInvite implements IS_PvpInvite {

        /**
         * Constructs a new S_PvpInvite.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PvpInvite);

        /** S_PvpInvite InviteIID. */
        public InviteIID: Long;

        /** S_PvpInvite CreateTime. */
        public CreateTime: number;

        /** S_PvpInvite EndTime. */
        public EndTime: number;

        /** S_PvpInvite RoleInfo. */
        public RoleInfo?: (DcgProto.IS_OtherRole|null);

        /** S_PvpInvite RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /** S_PvpInvite RoomIID. */
        public RoomIID: Long;

        /** S_PvpInvite RoomShortId. */
        public RoomShortId: number;

        /**
         * Creates a new S_PvpInvite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PvpInvite instance
         */
        public static create(properties?: DcgProto.IS_PvpInvite): DcgProto.S_PvpInvite;

        /**
         * Encodes the specified S_PvpInvite message. Does not implicitly {@link DcgProto.S_PvpInvite.verify|verify} messages.
         * @param m S_PvpInvite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PvpInvite, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PvpInvite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PvpInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PvpInvite;

        /**
         * Verifies a S_PvpInvite message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Reward. */
    interface IS_Reward {

        /** S_Reward RewardId */
        RewardId?: (number|null);

        /** S_Reward RewardNum */
        RewardNum?: (number|null);
    }

    /** Represents a S_Reward. */
    class S_Reward implements IS_Reward {

        /**
         * Constructs a new S_Reward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Reward);

        /** S_Reward RewardId. */
        public RewardId: number;

        /** S_Reward RewardNum. */
        public RewardNum: number;

        /**
         * Creates a new S_Reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Reward instance
         */
        public static create(properties?: DcgProto.IS_Reward): DcgProto.S_Reward;

        /**
         * Encodes the specified S_Reward message. Does not implicitly {@link DcgProto.S_Reward.verify|verify} messages.
         * @param m S_Reward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Reward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Reward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Reward;

        /**
         * Verifies a S_Reward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PersonalRoom. */
    interface IS_PersonalRoom {

        /** S_PersonalRoom InstanceId */
        InstanceId?: (Long|null);

        /** S_PersonalRoom Viewer */
        Viewer?: (boolean|null);

        /** S_PersonalRoom OP */
        OP?: (DcgProto.IS_OtherRole|null);

        /** S_PersonalRoom Rival */
        Rival?: (DcgProto.IS_OtherRole|null);

        /** S_PersonalRoom RivalReady */
        RivalReady?: (boolean|null);
    }

    /** Represents a S_PersonalRoom. */
    class S_PersonalRoom implements IS_PersonalRoom {

        /**
         * Constructs a new S_PersonalRoom.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PersonalRoom);

        /** S_PersonalRoom InstanceId. */
        public InstanceId: Long;

        /** S_PersonalRoom Viewer. */
        public Viewer: boolean;

        /** S_PersonalRoom OP. */
        public OP?: (DcgProto.IS_OtherRole|null);

        /** S_PersonalRoom Rival. */
        public Rival?: (DcgProto.IS_OtherRole|null);

        /** S_PersonalRoom RivalReady. */
        public RivalReady: boolean;

        /**
         * Creates a new S_PersonalRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PersonalRoom instance
         */
        public static create(properties?: DcgProto.IS_PersonalRoom): DcgProto.S_PersonalRoom;

        /**
         * Encodes the specified S_PersonalRoom message. Does not implicitly {@link DcgProto.S_PersonalRoom.verify|verify} messages.
         * @param m S_PersonalRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PersonalRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PersonalRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PersonalRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PersonalRoom;

        /**
         * Verifies a S_PersonalRoom message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PvpRoom. */
    interface IS_PvpRoom {

        /** S_PvpRoom InstanceId */
        InstanceId?: (Long|null);

        /** S_PvpRoom ShortId */
        ShortId?: (number|null);

        /** S_PvpRoom Name */
        Name?: (string|null);

        /** S_PvpRoom Level */
        Level?: (number|null);

        /** S_PvpRoom CurMemberNum */
        CurMemberNum?: (number|null);

        /** S_PvpRoom Status */
        Status?: (DcgProto.E_ROOM_STATUS|null);

        /** S_PvpRoom Type */
        Type?: (DcgProto.E_ROOM_TYPE|null);

        /** S_PvpRoom RaceIID */
        RaceIID?: (Long|null);

        /** S_PvpRoom CreateTime */
        CreateTime?: (number|null);

        /** S_PvpRoom CloseTime */
        CloseTime?: (number|null);

        /** S_PvpRoom OP */
        OP?: (DcgProto.IS_OtherRole|null);
    }

    /** Represents a S_PvpRoom. */
    class S_PvpRoom implements IS_PvpRoom {

        /**
         * Constructs a new S_PvpRoom.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PvpRoom);

        /** S_PvpRoom InstanceId. */
        public InstanceId: Long;

        /** S_PvpRoom ShortId. */
        public ShortId: number;

        /** S_PvpRoom Name. */
        public Name: string;

        /** S_PvpRoom Level. */
        public Level: number;

        /** S_PvpRoom CurMemberNum. */
        public CurMemberNum: number;

        /** S_PvpRoom Status. */
        public Status: DcgProto.E_ROOM_STATUS;

        /** S_PvpRoom Type. */
        public Type: DcgProto.E_ROOM_TYPE;

        /** S_PvpRoom RaceIID. */
        public RaceIID: Long;

        /** S_PvpRoom CreateTime. */
        public CreateTime: number;

        /** S_PvpRoom CloseTime. */
        public CloseTime: number;

        /** S_PvpRoom OP. */
        public OP?: (DcgProto.IS_OtherRole|null);

        /**
         * Creates a new S_PvpRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PvpRoom instance
         */
        public static create(properties?: DcgProto.IS_PvpRoom): DcgProto.S_PvpRoom;

        /**
         * Encodes the specified S_PvpRoom message. Does not implicitly {@link DcgProto.S_PvpRoom.verify|verify} messages.
         * @param m S_PvpRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PvpRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PvpRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PvpRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PvpRoom;

        /**
         * Verifies a S_PvpRoom message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PvpRoomMember. */
    interface IS_PvpRoomMember {

        /** S_PvpRoomMember RoleInfo */
        RoleInfo?: (DcgProto.IS_OtherRole|null);
    }

    /** Represents a S_PvpRoomMember. */
    class S_PvpRoomMember implements IS_PvpRoomMember {

        /**
         * Constructs a new S_PvpRoomMember.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PvpRoomMember);

        /** S_PvpRoomMember RoleInfo. */
        public RoleInfo?: (DcgProto.IS_OtherRole|null);

        /**
         * Creates a new S_PvpRoomMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PvpRoomMember instance
         */
        public static create(properties?: DcgProto.IS_PvpRoomMember): DcgProto.S_PvpRoomMember;

        /**
         * Encodes the specified S_PvpRoomMember message. Does not implicitly {@link DcgProto.S_PvpRoomMember.verify|verify} messages.
         * @param m S_PvpRoomMember message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PvpRoomMember, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PvpRoomMember message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PvpRoomMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PvpRoomMember;

        /**
         * Verifies a S_PvpRoomMember message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PvpRoomRaceMember. */
    interface IS_PvpRoomRaceMember {

        /** S_PvpRoomRaceMember RoleIID */
        RoleIID?: (Long|null);

        /** S_PvpRoomRaceMember Icon */
        Icon?: (number|null);

        /** S_PvpRoomRaceMember FightResult */
        FightResult?: (DcgProto.E_FightResult|null);
    }

    /** Represents a S_PvpRoomRaceMember. */
    class S_PvpRoomRaceMember implements IS_PvpRoomRaceMember {

        /**
         * Constructs a new S_PvpRoomRaceMember.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PvpRoomRaceMember);

        /** S_PvpRoomRaceMember RoleIID. */
        public RoleIID: Long;

        /** S_PvpRoomRaceMember Icon. */
        public Icon: number;

        /** S_PvpRoomRaceMember FightResult. */
        public FightResult: DcgProto.E_FightResult;

        /**
         * Creates a new S_PvpRoomRaceMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PvpRoomRaceMember instance
         */
        public static create(properties?: DcgProto.IS_PvpRoomRaceMember): DcgProto.S_PvpRoomRaceMember;

        /**
         * Encodes the specified S_PvpRoomRaceMember message. Does not implicitly {@link DcgProto.S_PvpRoomRaceMember.verify|verify} messages.
         * @param m S_PvpRoomRaceMember message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PvpRoomRaceMember, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PvpRoomRaceMember message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PvpRoomRaceMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PvpRoomRaceMember;

        /**
         * Verifies a S_PvpRoomRaceMember message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PvpRoomRaceFight. */
    interface IS_PvpRoomRaceFight {

        /** S_PvpRoomRaceFight RoomIID */
        RoomIID?: (Long|null);

        /** S_PvpRoomRaceFight FightStatus */
        FightStatus?: (DcgProto.E_ROOM_STATUS|null);

        /** S_PvpRoomRaceFight EndTime */
        EndTime?: (number|null);

        /** S_PvpRoomRaceFight MemberA */
        MemberA?: (DcgProto.IS_PvpRoomRaceMember|null);

        /** S_PvpRoomRaceFight MemberB */
        MemberB?: (DcgProto.IS_PvpRoomRaceMember|null);
    }

    /** Represents a S_PvpRoomRaceFight. */
    class S_PvpRoomRaceFight implements IS_PvpRoomRaceFight {

        /**
         * Constructs a new S_PvpRoomRaceFight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PvpRoomRaceFight);

        /** S_PvpRoomRaceFight RoomIID. */
        public RoomIID: Long;

        /** S_PvpRoomRaceFight FightStatus. */
        public FightStatus: DcgProto.E_ROOM_STATUS;

        /** S_PvpRoomRaceFight EndTime. */
        public EndTime: number;

        /** S_PvpRoomRaceFight MemberA. */
        public MemberA?: (DcgProto.IS_PvpRoomRaceMember|null);

        /** S_PvpRoomRaceFight MemberB. */
        public MemberB?: (DcgProto.IS_PvpRoomRaceMember|null);

        /**
         * Creates a new S_PvpRoomRaceFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PvpRoomRaceFight instance
         */
        public static create(properties?: DcgProto.IS_PvpRoomRaceFight): DcgProto.S_PvpRoomRaceFight;

        /**
         * Encodes the specified S_PvpRoomRaceFight message. Does not implicitly {@link DcgProto.S_PvpRoomRaceFight.verify|verify} messages.
         * @param m S_PvpRoomRaceFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PvpRoomRaceFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PvpRoomRaceFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PvpRoomRaceFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PvpRoomRaceFight;

        /**
         * Verifies a S_PvpRoomRaceFight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PvpRoomRaceResult. */
    interface IS_PvpRoomRaceResult {

        /** S_PvpRoomRaceResult TurnCount */
        TurnCount?: (number|null);

        /** S_PvpRoomRaceResult Fight */
        Fight?: (DcgProto.IS_PvpRoomRaceFight[]|null);

        /** S_PvpRoomRaceResult EndTime */
        EndTime?: (number|null);
    }

    /** Represents a S_PvpRoomRaceResult. */
    class S_PvpRoomRaceResult implements IS_PvpRoomRaceResult {

        /**
         * Constructs a new S_PvpRoomRaceResult.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PvpRoomRaceResult);

        /** S_PvpRoomRaceResult TurnCount. */
        public TurnCount: number;

        /** S_PvpRoomRaceResult Fight. */
        public Fight: DcgProto.IS_PvpRoomRaceFight[];

        /** S_PvpRoomRaceResult EndTime. */
        public EndTime: number;

        /**
         * Creates a new S_PvpRoomRaceResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PvpRoomRaceResult instance
         */
        public static create(properties?: DcgProto.IS_PvpRoomRaceResult): DcgProto.S_PvpRoomRaceResult;

        /**
         * Encodes the specified S_PvpRoomRaceResult message. Does not implicitly {@link DcgProto.S_PvpRoomRaceResult.verify|verify} messages.
         * @param m S_PvpRoomRaceResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PvpRoomRaceResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PvpRoomRaceResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PvpRoomRaceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PvpRoomRaceResult;

        /**
         * Verifies a S_PvpRoomRaceResult message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_PvpRoomRace. */
    interface IS_PvpRoomRace {

        /** S_PvpRoomRace RaceIID */
        RaceIID?: (Long|null);

        /** S_PvpRoomRace RaceMembers */
        RaceMembers?: (DcgProto.IS_PvpRoomRaceMember[]|null);

        /** S_PvpRoomRace TurnCount */
        TurnCount?: (number|null);

        /** S_PvpRoomRace RaceTurns */
        RaceTurns?: (DcgProto.IS_PvpRoomRaceResult[]|null);
    }

    /** Represents a S_PvpRoomRace. */
    class S_PvpRoomRace implements IS_PvpRoomRace {

        /**
         * Constructs a new S_PvpRoomRace.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_PvpRoomRace);

        /** S_PvpRoomRace RaceIID. */
        public RaceIID: Long;

        /** S_PvpRoomRace RaceMembers. */
        public RaceMembers: DcgProto.IS_PvpRoomRaceMember[];

        /** S_PvpRoomRace TurnCount. */
        public TurnCount: number;

        /** S_PvpRoomRace RaceTurns. */
        public RaceTurns: DcgProto.IS_PvpRoomRaceResult[];

        /**
         * Creates a new S_PvpRoomRace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_PvpRoomRace instance
         */
        public static create(properties?: DcgProto.IS_PvpRoomRace): DcgProto.S_PvpRoomRace;

        /**
         * Encodes the specified S_PvpRoomRace message. Does not implicitly {@link DcgProto.S_PvpRoomRace.verify|verify} messages.
         * @param m S_PvpRoomRace message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_PvpRoomRace, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PvpRoomRace message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_PvpRoomRace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_PvpRoomRace;

        /**
         * Verifies a S_PvpRoomRace message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Match. */
    interface IS_Match {

        /** S_Match InstanceId */
        InstanceId?: (Long|null);

        /** S_Match RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);
    }

    /** Represents a S_Match. */
    class S_Match implements IS_Match {

        /**
         * Constructs a new S_Match.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Match);

        /** S_Match InstanceId. */
        public InstanceId: Long;

        /** S_Match RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /**
         * Creates a new S_Match instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Match instance
         */
        public static create(properties?: DcgProto.IS_Match): DcgProto.S_Match;

        /**
         * Encodes the specified S_Match message. Does not implicitly {@link DcgProto.S_Match.verify|verify} messages.
         * @param m S_Match message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Match, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Match message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Match;

        /**
         * Verifies a S_Match message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Fight. */
    interface IS_Fight {

        /** S_Fight InstanceId */
        InstanceId?: (Long|null);

        /** S_Fight RoomData */
        RoomData?: (DcgProto.IS_RoomData|null);
    }

    /** Represents a S_Fight. */
    class S_Fight implements IS_Fight {

        /**
         * Constructs a new S_Fight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Fight);

        /** S_Fight InstanceId. */
        public InstanceId: Long;

        /** S_Fight RoomData. */
        public RoomData?: (DcgProto.IS_RoomData|null);

        /**
         * Creates a new S_Fight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Fight instance
         */
        public static create(properties?: DcgProto.IS_Fight): DcgProto.S_Fight;

        /**
         * Encodes the specified S_Fight message. Does not implicitly {@link DcgProto.S_Fight.verify|verify} messages.
         * @param m S_Fight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Fight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Fight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Fight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Fight;

        /**
         * Verifies a S_Fight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_BattleParams. */
    interface IS_BattleParams {

        /** S_BattleParams Action */
        Action?: (DcgProto.E_FIGHT_ACTION|null);

        /** S_BattleParams CardIIDA */
        CardIIDA?: (Long|null);

        /** S_BattleParams CardIIDB */
        CardIIDB?: (Long|null);

        /** S_BattleParams IIDList */
        IIDList?: (Long[]|null);

        /** S_BattleParams ParamNumber */
        ParamNumber?: (number|null);

        /** S_BattleParams Data */
        Data?: (string|null);

        /** S_BattleParams RequestId */
        RequestId?: (number|null);

        /** S_BattleParams NumberListA */
        NumberListA?: (number[]|null);

        /** S_BattleParams NumberListB */
        NumberListB?: (number[]|null);
    }

    /** Represents a S_BattleParams. */
    class S_BattleParams implements IS_BattleParams {

        /**
         * Constructs a new S_BattleParams.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_BattleParams);

        /** S_BattleParams Action. */
        public Action: DcgProto.E_FIGHT_ACTION;

        /** S_BattleParams CardIIDA. */
        public CardIIDA: Long;

        /** S_BattleParams CardIIDB. */
        public CardIIDB: Long;

        /** S_BattleParams IIDList. */
        public IIDList: Long[];

        /** S_BattleParams ParamNumber. */
        public ParamNumber: number;

        /** S_BattleParams Data. */
        public Data: string;

        /** S_BattleParams RequestId. */
        public RequestId: number;

        /** S_BattleParams NumberListA. */
        public NumberListA: number[];

        /** S_BattleParams NumberListB. */
        public NumberListB: number[];

        /**
         * Creates a new S_BattleParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_BattleParams instance
         */
        public static create(properties?: DcgProto.IS_BattleParams): DcgProto.S_BattleParams;

        /**
         * Encodes the specified S_BattleParams message. Does not implicitly {@link DcgProto.S_BattleParams.verify|verify} messages.
         * @param m S_BattleParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_BattleParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BattleParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_BattleParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_BattleParams;

        /**
         * Verifies a S_BattleParams message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_GmParams. */
    interface IS_GmParams {

        /** S_GmParams RoomIID */
        RoomIID?: (Long|null);

        /** S_GmParams DeckInfo */
        DeckInfo?: (DcgProto.IS_DeckInfo|null);

        /** S_GmParams Data */
        Data?: (string|null);

        /** S_GmParams MatchData */
        MatchData?: (DcgProto.IS_MatchData|null);

        /** S_GmParams ExtIID */
        ExtIID?: (Long|null);

        /** S_GmParams Params */
        Params?: (string[]|null);
    }

    /** Represents a S_GmParams. */
    class S_GmParams implements IS_GmParams {

        /**
         * Constructs a new S_GmParams.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_GmParams);

        /** S_GmParams RoomIID. */
        public RoomIID: Long;

        /** S_GmParams DeckInfo. */
        public DeckInfo?: (DcgProto.IS_DeckInfo|null);

        /** S_GmParams Data. */
        public Data: string;

        /** S_GmParams MatchData. */
        public MatchData?: (DcgProto.IS_MatchData|null);

        /** S_GmParams ExtIID. */
        public ExtIID: Long;

        /** S_GmParams Params. */
        public Params: string[];

        /**
         * Creates a new S_GmParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_GmParams instance
         */
        public static create(properties?: DcgProto.IS_GmParams): DcgProto.S_GmParams;

        /**
         * Encodes the specified S_GmParams message. Does not implicitly {@link DcgProto.S_GmParams.verify|verify} messages.
         * @param m S_GmParams message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_GmParams, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GmParams message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_GmParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_GmParams;

        /**
         * Verifies a S_GmParams message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_MatchData. */
    interface IS_MatchData {

        /** S_MatchData Action */
        Action?: (number|null);

        /** S_MatchData Score */
        Score?: (number|null);

        /** S_MatchData BattleCount */
        BattleCount?: (number|null);

        /** S_MatchData ConWin */
        ConWin?: (number|null);

        /** S_MatchData ConLost */
        ConLost?: (number|null);

        /** S_MatchData RealScore */
        RealScore?: (number|null);

        /** S_MatchData GroupCfgId */
        GroupCfgId?: (number|null);

        /** S_MatchData LastTotalCount */
        LastTotalCount?: (number|null);
    }

    /** Represents a S_MatchData. */
    class S_MatchData implements IS_MatchData {

        /**
         * Constructs a new S_MatchData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_MatchData);

        /** S_MatchData Action. */
        public Action: number;

        /** S_MatchData Score. */
        public Score: number;

        /** S_MatchData BattleCount. */
        public BattleCount: number;

        /** S_MatchData ConWin. */
        public ConWin: number;

        /** S_MatchData ConLost. */
        public ConLost: number;

        /** S_MatchData RealScore. */
        public RealScore: number;

        /** S_MatchData GroupCfgId. */
        public GroupCfgId: number;

        /** S_MatchData LastTotalCount. */
        public LastTotalCount: number;

        /**
         * Creates a new S_MatchData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_MatchData instance
         */
        public static create(properties?: DcgProto.IS_MatchData): DcgProto.S_MatchData;

        /**
         * Encodes the specified S_MatchData message. Does not implicitly {@link DcgProto.S_MatchData.verify|verify} messages.
         * @param m S_MatchData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_MatchData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MatchData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_MatchData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_MatchData;

        /**
         * Verifies a S_MatchData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoomRecord. */
    interface IS_RoomRecord {

        /** S_RoomRecord RoomIID */
        RoomIID?: (Long|null);

        /** S_RoomRecord RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);

        /** S_RoomRecord BattleResult */
        BattleResult?: (DcgProto.IS_BattleResult|null);
    }

    /** Represents a S_RoomRecord. */
    class S_RoomRecord implements IS_RoomRecord {

        /**
         * Constructs a new S_RoomRecord.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoomRecord);

        /** S_RoomRecord RoomIID. */
        public RoomIID: Long;

        /** S_RoomRecord RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /** S_RoomRecord BattleResult. */
        public BattleResult?: (DcgProto.IS_BattleResult|null);

        /**
         * Creates a new S_RoomRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoomRecord instance
         */
        public static create(properties?: DcgProto.IS_RoomRecord): DcgProto.S_RoomRecord;

        /**
         * Encodes the specified S_RoomRecord message. Does not implicitly {@link DcgProto.S_RoomRecord.verify|verify} messages.
         * @param m S_RoomRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoomRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoomRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoomRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoomRecord;

        /**
         * Verifies a S_RoomRecord message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Task. */
    interface IS_Task {

        /** S_Task InstanceId */
        InstanceId?: (Long|null);

        /** S_Task CfgId */
        CfgId?: (number|null);

        /** S_Task Status */
        Status?: (DcgProto.E_TaskStatus|null);

        /** S_Task CurStep */
        CurStep?: (number|null);

        /** S_Task TotalStep */
        TotalStep?: (number|null);
    }

    /** Represents a S_Task. */
    class S_Task implements IS_Task {

        /**
         * Constructs a new S_Task.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Task);

        /** S_Task InstanceId. */
        public InstanceId: Long;

        /** S_Task CfgId. */
        public CfgId: number;

        /** S_Task Status. */
        public Status: DcgProto.E_TaskStatus;

        /** S_Task CurStep. */
        public CurStep: number;

        /** S_Task TotalStep. */
        public TotalStep: number;

        /**
         * Creates a new S_Task instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Task instance
         */
        public static create(properties?: DcgProto.IS_Task): DcgProto.S_Task;

        /**
         * Encodes the specified S_Task message. Does not implicitly {@link DcgProto.S_Task.verify|verify} messages.
         * @param m S_Task message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Task, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Task message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Task;

        /**
         * Verifies a S_Task message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_StageTask. */
    interface IS_StageTask {

        /** S_StageTask InstanceId */
        InstanceId?: (Long|null);

        /** S_StageTask CfgId */
        CfgId?: (number|null);

        /** S_StageTask CurStep */
        CurStep?: (number|null);

        /** S_StageTask RewardStatus */
        RewardStatus?: (Long|null);

        /** S_StageTask EndTime */
        EndTime?: (number|null);
    }

    /** Represents a S_StageTask. */
    class S_StageTask implements IS_StageTask {

        /**
         * Constructs a new S_StageTask.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_StageTask);

        /** S_StageTask InstanceId. */
        public InstanceId: Long;

        /** S_StageTask CfgId. */
        public CfgId: number;

        /** S_StageTask CurStep. */
        public CurStep: number;

        /** S_StageTask RewardStatus. */
        public RewardStatus: Long;

        /** S_StageTask EndTime. */
        public EndTime: number;

        /**
         * Creates a new S_StageTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_StageTask instance
         */
        public static create(properties?: DcgProto.IS_StageTask): DcgProto.S_StageTask;

        /**
         * Encodes the specified S_StageTask message. Does not implicitly {@link DcgProto.S_StageTask.verify|verify} messages.
         * @param m S_StageTask message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_StageTask, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_StageTask message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_StageTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_StageTask;

        /**
         * Verifies a S_StageTask message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoleExtra. */
    interface IS_RoleExtra {

        /** S_RoleExtra Record */
        Record?: (DcgProto.IS_ExtraRecord|null);

        /** S_RoleExtra Guide */
        Guide?: (DcgProto.IS_ExtraGuide|null);
    }

    /** Represents a S_RoleExtra. */
    class S_RoleExtra implements IS_RoleExtra {

        /**
         * Constructs a new S_RoleExtra.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoleExtra);

        /** S_RoleExtra Record. */
        public Record?: (DcgProto.IS_ExtraRecord|null);

        /** S_RoleExtra Guide. */
        public Guide?: (DcgProto.IS_ExtraGuide|null);

        /**
         * Creates a new S_RoleExtra instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoleExtra instance
         */
        public static create(properties?: DcgProto.IS_RoleExtra): DcgProto.S_RoleExtra;

        /**
         * Encodes the specified S_RoleExtra message. Does not implicitly {@link DcgProto.S_RoleExtra.verify|verify} messages.
         * @param m S_RoleExtra message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoleExtra, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoleExtra message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoleExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoleExtra;

        /**
         * Verifies a S_RoleExtra message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ExtraRecord. */
    interface IS_ExtraRecord {

        /** S_ExtraRecord CurrDeckIID */
        CurrDeckIID?: (Long|null);
    }

    /** Represents a S_ExtraRecord. */
    class S_ExtraRecord implements IS_ExtraRecord {

        /**
         * Constructs a new S_ExtraRecord.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ExtraRecord);

        /** S_ExtraRecord CurrDeckIID. */
        public CurrDeckIID: Long;

        /**
         * Creates a new S_ExtraRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ExtraRecord instance
         */
        public static create(properties?: DcgProto.IS_ExtraRecord): DcgProto.S_ExtraRecord;

        /**
         * Encodes the specified S_ExtraRecord message. Does not implicitly {@link DcgProto.S_ExtraRecord.verify|verify} messages.
         * @param m S_ExtraRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ExtraRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ExtraRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ExtraRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ExtraRecord;

        /**
         * Verifies a S_ExtraRecord message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ExtraGuide. */
    interface IS_ExtraGuide {

        /** S_ExtraGuide FinishGuideCfgIds */
        FinishGuideCfgIds?: (number[]|null);
    }

    /** Represents a S_ExtraGuide. */
    class S_ExtraGuide implements IS_ExtraGuide {

        /**
         * Constructs a new S_ExtraGuide.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ExtraGuide);

        /** S_ExtraGuide FinishGuideCfgIds. */
        public FinishGuideCfgIds: number[];

        /**
         * Creates a new S_ExtraGuide instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ExtraGuide instance
         */
        public static create(properties?: DcgProto.IS_ExtraGuide): DcgProto.S_ExtraGuide;

        /**
         * Encodes the specified S_ExtraGuide message. Does not implicitly {@link DcgProto.S_ExtraGuide.verify|verify} messages.
         * @param m S_ExtraGuide message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ExtraGuide, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ExtraGuide message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ExtraGuide
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ExtraGuide;

        /**
         * Verifies a S_ExtraGuide message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Story. */
    interface IS_Story {

        /** S_Story InstanceId */
        InstanceId?: (Long|null);

        /** S_Story ChapterCfgId */
        ChapterCfgId?: (number|null);

        /** S_Story TaskType */
        TaskType?: (number|null);

        /** S_Story StageCfgId */
        StageCfgId?: (number|null);

        /** S_Story IsFinish */
        IsFinish?: (boolean|null);

        /** S_Story IsChapterReward */
        IsChapterReward?: (boolean|null);
    }

    /** Represents a S_Story. */
    class S_Story implements IS_Story {

        /**
         * Constructs a new S_Story.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Story);

        /** S_Story InstanceId. */
        public InstanceId: Long;

        /** S_Story ChapterCfgId. */
        public ChapterCfgId: number;

        /** S_Story TaskType. */
        public TaskType: number;

        /** S_Story StageCfgId. */
        public StageCfgId: number;

        /** S_Story IsFinish. */
        public IsFinish: boolean;

        /** S_Story IsChapterReward. */
        public IsChapterReward: boolean;

        /**
         * Creates a new S_Story instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Story instance
         */
        public static create(properties?: DcgProto.IS_Story): DcgProto.S_Story;

        /**
         * Encodes the specified S_Story message. Does not implicitly {@link DcgProto.S_Story.verify|verify} messages.
         * @param m S_Story message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Story, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Story message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Story
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Story;

        /**
         * Verifies a S_Story message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_Ranked. */
    interface IS_Ranked {

        /** S_Ranked HistorySeasons */
        HistorySeasons?: (DcgProto.IS_RankedSeason[]|null);
    }

    /** Represents a S_Ranked. */
    class S_Ranked implements IS_Ranked {

        /**
         * Constructs a new S_Ranked.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_Ranked);

        /** S_Ranked HistorySeasons. */
        public HistorySeasons: DcgProto.IS_RankedSeason[];

        /**
         * Creates a new S_Ranked instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_Ranked instance
         */
        public static create(properties?: DcgProto.IS_Ranked): DcgProto.S_Ranked;

        /**
         * Encodes the specified S_Ranked message. Does not implicitly {@link DcgProto.S_Ranked.verify|verify} messages.
         * @param m S_Ranked message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_Ranked, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_Ranked message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_Ranked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_Ranked;

        /**
         * Verifies a S_Ranked message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RankedSeason. */
    interface IS_RankedSeason {

        /** S_RankedSeason SeasonCount */
        SeasonCount?: (number|null);

        /** S_RankedSeason Stars */
        Stars?: (number|null);
    }

    /** Represents a S_RankedSeason. */
    class S_RankedSeason implements IS_RankedSeason {

        /**
         * Constructs a new S_RankedSeason.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RankedSeason);

        /** S_RankedSeason SeasonCount. */
        public SeasonCount: number;

        /** S_RankedSeason Stars. */
        public Stars: number;

        /**
         * Creates a new S_RankedSeason instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RankedSeason instance
         */
        public static create(properties?: DcgProto.IS_RankedSeason): DcgProto.S_RankedSeason;

        /**
         * Encodes the specified S_RankedSeason message. Does not implicitly {@link DcgProto.S_RankedSeason.verify|verify} messages.
         * @param m S_RankedSeason message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RankedSeason, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RankedSeason message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RankedSeason
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RankedSeason;

        /**
         * Verifies a S_RankedSeason message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_FightReplay. */
    interface IS_FightReplay {

        /** S_FightReplay RoomIID */
        RoomIID?: (Long|null);

        /** S_FightReplay RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);

        /** S_FightReplay CreateTime */
        CreateTime?: (number|null);

        /** S_FightReplay BattleData */
        BattleData?: (DcgProto.IS_ReplayBattleData|null);

        /** S_FightReplay PlayerOperates */
        PlayerOperates?: (DcgProto.IS_ReplayPlayerOperate[]|null);

        /** S_FightReplay Version */
        Version?: (number|null);
    }

    /** Represents a S_FightReplay. */
    class S_FightReplay implements IS_FightReplay {

        /**
         * Constructs a new S_FightReplay.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_FightReplay);

        /** S_FightReplay RoomIID. */
        public RoomIID: Long;

        /** S_FightReplay RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /** S_FightReplay CreateTime. */
        public CreateTime: number;

        /** S_FightReplay BattleData. */
        public BattleData?: (DcgProto.IS_ReplayBattleData|null);

        /** S_FightReplay PlayerOperates. */
        public PlayerOperates: DcgProto.IS_ReplayPlayerOperate[];

        /** S_FightReplay Version. */
        public Version: number;

        /**
         * Creates a new S_FightReplay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_FightReplay instance
         */
        public static create(properties?: DcgProto.IS_FightReplay): DcgProto.S_FightReplay;

        /**
         * Encodes the specified S_FightReplay message. Does not implicitly {@link DcgProto.S_FightReplay.verify|verify} messages.
         * @param m S_FightReplay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_FightReplay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FightReplay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_FightReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_FightReplay;

        /**
         * Verifies a S_FightReplay message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReplayBattleData. */
    interface IS_ReplayBattleData {

        /** S_ReplayBattleData ActionPlayerId */
        ActionPlayerId?: (Long|null);

        /** S_ReplayBattleData RoomType */
        RoomType?: (number|null);

        /** S_ReplayBattleData PlayerA */
        PlayerA?: (DcgProto.IS_ReplayPlayerData|null);

        /** S_ReplayBattleData PlayerB */
        PlayerB?: (DcgProto.IS_ReplayPlayerData|null);

        /** S_ReplayBattleData Cost */
        Cost?: (number|null);

        /** S_ReplayBattleData Round */
        Round?: (number|null);

        /** S_ReplayBattleData CustomRule */
        CustomRule?: (DcgProto.IS_ReplayCustomRule|null);

        /** S_ReplayBattleData Seed */
        Seed?: (Long|null);
    }

    /** Represents a S_ReplayBattleData. */
    class S_ReplayBattleData implements IS_ReplayBattleData {

        /**
         * Constructs a new S_ReplayBattleData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReplayBattleData);

        /** S_ReplayBattleData ActionPlayerId. */
        public ActionPlayerId: Long;

        /** S_ReplayBattleData RoomType. */
        public RoomType: number;

        /** S_ReplayBattleData PlayerA. */
        public PlayerA?: (DcgProto.IS_ReplayPlayerData|null);

        /** S_ReplayBattleData PlayerB. */
        public PlayerB?: (DcgProto.IS_ReplayPlayerData|null);

        /** S_ReplayBattleData Cost. */
        public Cost: number;

        /** S_ReplayBattleData Round. */
        public Round: number;

        /** S_ReplayBattleData CustomRule. */
        public CustomRule?: (DcgProto.IS_ReplayCustomRule|null);

        /** S_ReplayBattleData Seed. */
        public Seed: Long;

        /**
         * Creates a new S_ReplayBattleData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReplayBattleData instance
         */
        public static create(properties?: DcgProto.IS_ReplayBattleData): DcgProto.S_ReplayBattleData;

        /**
         * Encodes the specified S_ReplayBattleData message. Does not implicitly {@link DcgProto.S_ReplayBattleData.verify|verify} messages.
         * @param m S_ReplayBattleData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReplayBattleData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReplayBattleData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReplayBattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReplayBattleData;

        /**
         * Verifies a S_ReplayBattleData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReplayCustomRule. */
    interface IS_ReplayCustomRule {

        /** S_ReplayCustomRule PlayerADefenseCount */
        PlayerADefenseCount?: (number|null);

        /** S_ReplayCustomRule PlayerAHandCount */
        PlayerAHandCount?: (number|null);

        /** S_ReplayCustomRule PlayerABattle */
        PlayerABattle?: (number[]|null);

        /** S_ReplayCustomRule PlayerBDefenseCount */
        PlayerBDefenseCount?: (number|null);

        /** S_ReplayCustomRule PlayerBHandCount */
        PlayerBHandCount?: (number|null);

        /** S_ReplayCustomRule PlayerBBattle */
        PlayerBBattle?: (number[]|null);

        /** S_ReplayCustomRule PlayerAHatch */
        PlayerAHatch?: (number|null);

        /** S_ReplayCustomRule PlayerADiscardDeck */
        PlayerADiscardDeck?: (number|null);

        /** S_ReplayCustomRule PlayerAGM */
        PlayerAGM?: (string|null);

        /** S_ReplayCustomRule PlayerBHatch */
        PlayerBHatch?: (number|null);

        /** S_ReplayCustomRule PlayerBDiscardDeck */
        PlayerBDiscardDeck?: (number|null);

        /** S_ReplayCustomRule PlayerBGM */
        PlayerBGM?: (string|null);
    }

    /** Represents a S_ReplayCustomRule. */
    class S_ReplayCustomRule implements IS_ReplayCustomRule {

        /**
         * Constructs a new S_ReplayCustomRule.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReplayCustomRule);

        /** S_ReplayCustomRule PlayerADefenseCount. */
        public PlayerADefenseCount: number;

        /** S_ReplayCustomRule PlayerAHandCount. */
        public PlayerAHandCount: number;

        /** S_ReplayCustomRule PlayerABattle. */
        public PlayerABattle: number[];

        /** S_ReplayCustomRule PlayerBDefenseCount. */
        public PlayerBDefenseCount: number;

        /** S_ReplayCustomRule PlayerBHandCount. */
        public PlayerBHandCount: number;

        /** S_ReplayCustomRule PlayerBBattle. */
        public PlayerBBattle: number[];

        /** S_ReplayCustomRule PlayerAHatch. */
        public PlayerAHatch: number;

        /** S_ReplayCustomRule PlayerADiscardDeck. */
        public PlayerADiscardDeck: number;

        /** S_ReplayCustomRule PlayerAGM. */
        public PlayerAGM: string;

        /** S_ReplayCustomRule PlayerBHatch. */
        public PlayerBHatch: number;

        /** S_ReplayCustomRule PlayerBDiscardDeck. */
        public PlayerBDiscardDeck: number;

        /** S_ReplayCustomRule PlayerBGM. */
        public PlayerBGM: string;

        /**
         * Creates a new S_ReplayCustomRule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReplayCustomRule instance
         */
        public static create(properties?: DcgProto.IS_ReplayCustomRule): DcgProto.S_ReplayCustomRule;

        /**
         * Encodes the specified S_ReplayCustomRule message. Does not implicitly {@link DcgProto.S_ReplayCustomRule.verify|verify} messages.
         * @param m S_ReplayCustomRule message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReplayCustomRule, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReplayCustomRule message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReplayCustomRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReplayCustomRule;

        /**
         * Verifies a S_ReplayCustomRule message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReplayPlayerData. */
    interface IS_ReplayPlayerData {

        /** S_ReplayPlayerData PlayerId */
        PlayerId?: (Long|null);

        /** S_ReplayPlayerData StartCardId */
        StartCardId?: (Long|null);

        /** S_ReplayPlayerData NickName */
        NickName?: (string|null);

        /** S_ReplayPlayerData Deck */
        Deck?: (number[]|null);

        /** S_ReplayPlayerData Digitama */
        Digitama?: (number[]|null);

        /** S_ReplayPlayerData Level */
        Level?: (number|null);

        /** S_ReplayPlayerData Icon */
        Icon?: (number|null);

        /** S_ReplayPlayerData IconFrame */
        IconFrame?: (number|null);

        /** S_ReplayPlayerData Paper */
        Paper?: (number|null);

        /** S_ReplayPlayerData TitleIds */
        TitleIds?: (number|null);
    }

    /** Represents a S_ReplayPlayerData. */
    class S_ReplayPlayerData implements IS_ReplayPlayerData {

        /**
         * Constructs a new S_ReplayPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReplayPlayerData);

        /** S_ReplayPlayerData PlayerId. */
        public PlayerId: Long;

        /** S_ReplayPlayerData StartCardId. */
        public StartCardId: Long;

        /** S_ReplayPlayerData NickName. */
        public NickName: string;

        /** S_ReplayPlayerData Deck. */
        public Deck: number[];

        /** S_ReplayPlayerData Digitama. */
        public Digitama: number[];

        /** S_ReplayPlayerData Level. */
        public Level: number;

        /** S_ReplayPlayerData Icon. */
        public Icon: number;

        /** S_ReplayPlayerData IconFrame. */
        public IconFrame: number;

        /** S_ReplayPlayerData Paper. */
        public Paper: number;

        /** S_ReplayPlayerData TitleIds. */
        public TitleIds: number;

        /**
         * Creates a new S_ReplayPlayerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReplayPlayerData instance
         */
        public static create(properties?: DcgProto.IS_ReplayPlayerData): DcgProto.S_ReplayPlayerData;

        /**
         * Encodes the specified S_ReplayPlayerData message. Does not implicitly {@link DcgProto.S_ReplayPlayerData.verify|verify} messages.
         * @param m S_ReplayPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReplayPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReplayPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReplayPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReplayPlayerData;

        /**
         * Verifies a S_ReplayPlayerData message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ReplayPlayerOperate. */
    interface IS_ReplayPlayerOperate {

        /** S_ReplayPlayerOperate PlayerId */
        PlayerId?: (Long|null);

        /** S_ReplayPlayerOperate Type */
        Type?: (number|null);

        /** S_ReplayPlayerOperate Operate */
        Operate?: (DcgProto.IS_BattleParams|null);
    }

    /** Represents a S_ReplayPlayerOperate. */
    class S_ReplayPlayerOperate implements IS_ReplayPlayerOperate {

        /**
         * Constructs a new S_ReplayPlayerOperate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ReplayPlayerOperate);

        /** S_ReplayPlayerOperate PlayerId. */
        public PlayerId: Long;

        /** S_ReplayPlayerOperate Type. */
        public Type: number;

        /** S_ReplayPlayerOperate Operate. */
        public Operate?: (DcgProto.IS_BattleParams|null);

        /**
         * Creates a new S_ReplayPlayerOperate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ReplayPlayerOperate instance
         */
        public static create(properties?: DcgProto.IS_ReplayPlayerOperate): DcgProto.S_ReplayPlayerOperate;

        /**
         * Encodes the specified S_ReplayPlayerOperate message. Does not implicitly {@link DcgProto.S_ReplayPlayerOperate.verify|verify} messages.
         * @param m S_ReplayPlayerOperate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ReplayPlayerOperate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ReplayPlayerOperate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ReplayPlayerOperate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ReplayPlayerOperate;

        /**
         * Verifies a S_ReplayPlayerOperate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** E_Platform enum. */
    enum E_Platform {
        VISITOR = 0,
        OFFICIAL = 1,
        GOOGLE_PLAY = 2,
        APP_STORE = 3,
        FACEBOOK = 4,
        WX = 5,
        WU_FAN = 6,
        BAN_DAI = 7
    }

    /** E_ProductLine enum. */
    enum E_ProductLine {
        PL_NONE = 0,
        PL_TEST = 1,
        PL_VERSION = 2,
        PL_VERIFY = 3,
        PL_40000 = 9,
        PL_10000 = 10
    }

    /** E_ServerStatus enum. */
    enum E_ServerStatus {
        NOT_OPEN = 0,
        NORMAL = 1,
        HIGH = 2,
        OVERLOAD = 3,
        MAINTAINING = 4
    }

    /** E_GM_CMD enum. */
    enum E_GM_CMD {
        GGC_NONE = 0,
        GGC_SET_DECK = 1,
        GGC_ADD_ALL_CARD = 2,
        GGC_FIGHT = 3,
        GGC_MATCH = 4,
        GGC_DIGIMON_ADD_EXP = 5,
        GGC_CUSTOM = 6
    }

    /** E_PLAYER_STATUS enum. */
    enum E_PLAYER_STATUS {
        PS_NONE = 0,
        PS_MATCH = 1,
        PS_ROOM_JOIN = 2,
        PS_ROOM_FIGHT = 3,
        PS_PVP_WATCH = 4,
        PS_PERSONAL_ROOM = 5,
        PS_PVP_ROOM_RACE = 6
    }

    /** E_ROOM_STATUS enum. */
    enum E_ROOM_STATUS {
        RS_IDLE = 0,
        RS_CREATE = 1,
        RS_INIT = 2,
        RS_READY = 3,
        RS_FIGHT = 4,
        RS_END = 5,
        RS_CLOSE = 6
    }

    /** E_ROOM_TYPE enum. */
    enum E_ROOM_TYPE {
        RT_NORMAL = 0,
        RT_HIGH = 1
    }

    /** E_ROOM_MODE enum. */
    enum E_ROOM_MODE {
        ROOM_MODE_NONE = 0,
        ROOM_MODE_MATCH = 1,
        ROOM_MODE_FRIEND = 2,
        ROOM_MODE_RANKED = 3,
        ROOM_MODE_PVP = 4,
        ROOM_MODE_PVP_HISTORY = 5
    }

    /** E_BATTLE_PHASE enum. */
    enum E_BATTLE_PHASE {
        BP_NONE = 0,
        BP_INIT = 1,
        BP_BATTLE = 2,
        BP_ROUND_START = 3,
        BP_ACTIVE = 4,
        BP_DRAW_CARD = 5,
        BP_FOSTER = 6,
        BP_MAIN = 7,
        BP_OVER = 8
    }

    /** E_AREA_TYPE enum. */
    enum E_AREA_TYPE {
        AT_NONE = 0,
        AT_DECK = 1,
        AT_HAND = 2,
        AT_DEFENSE = 4,
        AT_GY = 8,
        AT_DIGITAMA = 16,
        AT_DIGITAMA_HATCH = 32,
        AT_IN_BATTLE = 64,
        AT_EVO = 128,
        AT_TOKEN = 256,
        AT_WAIT = 512,
        AT_BROWSE = 1024,
        AT_GLOBAL = 2048
    }

    /** E_ACTION_EFFECT_TYPE enum. */
    enum E_ACTION_EFFECT_TYPE {
        AET_NONE = 0,
        AET_ATTACK_DESTROY = 1,
        AET_EFFECT_DESTROY = 2,
        AET_ATK_ZERO_DESTROY = 3,
        AET_BATTLE_RETURN_HAND = 4,
        AET_BATTLE_RETURN_DECK = 5,
        AET_BATTLE_RETURN_DEFENSE = 6,
        AET_DEGENERATE = 7,
        AET_CARD_NOT_IN_BATTLE = 8
    }

    /** E_CARD_BATTLE_STATE enum. */
    enum E_CARD_BATTLE_STATE {
        CBS_NONE = 0,
        CBS_RESET = 1,
        CBS_ACTIVATE = 2
    }

    /** E_EVOLUTION_TYPE enum. */
    enum E_EVOLUTION_TYPE {
        ET_NONE = 0,
        ET_NORMAL = 1,
        ET_FUSION = 2
    }

    /** E_CHOOSE_DECIDE_TYPE enum. */
    enum E_CHOOSE_DECIDE_TYPE {
        CD_NONE = 0,
        CD_IF_USE = 1,
        CD_UP_OR_DOWN = 2,
        CD_EFFECT_INDEX = 3,
        CD_DEGENERATE = 4,
        CD_CHOOSE_NUM = 5
    }

    /** E_MOVE_REASON enum. */
    enum E_MOVE_REASON {
        MR_NONE = 0,
        MR_DRAW = 1,
        MR_APPOINT_DRAW = 2,
        MR_SET_DEFENSE = 3,
        MR_HATCH = 4,
        MR_HATCH_BATTLE = 5,
        MR_PLAY_TO_BATTLE = 6,
        MR_EFFECT_BATTLE = 7,
        MR_EFFECT_TO_BATTLE_AND_REST = 8,
        MR_CARD_EFFECT = 9,
        MR_DISCARD = 10,
        MR_DISCARD_EVOORIGIN = 11,
        MR_DEGENERATE = 12,
        MR_BATTLE_DESTORY = 13,
        MR_OTHER = 14,
        MR_EFFECT_DRAW = 15,
        MR_EVO_DRAW = 16,
        MR_RESTORE = 17,
        MR_BODY_LEAVE_BATTLE = 18
    }

    /** E_ATTACK_TYPE enum. */
    enum E_ATTACK_TYPE {
        ATK_NONE = 0,
        AT_DEFENSE_ATTACK = 1,
        AT_MONSTER_ATTACK = 2
    }

    /** E_FIGHT_ACTION enum. */
    enum E_FIGHT_ACTION {
        FC_NONE = 0,
        FC_ON_PLAYER_HATCH_DIGIMON = 1,
        FC_ON_DIGIMON_CARD_PLAY = 2,
        FC_ON_PLAYER_SET_NEXT_TURN = 3,
        FC_ON_DIGIMON_BATTLE = 4,
        FC_ON_DIGIMON_ATTACK_DEFENSE = 5,
        FC_ON_DIGIMON_EVO = 6,
        FC_ON_PLAYER_CHOOSE_ONE = 7,
        FC_ON_PLAYER_CHOOSE_MUL = 8,
        FC_ON_PLAYER_USE_DIGIMON_EFFECT_IN_BATTLE = 9,
        FC_ON_PLAYER_USE_FUSION_EVO = 10,
        FC_ON_PLAYER_SCENE_EVENT_PREPARED = 11,
        FC_ON_PLAYER_PLAYER_ACTIVATE_EFFECT = 12
    }

    /** E_COMPARE enum. */
    enum E_COMPARE {
        C_EQUAL_CARD_COUNT = 0,
        C_SORT = 1,
        C_LESS_THAN_OR_EQUAL = 2,
        GREATE_EQUAL = 3,
        C_OVER_ATTACK = 4
    }

    /** E_SHOW_TO_PLAYER_TYPE enum. */
    enum E_SHOW_TO_PLAYER_TYPE {
        STPT_NONE = 0,
        STPT_SELF = 1,
        STPT_OPPONENT = 2,
        STPT_BOTH = 3,
        SIPT_BOTH_CHECK = 4
    }

    /** E_CLIENT_SHOW_TYPE enum. */
    enum E_CLIENT_SHOW_TYPE {
        CST_NONE = 0,
        CST_CARD_EFFECT = 1,
        CST_CARD_EFFECT_OVER = 2,
        CST_CARD_ATTACK = 3,
        CST_CARD_ATTACK_OVER = 4,
        CST_CARD_ATTACK_JUDGE = 5,
        CST_CARD_SHOW_DEFENSE = 6,
        CST_OVER_BROWSE = 7,
        CST_CARD_EFFECT_DISTURB = 8,
        CST_CARD_EFFECT_PENETRATE = 9,
        CST_CARD_DEF_BE_PENETRATE = 10,
        CST_START_GAME_PLAYER_IF_CHANGE_CARDS = 11
    }

    /** E_CHANGE_DIGIMON_BATTLE_STATE_REASON enum. */
    enum E_CHANGE_DIGIMON_BATTLE_STATE_REASON {
        CDBSR_NONE = 0,
        CDBSR_BLOCK = 1
    }

    /** E_CARD_ATTRIBUTE enum. */
    enum E_CARD_ATTRIBUTE {
        CA_NONE = 0,
        CA_VACCINE = 1,
        CA_VIRUS = 2,
        CA_DATA = 3,
        CA_UNKNOWN = 4,
        CA_FREEDOM = 5
    }

    /** E_CARD_TYPE enum. */
    enum E_CARD_TYPE {
        CT_NONE = 0,
        CT_MONSTER = 1,
        CT_ROLE = 2,
        CT_MAGIC = 3,
        CT_DIGITAMA = 4
    }

    /** E_YesOrNo enum. */
    enum E_YesOrNo {
        NO = 0,
        YES = 1
    }

    /** E_ItemType enum. */
    enum E_ItemType {
        ITEM_TYPE_NONE = 0,
        ITEM_TYPE_RESOURCE = 1,
        ITEM_TYPE_RESOURCE_BAG = 2,
        ITEM_TYPE_DIGIMON_EGG = 3,
        ITEM_TYPE_SELECT_BAG = 4
    }

    /** E_DeckType enum. */
    enum E_DeckType {
        DECK_TYPE_NONE = 0,
        DECK_TYPE_NORMAL = 1,
        DECK_TYPE_ACTIVITY = 2,
        DECK_TYPE_GM = 3
    }

    /** E_CurrencyType enum. */
    enum E_CurrencyType {
        CURRENCY_TYPE_NONE = 0,
        CURRENCY_TYPE_DIAMOND = 1,
        CURRENCY_TYPE_CARD_TICKET = 2,
        CURRENCY_TYPE_MEMORY_MODULE = 3,
        CURRENCY_TYPE_MAGNETIC_CARD = 4,
        CURRENCY_TYPE_DATA_CHIP = 5
    }

    /** E_CardBagType enum. */
    enum E_CardBagType {
        CARD_BAG_TYPE_NONE = 0,
        CARD_BAG_TYPE_NORMAL = 1,
        CARD_BAG_TYPE_SECRET = 2,
        CARD_BAG_TYPE_REWARD = 3
    }

    /** E_MailNewStatus enum. */
    enum E_MailNewStatus {
        MAIL_NEW_STATUS_NONE = 0,
        MAIL_NEW_STATUS_UNREAD = 1,
        MAIL_NEW_STATUS_READ = 2,
        MAIL_NEW_STATUS_RECEIVE = 3,
        MAIL_NEW_STATUS_DEL = 4
    }

    /** E_MailNewType enum. */
    enum E_MailNewType {
        MAIL_NEW_TYPE_NONE = 0,
        MAIL_NEW_TYPE_SYS_NOTICE = 1,
        MAIL_NEW_TYPE_MATCH_FIGHT = 2,
        MAIL_NEW_TYPE_FRIEND_FIGHT = 3,
        MAIL_NEW_TYPE_PVP_ROOM_RANK = 5,
        MAIL_NEW_TYPE_CARD_OVERFLOW = 6,
        MAIL_NEW_TYPE_BOX_TASK_REWARD = 7,
        MAIL_NEW_TYPE_LOGIN_TASK_REWARD = 8,
        MAIL_NEW_TYPE_DIGIMON_OVERFLOW = 9
    }

    /** E_MailNewSender enum. */
    enum E_MailNewSender {
        MAIL_NEW_SENDER_NONE = 0,
        MAIL_NEW_SENDER_SYS = 1
    }

    /** E_MailTab enum. */
    enum E_MailTab {
        MAIL_TAB_NONE = 0,
        MAIL_TAB_SYS = 1
    }

    /** E_FightResult enum. */
    enum E_FightResult {
        FIGHT_RESULT_NONE = 0,
        FIGHT_RESULT_WIN = 1,
        FIGHT_RESULT_FAIL = 2,
        FIGHT_RESULT_TIE = 3
    }

    /** E_SearchType enum. */
    enum E_SearchType {
        SEARCH_NONE = 0,
        SEARCH_INSTANCE_IID = 1,
        SEARCH_NAME = 2,
        SEARCH_TITLE = 3,
        SEARCH_SHORT_ID = 4
    }

    /** E_Ope enum. */
    enum E_Ope {
        OPE_NONE = 0,
        OPE_AGREE = 1,
        OPE_REFUSE = 2
    }

    /** E_SystemMsgType enum. */
    enum E_SystemMsgType {
        SYSTEM_MSG_TYPE_NONE = 0
    }

    /** E_ACTIVITY_STATUS enum. */
    enum E_ACTIVITY_STATUS {
        ES_NONE = 0,
        ES_CREATE = 1,
        ES_INIT = 2,
        ES_READY = 3,
        ES_START = 4,
        ES_END = 5,
        ES_CLOSE = 6
    }

    /** E_GUESS_FIST enum. */
    enum E_GUESS_FIST {
        GF_ROCK = 0,
        GF_SCISSOR = 1,
        GF_CLOTH = 2
    }

    /** E_TaskStatus enum. */
    enum E_TaskStatus {
        TASK_STATUS_NONE = 0,
        TASK_STATUS_DOING = 1,
        TASK_STATUS_FINISH = 2,
        TASK_STATUS_HAS_GOT = 3,
        TASK_STATUS_NOT_UNLOCK = 4
    }

    /** E_TaskType enum. */
    enum E_TaskType {
        TASK_TYPE_NONE = 0,
        TASK_TYPE_MASTER = 1,
        TASK_TYPE_DAILY = 2,
        TASK_TYPE_BOX = 3,
        TASK_TYPE_LOGIN = 4,
        TASK_TYPE_GROWTH = 5
    }

    /** E_TaskCondType enum. */
    enum E_TaskCondType {
        TC_TYPE_NONE = 0,
        TC_TYPE_FIGHT_NUM_X = 1,
        TC_TYPE_CARD_COMPOSE_NUM_X = 2,
        TC_TYPE_CARD_DECOMPOSE_NUM_X = 3,
        TC_TYPE_COST_MEMORY_MODULE_NUM_X = 4,
        TC_TYPE_CREATE_FRIEND_ROOM_NUM_X = 5,
        TC_TYPE_FIGHTING_DRAW_CARD_NUM_X_MODE_Y = 6,
        TC_TYPE_FIGHTING_BLOCK_NUM_X = 7,
        TC_TYPE_FIGHTING_DEFENSE_NUM_X = 8,
        TC_TYPE_FIGHTING_KILL_NUM_X = 9,
        TC_TYPE_CURRENT_FIGHTING_DRAW_CARD_NUM_X = 10,
        TC_TYPE_CURRENT_FIGHTING_ATTACK_NUM_X = 11,
        TC_TYPE_TASK_POINTS_NUM_X = 100,
        TC_TYPE_LOGIN_NUM_X = 101,
        TC_TYPE_HISTORY_FRIEND_NUM_X = 102,
        TC_TYPE_SHOP_DRAW_CARD_BAG_NUM_X = 103,
        TC_TYPE_HISTORY_CARD_NUM_X = 104,
        TC_TYPE_FIGHT_WIN_NUM_X = 105
    }

    /** E_ExtraType enum. */
    enum E_ExtraType {
        ET_TYPE_NONE = 0,
        ET_TYPE_RECORD = 1,
        ET_TYPE_GUIDE = 2
    }

    /** E_EmoJiMode enum. */
    enum E_EmoJiMode {
        EMOJI_MODE_NONE = 0,
        EMOJI_MODE_PERSONAL_ROOM = 1,
        EMOJI_MODE_MULTI_ROOM = 2
    }

    /** E_ActiveState enum. */
    enum E_ActiveState {
        ACTIVE_STATE_NONE = 0,
        ACTIVE_STATE_INIT = 1,
        ACTIVE_STATE_ENROLL = 2,
        ACTIVE_STATE_READY = 3,
        ACTIVE_STATE_OPEN = 4,
        ACTIVE_STATE_END = 5,
        ACTIVE_STATE_CLOSE = 6
    }

    /** E_MATCH_MODULE enum. */
    enum E_MATCH_MODULE {
        MATCH_MODULE_NONE = 0,
        MATCH_MODULE_STREAK = 1,
        MATCH_MODULE_ELO = 2,
        MATCH_MODULE_DDP = 3,
        MATCH_MODULE_VAR = 4
    }

    /** E_ErrorCode enum. */
    enum E_ErrorCode {
        SUCCESS = 0,
        ERROR_UNKNOWN = -1,
        ERROR_LEN_NAME_OR_PWD = 101,
        ERROR_NAME_IS_EXIST = 102,
        ERROR_ACCOUNT_IS_NOT_EXIST = 103,
        ERROR_NAME_OR_PWD = 104,
        ERROR_BANDAI_GAME_ACCOUNT_EXISTS = 105,
        ERROR_BANDAI_ACCOUNT_IS_NOT_EXIST = 106,
        ERROR_TOKEN_NOT_FIT = 107,
        ERROR_FRAMEWORK_BAD_REQUEST = 400,
        ERROR_FRAMEWORK_NOT_FOUND = 404,
        ERROR_FRAMEWORK_UNKNOWN_CODE = 450,
        ERROR_FRAMEWORK_CLIENT_CLOSE_REQUEST = 499,
        ERROR_FRAMEWORK_INTERNAL_CODE = 500,
        ERROR_RPC_REQUEST_INTERNAL_CODE = 700,
        ERROR_RPC_REQUEST_SERVER_CLOSE = 701,
        ERROR_DATA_EXCEPTION = 1000,
        ERROR_FORMAT_PARAM = 1001,
        ERROR_LOST_PARAM = 1002,
        ERROR_PARAM_VALUE = 1003,
        ERROR_DECRYPT = 1004,
        ERROR_ENCRYPT = 1005,
        ERROR_DATA_EXPIRATION = 1006,
        ERROR_SERVER_STATUS = 1100,
        ERROR_ROLE_NOT_FOUND_IN_DB = 1101,
        ERROR_ROLE_NOT_IN_THIS_GAME = 1102,
        ERROR_SERVER_BUSY = 1103,
        ERROR_ROLE_NOT_LOGIN = 10000,
        ERROR_ROLE_OFFLINE = 10001,
        ERROR_ROLE_ACTION_LIMIT = 10002,
        ERROR_ROLE_BATTLE = 10003,
        ERROR_ROLE_FREQUENT_OPERATION = 10004,
        ERROR_PLAN_CONFIG = 10100,
        ERROR_DIAMOND_NOT_ENOUGH = 10101,
        ERROR_MATERIAL_NOT_ENOUGH = 10102,
        ERROR_NOT_ILLEGAL_NAME = 10103,
        ERROR_STORY_DATA_TOO_LONG = 10104,
        ERROR_GM_CONDITIONS_NOT_MET = 10105,
        ERROR_ROLE_NICKNAME_TOO_LONG = 10200,
        ERROR_ROOM_NOT_FOUND = 10300,
        ERROR_MATCHING = 10301,
        ERROR_NOT_MATCHING = 10302,
        ERROR_ROOM_NOT_QUIT = 10303,
        ERROR_ROOM_NOT_FIGHT = 10304,
        ERROR_ROOM_END = 10305,
        ERROR_ROOM_NOT_START_FIGHT = 10306,
        ERROR_ROOM_NOT_WATCH = 10307,
        ERROR_ROOM_WATCH_NUM_LIMIT = 10308,
        ERROR_DECK_NOT_EXIST = 10400,
        ERROR_DECK_ILLEGAL_NAME = 10401,
        ERROR_DECK_NUM_LIMIT = 10402,
        ERROR_DECK_SAME_CARD_NUM_LIMIT = 10403,
        ERROR_DECK_PARTS_NOT_EXIST = 10404,
        ERROR_DECK_CARD_NUM_NOT_ENOUGH = 10405,
        ERROR_DECK_PARTS_EXIST = 10406,
        ERROR_REWARD_CFG_NOT_FOUND = 10500,
        ERROR_CARD_NOT_EXIST = 10600,
        ERROR_CARD_NUM_NOT_ENOUGH = 10601,
        ERROR_ITEM_NOT_ENOUGH = 10700,
        ERROR_ITEM_CFG_NOT_FOUND = 10701,
        ERROR_ITEM_NO_USE = 10702,
        ERROR_ITEM_NOT_BATCH_USE = 10703,
        ERROR_SHOP_NOT_FOUND = 10800,
        ERROR_SHOP_BUY_NUM_IS_MAX = 10801,
        ERROR_SHOP_NO_GOODS_SHELVES = 10802,
        ERROR_CARD_BAG_NOT_EXIST = 10900,
        ERROR_CARD_BAG_NO_ACTIVATE = 10901,
        ERROR_CARD_BAG_EXPIRE = 10902,
        ERROR_CARD_BAG_BUY_MAX_LIMIT = 10903,
        ERROR_MAIL_NOT_FOUND = 11000,
        ERROR_MAIL_CFG_NOT_FOUND = 11001,
        ERROR_MAIL_NOT_DEL = 11002,
        ERROR_MAIL_NOT_SHARE = 11003,
        ERROR_MAIL_NOT_COLLECT = 11004,
        ERROR_MAIL_NOT_COLLECT_STATUS = 11005,
        ERROR_MAIL_COLLECT_STATUS = 11006,
        ERROR_MAIL_UN_RECEIVE_ATTACH = 11007,
        ERROR_MAIL_UNREAD = 11008,
        ERROR_MAIL_NO_UNREAD_STATUS = 11009,
        ERROR_MAIL_RECEIVE_ATTACH_STATUS = 11010,
        ERROR_MAIL_NO_ATTACH = 11011,
        ERROR_MAIL_SEND_FAIL = 11012,
        ERROR_MAIL_NOT_ONE_KEY_DEL_FAVORITE = 11013,
        ERROR_MAIL_NOT_RECEIVE_ATTACH_CARD_LIMIT = 11014,
        ERROR_MAIL_NOT_RECEIVE_ATTACH_NUM_LIMIT = 11015,
        ERROR_MAIL_NOT_RECEIVE_ATTACH_DIGIMON_LIMIT = 11016,
        ERROR_FRIEND_SEARCH_ROLE_NOT_EXIST = 11100,
        ERROR_FRIEND_SEARCH_INVALID_NAME = 11101,
        ERROR_FRIEND_NOT_EXIST = 11102,
        ERROR_FRIEND_EXIST = 11103,
        ERROR_FRIEND_APPLY_NOT_REPEAT = 11104,
        ERROR_FRIEND_BE_APPLY = 11105,
        ERROR_FRIEND_APPLY_NOT_SELF = 11106,
        ERROR_FRIEND_APPLY_NOT_CANCEL = 11107,
        ERROR_FRIEND_APPLY_INVALID = 11108,
        ERROR_FRIEND_APPLY_NOT_AGREE_REFUSE = 11109,
        ERROR_FRIEND_MEMBER_LIMIT = 11110,
        ERROR_FRIEND_APPLY_LIMIT = 11111,
        ERROR_FRIEND_APPLY_MEMBER_LIMIT = 11112,
        ERROR_PVP_INVITE_STATUS_ERR = 11300,
        ERROR_PVP_INVITE_NOT_MANY_TIMES = 11301,
        ERROR_PVP_INVITE_BE_APPLY = 11302,
        ERROR_PVP_INVITE_EXPIRE = 11303,
        ERROR_PVP_INVITE_FAIL_BATTLE = 11304,
        ERROR_PVP_INVITE_NOT_REPEAT = 11305,
        ERROR_PVP_INVITE_NO_ACCESS = 11306,
        ERROR_PVP_ROOM_NUM_LIMIT = 11400,
        ERROR_PVP_ROOM_HAVE_CREATE = 11401,
        ERROR_PVP_ROOM_NOT_EXIST = 11402,
        ERROR_PVP_ROOM_NO_ACCESS = 11403,
        ERROR_PVP_ROOM_NOT_MODIFY = 11404,
        ERROR_PVP_ROOM_JOIN_NUM_FULL = 11405,
        ERROR_PVP_ROOM_JOIN_NO_ACCESS = 11406,
        ERROR_PVP_ROOM_JOIN_NOT_REPEAT = 11407,
        ERROR_PVP_ROOM_MATCH = 11408,
        ERROR_PVP_ROOM_BEGIN_RACE = 11409,
        ERROR_PVP_ROOM_RACE_MISS = 11410,
        ERROR_PVP_ROOM_NOT_RACE = 11411,
        ERROR_PVP_ROOM_NOT_JOIN_RACE = 11412,
        ERROR_PVP_ROOM_NOT_QUIT_RACE = 11413,
        ERROR_PVP_ROOM_HAVE_JOIN = 11414,
        ERROR_PVP_ROOM_CREATE_CD = 11415,
        ERROR_PERSONAL_ROOM_STATUS_ERR = 11500,
        ERROR_PERSONAL_ROOM_NOT_EXIST = 11501,
        ERROR_PERSONAL_ROOM_JOIN_NUM_FULL = 11502,
        ERROR_PERSONAL_ROOM_QUIT = 11503,
        ERROR_PERSONAL_ROOM_NOT_BATTLE = 11504,
        ERROR_PERSONAL_ROOM_CREATE_CD = 11505,
        ERROR_PERSONAL_ROOM_NOT_READY = 11506,
        ERROR_PERSONAL_ROOM_NO_ACCESS = 11507,
        ERROR_TASK_NOT_FOUND = 11600,
        ERROR_TASK_NOT_FINISH = 11601,
        ERROR_TASK_REWARD_HAS_GOT = 11602,
        ERROR_TASK_IS_EXIST = 11603,
        ERROR_TASK_CFG_NOT_FOUND = 11604,
        ERROR_TASK_POINTS_NOT_ENOUGH = 11605,
        ERROR_TASK_BOX_REWARD_HAS_GOT = 11606,
        ERROR_TASK_REFRESH_LIMIT = 11607,
        ERROR_TASK_NO_REWARD = 11608,
        ERROR_STORY_CFG_NOT_FOUND = 11700,
        ERROR_STORY_NOT_FINISH = 11701,
        ERROR_STORY_STAGE_FINISH = 11702,
        ERROR_STORY_REWARD = 11703,
        ERROR_DIGIMON_CFG_NOT_FOUND = 11800,
        ERROR_DIGIMON_SAME_NOT_TRAIN = 11801,
        ERROR_DIGIMON_NOT_EVO = 11802,
        ERROR_DIGIMON_LEVEL_LIMIT = 11803,
        ERROR_BAG_LIMIT_DIGIMON = 11900,
        ERROR_RANKED_PHASE_REWARD = 12000,
        ERROR_RANKED_SEASON_END = 12001
    }

    /** Properties of a Req_DigimonTrain. */
    interface IReq_DigimonTrain {

        /** Req_DigimonTrain DigimonIID */
        DigimonIID?: (Long|null);
    }

    /** Represents a Req_DigimonTrain. */
    class Req_DigimonTrain implements IReq_DigimonTrain {

        /**
         * Constructs a new Req_DigimonTrain.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DigimonTrain);

        /** Req_DigimonTrain DigimonIID. */
        public DigimonIID: Long;

        /**
         * Creates a new Req_DigimonTrain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DigimonTrain instance
         */
        public static create(properties?: DcgProto.IReq_DigimonTrain): DcgProto.Req_DigimonTrain;

        /**
         * Encodes the specified Req_DigimonTrain message. Does not implicitly {@link DcgProto.Req_DigimonTrain.verify|verify} messages.
         * @param m Req_DigimonTrain message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DigimonTrain, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DigimonTrain message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DigimonTrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DigimonTrain;

        /**
         * Verifies a Req_DigimonTrain message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DigimonTrain. */
    interface IResp_DigimonTrain {

        /** Resp_DigimonTrain ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DigimonTrain Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DigimonTrain. */
    class Resp_DigimonTrain implements IResp_DigimonTrain {

        /**
         * Constructs a new Resp_DigimonTrain.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DigimonTrain);

        /** Resp_DigimonTrain ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DigimonTrain Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DigimonTrain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DigimonTrain instance
         */
        public static create(properties?: DcgProto.IResp_DigimonTrain): DcgProto.Resp_DigimonTrain;

        /**
         * Encodes the specified Resp_DigimonTrain message. Does not implicitly {@link DcgProto.Resp_DigimonTrain.verify|verify} messages.
         * @param m Resp_DigimonTrain message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DigimonTrain, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DigimonTrain message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DigimonTrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DigimonTrain;

        /**
         * Verifies a Resp_DigimonTrain message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DigimonEvo. */
    interface IReq_DigimonEvo {
    }

    /** Represents a Req_DigimonEvo. */
    class Req_DigimonEvo implements IReq_DigimonEvo {

        /**
         * Constructs a new Req_DigimonEvo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DigimonEvo);

        /**
         * Creates a new Req_DigimonEvo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DigimonEvo instance
         */
        public static create(properties?: DcgProto.IReq_DigimonEvo): DcgProto.Req_DigimonEvo;

        /**
         * Encodes the specified Req_DigimonEvo message. Does not implicitly {@link DcgProto.Req_DigimonEvo.verify|verify} messages.
         * @param m Req_DigimonEvo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DigimonEvo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DigimonEvo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DigimonEvo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DigimonEvo;

        /**
         * Verifies a Req_DigimonEvo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DigimonEvo. */
    interface IResp_DigimonEvo {

        /** Resp_DigimonEvo ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DigimonEvo Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DigimonEvo. */
    class Resp_DigimonEvo implements IResp_DigimonEvo {

        /**
         * Constructs a new Resp_DigimonEvo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DigimonEvo);

        /** Resp_DigimonEvo ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DigimonEvo Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DigimonEvo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DigimonEvo instance
         */
        public static create(properties?: DcgProto.IResp_DigimonEvo): DcgProto.Resp_DigimonEvo;

        /**
         * Encodes the specified Resp_DigimonEvo message. Does not implicitly {@link DcgProto.Resp_DigimonEvo.verify|verify} messages.
         * @param m Resp_DigimonEvo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DigimonEvo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DigimonEvo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DigimonEvo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DigimonEvo;

        /**
         * Verifies a Resp_DigimonEvo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DigimonExchange. */
    interface IReq_DigimonExchange {

        /** Req_DigimonExchange DigimonIID */
        DigimonIID?: (Long|null);

        /** Req_DigimonExchange CfgId */
        CfgId?: (number|null);
    }

    /** Represents a Req_DigimonExchange. */
    class Req_DigimonExchange implements IReq_DigimonExchange {

        /**
         * Constructs a new Req_DigimonExchange.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DigimonExchange);

        /** Req_DigimonExchange DigimonIID. */
        public DigimonIID: Long;

        /** Req_DigimonExchange CfgId. */
        public CfgId: number;

        /**
         * Creates a new Req_DigimonExchange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DigimonExchange instance
         */
        public static create(properties?: DcgProto.IReq_DigimonExchange): DcgProto.Req_DigimonExchange;

        /**
         * Encodes the specified Req_DigimonExchange message. Does not implicitly {@link DcgProto.Req_DigimonExchange.verify|verify} messages.
         * @param m Req_DigimonExchange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DigimonExchange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DigimonExchange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DigimonExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DigimonExchange;

        /**
         * Verifies a Req_DigimonExchange message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DigimonExchange. */
    interface IResp_DigimonExchange {

        /** Resp_DigimonExchange ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DigimonExchange Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DigimonExchange. */
    class Resp_DigimonExchange implements IResp_DigimonExchange {

        /**
         * Constructs a new Resp_DigimonExchange.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DigimonExchange);

        /** Resp_DigimonExchange ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DigimonExchange Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DigimonExchange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DigimonExchange instance
         */
        public static create(properties?: DcgProto.IResp_DigimonExchange): DcgProto.Resp_DigimonExchange;

        /**
         * Encodes the specified Resp_DigimonExchange message. Does not implicitly {@link DcgProto.Resp_DigimonExchange.verify|verify} messages.
         * @param m Resp_DigimonExchange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DigimonExchange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DigimonExchange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DigimonExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DigimonExchange;

        /**
         * Verifies a Resp_DigimonExchange message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DigimonLogs. */
    interface IReq_DigimonLogs {
    }

    /** Represents a Req_DigimonLogs. */
    class Req_DigimonLogs implements IReq_DigimonLogs {

        /**
         * Constructs a new Req_DigimonLogs.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DigimonLogs);

        /**
         * Creates a new Req_DigimonLogs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DigimonLogs instance
         */
        public static create(properties?: DcgProto.IReq_DigimonLogs): DcgProto.Req_DigimonLogs;

        /**
         * Encodes the specified Req_DigimonLogs message. Does not implicitly {@link DcgProto.Req_DigimonLogs.verify|verify} messages.
         * @param m Req_DigimonLogs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DigimonLogs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DigimonLogs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DigimonLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DigimonLogs;

        /**
         * Verifies a Req_DigimonLogs message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DigimonLogs. */
    interface IResp_DigimonLogs {

        /** Resp_DigimonLogs ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DigimonLogs Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_DigimonLogs Logs */
        Logs?: (DcgProto.IS_DigimonLogs[]|null);
    }

    /** Represents a Resp_DigimonLogs. */
    class Resp_DigimonLogs implements IResp_DigimonLogs {

        /**
         * Constructs a new Resp_DigimonLogs.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DigimonLogs);

        /** Resp_DigimonLogs ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DigimonLogs Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_DigimonLogs Logs. */
        public Logs: DcgProto.IS_DigimonLogs[];

        /**
         * Creates a new Resp_DigimonLogs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DigimonLogs instance
         */
        public static create(properties?: DcgProto.IResp_DigimonLogs): DcgProto.Resp_DigimonLogs;

        /**
         * Encodes the specified Resp_DigimonLogs message. Does not implicitly {@link DcgProto.Resp_DigimonLogs.verify|verify} messages.
         * @param m Resp_DigimonLogs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DigimonLogs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DigimonLogs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DigimonLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DigimonLogs;

        /**
         * Verifies a Resp_DigimonLogs message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_FriendList. */
    interface IReq_FriendList {
    }

    /** Represents a Req_FriendList. */
    class Req_FriendList implements IReq_FriendList {

        /**
         * Constructs a new Req_FriendList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_FriendList);

        /**
         * Creates a new Req_FriendList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_FriendList instance
         */
        public static create(properties?: DcgProto.IReq_FriendList): DcgProto.Req_FriendList;

        /**
         * Encodes the specified Req_FriendList message. Does not implicitly {@link DcgProto.Req_FriendList.verify|verify} messages.
         * @param m Req_FriendList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_FriendList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_FriendList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_FriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_FriendList;

        /**
         * Verifies a Req_FriendList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_FriendList. */
    interface IResp_FriendList {

        /** Resp_FriendList ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_FriendList Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_FriendList. */
    class Resp_FriendList implements IResp_FriendList {

        /**
         * Constructs a new Resp_FriendList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_FriendList);

        /** Resp_FriendList ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_FriendList Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_FriendList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_FriendList instance
         */
        public static create(properties?: DcgProto.IResp_FriendList): DcgProto.Resp_FriendList;

        /**
         * Encodes the specified Resp_FriendList message. Does not implicitly {@link DcgProto.Resp_FriendList.verify|verify} messages.
         * @param m Resp_FriendList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_FriendList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_FriendList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_FriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_FriendList;

        /**
         * Verifies a Resp_FriendList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_FriendApply. */
    interface IReq_FriendApply {

        /** Req_FriendApply RoleIID */
        RoleIID?: (Long|null);
    }

    /** Represents a Req_FriendApply. */
    class Req_FriendApply implements IReq_FriendApply {

        /**
         * Constructs a new Req_FriendApply.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_FriendApply);

        /** Req_FriendApply RoleIID. */
        public RoleIID: Long;

        /**
         * Creates a new Req_FriendApply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_FriendApply instance
         */
        public static create(properties?: DcgProto.IReq_FriendApply): DcgProto.Req_FriendApply;

        /**
         * Encodes the specified Req_FriendApply message. Does not implicitly {@link DcgProto.Req_FriendApply.verify|verify} messages.
         * @param m Req_FriendApply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_FriendApply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_FriendApply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_FriendApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_FriendApply;

        /**
         * Verifies a Req_FriendApply message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_FriendApply. */
    interface IResp_FriendApply {

        /** Resp_FriendApply ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_FriendApply Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_FriendApply. */
    class Resp_FriendApply implements IResp_FriendApply {

        /**
         * Constructs a new Resp_FriendApply.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_FriendApply);

        /** Resp_FriendApply ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_FriendApply Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_FriendApply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_FriendApply instance
         */
        public static create(properties?: DcgProto.IResp_FriendApply): DcgProto.Resp_FriendApply;

        /**
         * Encodes the specified Resp_FriendApply message. Does not implicitly {@link DcgProto.Resp_FriendApply.verify|verify} messages.
         * @param m Resp_FriendApply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_FriendApply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_FriendApply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_FriendApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_FriendApply;

        /**
         * Verifies a Resp_FriendApply message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_FriendApply. */
    interface IPush_FriendApply {

        /** Push_FriendApply Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_FriendApply. */
    class Push_FriendApply implements IPush_FriendApply {

        /**
         * Constructs a new Push_FriendApply.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_FriendApply);

        /** Push_FriendApply Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_FriendApply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_FriendApply instance
         */
        public static create(properties?: DcgProto.IPush_FriendApply): DcgProto.Push_FriendApply;

        /**
         * Encodes the specified Push_FriendApply message. Does not implicitly {@link DcgProto.Push_FriendApply.verify|verify} messages.
         * @param m Push_FriendApply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_FriendApply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_FriendApply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_FriendApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_FriendApply;

        /**
         * Verifies a Push_FriendApply message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_FriendApplyCancel. */
    interface IReq_FriendApplyCancel {

        /** Req_FriendApplyCancel ApplyIID */
        ApplyIID?: (Long|null);
    }

    /** Represents a Req_FriendApplyCancel. */
    class Req_FriendApplyCancel implements IReq_FriendApplyCancel {

        /**
         * Constructs a new Req_FriendApplyCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_FriendApplyCancel);

        /** Req_FriendApplyCancel ApplyIID. */
        public ApplyIID: Long;

        /**
         * Creates a new Req_FriendApplyCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_FriendApplyCancel instance
         */
        public static create(properties?: DcgProto.IReq_FriendApplyCancel): DcgProto.Req_FriendApplyCancel;

        /**
         * Encodes the specified Req_FriendApplyCancel message. Does not implicitly {@link DcgProto.Req_FriendApplyCancel.verify|verify} messages.
         * @param m Req_FriendApplyCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_FriendApplyCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_FriendApplyCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_FriendApplyCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_FriendApplyCancel;

        /**
         * Verifies a Req_FriendApplyCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_FriendApplyCancel. */
    interface IResp_FriendApplyCancel {

        /** Resp_FriendApplyCancel ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_FriendApplyCancel Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_FriendApplyCancel. */
    class Resp_FriendApplyCancel implements IResp_FriendApplyCancel {

        /**
         * Constructs a new Resp_FriendApplyCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_FriendApplyCancel);

        /** Resp_FriendApplyCancel ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_FriendApplyCancel Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_FriendApplyCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_FriendApplyCancel instance
         */
        public static create(properties?: DcgProto.IResp_FriendApplyCancel): DcgProto.Resp_FriendApplyCancel;

        /**
         * Encodes the specified Resp_FriendApplyCancel message. Does not implicitly {@link DcgProto.Resp_FriendApplyCancel.verify|verify} messages.
         * @param m Resp_FriendApplyCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_FriendApplyCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_FriendApplyCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_FriendApplyCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_FriendApplyCancel;

        /**
         * Verifies a Resp_FriendApplyCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_FriendApplyCancel. */
    interface IPush_FriendApplyCancel {

        /** Push_FriendApplyCancel Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_FriendApplyCancel. */
    class Push_FriendApplyCancel implements IPush_FriendApplyCancel {

        /**
         * Constructs a new Push_FriendApplyCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_FriendApplyCancel);

        /** Push_FriendApplyCancel Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_FriendApplyCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_FriendApplyCancel instance
         */
        public static create(properties?: DcgProto.IPush_FriendApplyCancel): DcgProto.Push_FriendApplyCancel;

        /**
         * Encodes the specified Push_FriendApplyCancel message. Does not implicitly {@link DcgProto.Push_FriendApplyCancel.verify|verify} messages.
         * @param m Push_FriendApplyCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_FriendApplyCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_FriendApplyCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_FriendApplyCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_FriendApplyCancel;

        /**
         * Verifies a Push_FriendApplyCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_FriendApplyAgreeOrRefuse. */
    interface IReq_FriendApplyAgreeOrRefuse {

        /** Req_FriendApplyAgreeOrRefuse ApplyIID */
        ApplyIID?: (Long|null);

        /** Req_FriendApplyAgreeOrRefuse Ope */
        Ope?: (DcgProto.E_Ope|null);
    }

    /** Represents a Req_FriendApplyAgreeOrRefuse. */
    class Req_FriendApplyAgreeOrRefuse implements IReq_FriendApplyAgreeOrRefuse {

        /**
         * Constructs a new Req_FriendApplyAgreeOrRefuse.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_FriendApplyAgreeOrRefuse);

        /** Req_FriendApplyAgreeOrRefuse ApplyIID. */
        public ApplyIID: Long;

        /** Req_FriendApplyAgreeOrRefuse Ope. */
        public Ope: DcgProto.E_Ope;

        /**
         * Creates a new Req_FriendApplyAgreeOrRefuse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_FriendApplyAgreeOrRefuse instance
         */
        public static create(properties?: DcgProto.IReq_FriendApplyAgreeOrRefuse): DcgProto.Req_FriendApplyAgreeOrRefuse;

        /**
         * Encodes the specified Req_FriendApplyAgreeOrRefuse message. Does not implicitly {@link DcgProto.Req_FriendApplyAgreeOrRefuse.verify|verify} messages.
         * @param m Req_FriendApplyAgreeOrRefuse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_FriendApplyAgreeOrRefuse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_FriendApplyAgreeOrRefuse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_FriendApplyAgreeOrRefuse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_FriendApplyAgreeOrRefuse;

        /**
         * Verifies a Req_FriendApplyAgreeOrRefuse message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_FriendApplyAgreeOrRefuse. */
    interface IResp_FriendApplyAgreeOrRefuse {

        /** Resp_FriendApplyAgreeOrRefuse ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_FriendApplyAgreeOrRefuse Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_FriendApplyAgreeOrRefuse. */
    class Resp_FriendApplyAgreeOrRefuse implements IResp_FriendApplyAgreeOrRefuse {

        /**
         * Constructs a new Resp_FriendApplyAgreeOrRefuse.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_FriendApplyAgreeOrRefuse);

        /** Resp_FriendApplyAgreeOrRefuse ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_FriendApplyAgreeOrRefuse Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_FriendApplyAgreeOrRefuse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_FriendApplyAgreeOrRefuse instance
         */
        public static create(properties?: DcgProto.IResp_FriendApplyAgreeOrRefuse): DcgProto.Resp_FriendApplyAgreeOrRefuse;

        /**
         * Encodes the specified Resp_FriendApplyAgreeOrRefuse message. Does not implicitly {@link DcgProto.Resp_FriendApplyAgreeOrRefuse.verify|verify} messages.
         * @param m Resp_FriendApplyAgreeOrRefuse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_FriendApplyAgreeOrRefuse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_FriendApplyAgreeOrRefuse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_FriendApplyAgreeOrRefuse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_FriendApplyAgreeOrRefuse;

        /**
         * Verifies a Resp_FriendApplyAgreeOrRefuse message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_FriendApplyAgreeOrRefuse. */
    interface IPush_FriendApplyAgreeOrRefuse {

        /** Push_FriendApplyAgreeOrRefuse Ope */
        Ope?: (DcgProto.E_Ope|null);

        /** Push_FriendApplyAgreeOrRefuse Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_FriendApplyAgreeOrRefuse. */
    class Push_FriendApplyAgreeOrRefuse implements IPush_FriendApplyAgreeOrRefuse {

        /**
         * Constructs a new Push_FriendApplyAgreeOrRefuse.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_FriendApplyAgreeOrRefuse);

        /** Push_FriendApplyAgreeOrRefuse Ope. */
        public Ope: DcgProto.E_Ope;

        /** Push_FriendApplyAgreeOrRefuse Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_FriendApplyAgreeOrRefuse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_FriendApplyAgreeOrRefuse instance
         */
        public static create(properties?: DcgProto.IPush_FriendApplyAgreeOrRefuse): DcgProto.Push_FriendApplyAgreeOrRefuse;

        /**
         * Encodes the specified Push_FriendApplyAgreeOrRefuse message. Does not implicitly {@link DcgProto.Push_FriendApplyAgreeOrRefuse.verify|verify} messages.
         * @param m Push_FriendApplyAgreeOrRefuse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_FriendApplyAgreeOrRefuse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_FriendApplyAgreeOrRefuse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_FriendApplyAgreeOrRefuse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_FriendApplyAgreeOrRefuse;

        /**
         * Verifies a Push_FriendApplyAgreeOrRefuse message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_FriendDelete. */
    interface IReq_FriendDelete {

        /** Req_FriendDelete FriendIID */
        FriendIID?: (Long|null);
    }

    /** Represents a Req_FriendDelete. */
    class Req_FriendDelete implements IReq_FriendDelete {

        /**
         * Constructs a new Req_FriendDelete.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_FriendDelete);

        /** Req_FriendDelete FriendIID. */
        public FriendIID: Long;

        /**
         * Creates a new Req_FriendDelete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_FriendDelete instance
         */
        public static create(properties?: DcgProto.IReq_FriendDelete): DcgProto.Req_FriendDelete;

        /**
         * Encodes the specified Req_FriendDelete message. Does not implicitly {@link DcgProto.Req_FriendDelete.verify|verify} messages.
         * @param m Req_FriendDelete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_FriendDelete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_FriendDelete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_FriendDelete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_FriendDelete;

        /**
         * Verifies a Req_FriendDelete message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_FriendDelete. */
    interface IResp_FriendDelete {

        /** Resp_FriendDelete ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_FriendDelete Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_FriendDelete. */
    class Resp_FriendDelete implements IResp_FriendDelete {

        /**
         * Constructs a new Resp_FriendDelete.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_FriendDelete);

        /** Resp_FriendDelete ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_FriendDelete Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_FriendDelete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_FriendDelete instance
         */
        public static create(properties?: DcgProto.IResp_FriendDelete): DcgProto.Resp_FriendDelete;

        /**
         * Encodes the specified Resp_FriendDelete message. Does not implicitly {@link DcgProto.Resp_FriendDelete.verify|verify} messages.
         * @param m Resp_FriendDelete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_FriendDelete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_FriendDelete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_FriendDelete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_FriendDelete;

        /**
         * Verifies a Resp_FriendDelete message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_FriendDelete. */
    interface IPush_FriendDelete {

        /** Push_FriendDelete Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_FriendDelete. */
    class Push_FriendDelete implements IPush_FriendDelete {

        /**
         * Constructs a new Push_FriendDelete.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_FriendDelete);

        /** Push_FriendDelete Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_FriendDelete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_FriendDelete instance
         */
        public static create(properties?: DcgProto.IPush_FriendDelete): DcgProto.Push_FriendDelete;

        /**
         * Encodes the specified Push_FriendDelete message. Does not implicitly {@link DcgProto.Push_FriendDelete.verify|verify} messages.
         * @param m Push_FriendDelete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_FriendDelete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_FriendDelete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_FriendDelete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_FriendDelete;

        /**
         * Verifies a Push_FriendDelete message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_FriendSearch. */
    interface IReq_FriendSearch {

        /** Req_FriendSearch SearchType */
        SearchType?: (DcgProto.E_SearchType|null);

        /** Req_FriendSearch NickName */
        NickName?: (string|null);

        /** Req_FriendSearch PlayerIID */
        PlayerIID?: (Long|null);

        /** Req_FriendSearch TitleIds */
        TitleIds?: (number[]|null);

        /** Req_FriendSearch Special */
        Special?: (boolean|null);

        /** Req_FriendSearch PlayerId */
        PlayerId?: (number|null);
    }

    /** Represents a Req_FriendSearch. */
    class Req_FriendSearch implements IReq_FriendSearch {

        /**
         * Constructs a new Req_FriendSearch.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_FriendSearch);

        /** Req_FriendSearch SearchType. */
        public SearchType: DcgProto.E_SearchType;

        /** Req_FriendSearch NickName. */
        public NickName: string;

        /** Req_FriendSearch PlayerIID. */
        public PlayerIID: Long;

        /** Req_FriendSearch TitleIds. */
        public TitleIds: number[];

        /** Req_FriendSearch Special. */
        public Special: boolean;

        /** Req_FriendSearch PlayerId. */
        public PlayerId: number;

        /**
         * Creates a new Req_FriendSearch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_FriendSearch instance
         */
        public static create(properties?: DcgProto.IReq_FriendSearch): DcgProto.Req_FriendSearch;

        /**
         * Encodes the specified Req_FriendSearch message. Does not implicitly {@link DcgProto.Req_FriendSearch.verify|verify} messages.
         * @param m Req_FriendSearch message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_FriendSearch, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_FriendSearch message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_FriendSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_FriendSearch;

        /**
         * Verifies a Req_FriendSearch message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_FriendSearch. */
    interface IResp_FriendSearch {

        /** Resp_FriendSearch ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_FriendSearch Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_FriendSearch RoleList */
        RoleList?: (DcgProto.IS_OtherRole[]|null);
    }

    /** Represents a Resp_FriendSearch. */
    class Resp_FriendSearch implements IResp_FriendSearch {

        /**
         * Constructs a new Resp_FriendSearch.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_FriendSearch);

        /** Resp_FriendSearch ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_FriendSearch Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_FriendSearch RoleList. */
        public RoleList: DcgProto.IS_OtherRole[];

        /**
         * Creates a new Resp_FriendSearch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_FriendSearch instance
         */
        public static create(properties?: DcgProto.IResp_FriendSearch): DcgProto.Resp_FriendSearch;

        /**
         * Encodes the specified Resp_FriendSearch message. Does not implicitly {@link DcgProto.Resp_FriendSearch.verify|verify} messages.
         * @param m Resp_FriendSearch message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_FriendSearch, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_FriendSearch message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_FriendSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_FriendSearch;

        /**
         * Verifies a Resp_FriendSearch message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_CollectMail. */
    interface IReq_CollectMail {

        /** Req_CollectMail MailIID */
        MailIID?: (Long|null);
    }

    /** Represents a Req_CollectMail. */
    class Req_CollectMail implements IReq_CollectMail {

        /**
         * Constructs a new Req_CollectMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_CollectMail);

        /** Req_CollectMail MailIID. */
        public MailIID: Long;

        /**
         * Creates a new Req_CollectMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_CollectMail instance
         */
        public static create(properties?: DcgProto.IReq_CollectMail): DcgProto.Req_CollectMail;

        /**
         * Encodes the specified Req_CollectMail message. Does not implicitly {@link DcgProto.Req_CollectMail.verify|verify} messages.
         * @param m Req_CollectMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_CollectMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_CollectMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_CollectMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_CollectMail;

        /**
         * Verifies a Req_CollectMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_CollectMail. */
    interface IResp_CollectMail {

        /** Resp_CollectMail ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_CollectMail Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_CollectMail. */
    class Resp_CollectMail implements IResp_CollectMail {

        /**
         * Constructs a new Resp_CollectMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_CollectMail);

        /** Resp_CollectMail ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_CollectMail Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_CollectMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_CollectMail instance
         */
        public static create(properties?: DcgProto.IResp_CollectMail): DcgProto.Resp_CollectMail;

        /**
         * Encodes the specified Resp_CollectMail message. Does not implicitly {@link DcgProto.Resp_CollectMail.verify|verify} messages.
         * @param m Resp_CollectMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_CollectMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_CollectMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_CollectMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_CollectMail;

        /**
         * Verifies a Resp_CollectMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_CancelCollectMail. */
    interface IReq_CancelCollectMail {

        /** Req_CancelCollectMail MailIID */
        MailIID?: (Long|null);
    }

    /** Represents a Req_CancelCollectMail. */
    class Req_CancelCollectMail implements IReq_CancelCollectMail {

        /**
         * Constructs a new Req_CancelCollectMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_CancelCollectMail);

        /** Req_CancelCollectMail MailIID. */
        public MailIID: Long;

        /**
         * Creates a new Req_CancelCollectMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_CancelCollectMail instance
         */
        public static create(properties?: DcgProto.IReq_CancelCollectMail): DcgProto.Req_CancelCollectMail;

        /**
         * Encodes the specified Req_CancelCollectMail message. Does not implicitly {@link DcgProto.Req_CancelCollectMail.verify|verify} messages.
         * @param m Req_CancelCollectMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_CancelCollectMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_CancelCollectMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_CancelCollectMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_CancelCollectMail;

        /**
         * Verifies a Req_CancelCollectMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_CancelCollectMail. */
    interface IResp_CancelCollectMail {

        /** Resp_CancelCollectMail ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_CancelCollectMail Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_CancelCollectMail. */
    class Resp_CancelCollectMail implements IResp_CancelCollectMail {

        /**
         * Constructs a new Resp_CancelCollectMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_CancelCollectMail);

        /** Resp_CancelCollectMail ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_CancelCollectMail Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_CancelCollectMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_CancelCollectMail instance
         */
        public static create(properties?: DcgProto.IResp_CancelCollectMail): DcgProto.Resp_CancelCollectMail;

        /**
         * Encodes the specified Resp_CancelCollectMail message. Does not implicitly {@link DcgProto.Resp_CancelCollectMail.verify|verify} messages.
         * @param m Resp_CancelCollectMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_CancelCollectMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_CancelCollectMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_CancelCollectMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_CancelCollectMail;

        /**
         * Verifies a Resp_CancelCollectMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_GetMailList. */
    interface IReq_GetMailList {

        /** Req_GetMailList MaxMailIID */
        MaxMailIID?: (Long|null);
    }

    /** Represents a Req_GetMailList. */
    class Req_GetMailList implements IReq_GetMailList {

        /**
         * Constructs a new Req_GetMailList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_GetMailList);

        /** Req_GetMailList MaxMailIID. */
        public MaxMailIID: Long;

        /**
         * Creates a new Req_GetMailList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_GetMailList instance
         */
        public static create(properties?: DcgProto.IReq_GetMailList): DcgProto.Req_GetMailList;

        /**
         * Encodes the specified Req_GetMailList message. Does not implicitly {@link DcgProto.Req_GetMailList.verify|verify} messages.
         * @param m Req_GetMailList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_GetMailList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_GetMailList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_GetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_GetMailList;

        /**
         * Verifies a Req_GetMailList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_GetMailList. */
    interface IResp_GetMailList {

        /** Resp_GetMailList ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_GetMailList Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_GetMailList. */
    class Resp_GetMailList implements IResp_GetMailList {

        /**
         * Constructs a new Resp_GetMailList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_GetMailList);

        /** Resp_GetMailList ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_GetMailList Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_GetMailList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_GetMailList instance
         */
        public static create(properties?: DcgProto.IResp_GetMailList): DcgProto.Resp_GetMailList;

        /**
         * Encodes the specified Resp_GetMailList message. Does not implicitly {@link DcgProto.Resp_GetMailList.verify|verify} messages.
         * @param m Resp_GetMailList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_GetMailList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_GetMailList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_GetMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_GetMailList;

        /**
         * Verifies a Resp_GetMailList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DelMail. */
    interface IReq_DelMail {

        /** Req_DelMail MailIID */
        MailIID?: (Long|null);
    }

    /** Represents a Req_DelMail. */
    class Req_DelMail implements IReq_DelMail {

        /**
         * Constructs a new Req_DelMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DelMail);

        /** Req_DelMail MailIID. */
        public MailIID: Long;

        /**
         * Creates a new Req_DelMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DelMail instance
         */
        public static create(properties?: DcgProto.IReq_DelMail): DcgProto.Req_DelMail;

        /**
         * Encodes the specified Req_DelMail message. Does not implicitly {@link DcgProto.Req_DelMail.verify|verify} messages.
         * @param m Req_DelMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DelMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DelMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DelMail;

        /**
         * Verifies a Req_DelMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DelMail. */
    interface IResp_DelMail {

        /** Resp_DelMail ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DelMail Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DelMail. */
    class Resp_DelMail implements IResp_DelMail {

        /**
         * Constructs a new Resp_DelMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DelMail);

        /** Resp_DelMail ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DelMail Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DelMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DelMail instance
         */
        public static create(properties?: DcgProto.IResp_DelMail): DcgProto.Resp_DelMail;

        /**
         * Encodes the specified Resp_DelMail message. Does not implicitly {@link DcgProto.Resp_DelMail.verify|verify} messages.
         * @param m Resp_DelMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DelMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DelMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DelMail;

        /**
         * Verifies a Resp_DelMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_ReadMail. */
    interface IReq_ReadMail {

        /** Req_ReadMail MailIID */
        MailIID?: (Long|null);
    }

    /** Represents a Req_ReadMail. */
    class Req_ReadMail implements IReq_ReadMail {

        /**
         * Constructs a new Req_ReadMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_ReadMail);

        /** Req_ReadMail MailIID. */
        public MailIID: Long;

        /**
         * Creates a new Req_ReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_ReadMail instance
         */
        public static create(properties?: DcgProto.IReq_ReadMail): DcgProto.Req_ReadMail;

        /**
         * Encodes the specified Req_ReadMail message. Does not implicitly {@link DcgProto.Req_ReadMail.verify|verify} messages.
         * @param m Req_ReadMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_ReadMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_ReadMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_ReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_ReadMail;

        /**
         * Verifies a Req_ReadMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_ReadMail. */
    interface IResp_ReadMail {

        /** Resp_ReadMail ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_ReadMail Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_ReadMail. */
    class Resp_ReadMail implements IResp_ReadMail {

        /**
         * Constructs a new Resp_ReadMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_ReadMail);

        /** Resp_ReadMail ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_ReadMail Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_ReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_ReadMail instance
         */
        public static create(properties?: DcgProto.IResp_ReadMail): DcgProto.Resp_ReadMail;

        /**
         * Encodes the specified Resp_ReadMail message. Does not implicitly {@link DcgProto.Resp_ReadMail.verify|verify} messages.
         * @param m Resp_ReadMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_ReadMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_ReadMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_ReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_ReadMail;

        /**
         * Verifies a Resp_ReadMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_ReceiveMailAttach. */
    interface IReq_ReceiveMailAttach {

        /** Req_ReceiveMailAttach MailIID */
        MailIID?: (Long|null);
    }

    /** Represents a Req_ReceiveMailAttach. */
    class Req_ReceiveMailAttach implements IReq_ReceiveMailAttach {

        /**
         * Constructs a new Req_ReceiveMailAttach.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_ReceiveMailAttach);

        /** Req_ReceiveMailAttach MailIID. */
        public MailIID: Long;

        /**
         * Creates a new Req_ReceiveMailAttach instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_ReceiveMailAttach instance
         */
        public static create(properties?: DcgProto.IReq_ReceiveMailAttach): DcgProto.Req_ReceiveMailAttach;

        /**
         * Encodes the specified Req_ReceiveMailAttach message. Does not implicitly {@link DcgProto.Req_ReceiveMailAttach.verify|verify} messages.
         * @param m Req_ReceiveMailAttach message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_ReceiveMailAttach, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_ReceiveMailAttach message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_ReceiveMailAttach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_ReceiveMailAttach;

        /**
         * Verifies a Req_ReceiveMailAttach message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_ReceiveMailAttach. */
    interface IResp_ReceiveMailAttach {

        /** Resp_ReceiveMailAttach ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_ReceiveMailAttach Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_ReceiveMailAttach. */
    class Resp_ReceiveMailAttach implements IResp_ReceiveMailAttach {

        /**
         * Constructs a new Resp_ReceiveMailAttach.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_ReceiveMailAttach);

        /** Resp_ReceiveMailAttach ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_ReceiveMailAttach Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_ReceiveMailAttach instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_ReceiveMailAttach instance
         */
        public static create(properties?: DcgProto.IResp_ReceiveMailAttach): DcgProto.Resp_ReceiveMailAttach;

        /**
         * Encodes the specified Resp_ReceiveMailAttach message. Does not implicitly {@link DcgProto.Resp_ReceiveMailAttach.verify|verify} messages.
         * @param m Resp_ReceiveMailAttach message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_ReceiveMailAttach, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_ReceiveMailAttach message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_ReceiveMailAttach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_ReceiveMailAttach;

        /**
         * Verifies a Resp_ReceiveMailAttach message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_OneKeyReadMail. */
    interface IReq_OneKeyReadMail {

        /** Req_OneKeyReadMail ShowType */
        ShowType?: (number|null);
    }

    /** Represents a Req_OneKeyReadMail. */
    class Req_OneKeyReadMail implements IReq_OneKeyReadMail {

        /**
         * Constructs a new Req_OneKeyReadMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_OneKeyReadMail);

        /** Req_OneKeyReadMail ShowType. */
        public ShowType: number;

        /**
         * Creates a new Req_OneKeyReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_OneKeyReadMail instance
         */
        public static create(properties?: DcgProto.IReq_OneKeyReadMail): DcgProto.Req_OneKeyReadMail;

        /**
         * Encodes the specified Req_OneKeyReadMail message. Does not implicitly {@link DcgProto.Req_OneKeyReadMail.verify|verify} messages.
         * @param m Req_OneKeyReadMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_OneKeyReadMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_OneKeyReadMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_OneKeyReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_OneKeyReadMail;

        /**
         * Verifies a Req_OneKeyReadMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_OneKeyReadMail. */
    interface IResp_OneKeyReadMail {

        /** Resp_OneKeyReadMail ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_OneKeyReadMail Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_OneKeyReadMail. */
    class Resp_OneKeyReadMail implements IResp_OneKeyReadMail {

        /**
         * Constructs a new Resp_OneKeyReadMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_OneKeyReadMail);

        /** Resp_OneKeyReadMail ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_OneKeyReadMail Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_OneKeyReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_OneKeyReadMail instance
         */
        public static create(properties?: DcgProto.IResp_OneKeyReadMail): DcgProto.Resp_OneKeyReadMail;

        /**
         * Encodes the specified Resp_OneKeyReadMail message. Does not implicitly {@link DcgProto.Resp_OneKeyReadMail.verify|verify} messages.
         * @param m Resp_OneKeyReadMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_OneKeyReadMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_OneKeyReadMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_OneKeyReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_OneKeyReadMail;

        /**
         * Verifies a Resp_OneKeyReadMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_OneKeyDelMail. */
    interface IReq_OneKeyDelMail {

        /** Req_OneKeyDelMail ShowType */
        ShowType?: (number|null);
    }

    /** Represents a Req_OneKeyDelMail. */
    class Req_OneKeyDelMail implements IReq_OneKeyDelMail {

        /**
         * Constructs a new Req_OneKeyDelMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_OneKeyDelMail);

        /** Req_OneKeyDelMail ShowType. */
        public ShowType: number;

        /**
         * Creates a new Req_OneKeyDelMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_OneKeyDelMail instance
         */
        public static create(properties?: DcgProto.IReq_OneKeyDelMail): DcgProto.Req_OneKeyDelMail;

        /**
         * Encodes the specified Req_OneKeyDelMail message. Does not implicitly {@link DcgProto.Req_OneKeyDelMail.verify|verify} messages.
         * @param m Req_OneKeyDelMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_OneKeyDelMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_OneKeyDelMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_OneKeyDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_OneKeyDelMail;

        /**
         * Verifies a Req_OneKeyDelMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_OneKeyDelMail. */
    interface IResp_OneKeyDelMail {

        /** Resp_OneKeyDelMail ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_OneKeyDelMail Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_OneKeyDelMail. */
    class Resp_OneKeyDelMail implements IResp_OneKeyDelMail {

        /**
         * Constructs a new Resp_OneKeyDelMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_OneKeyDelMail);

        /** Resp_OneKeyDelMail ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_OneKeyDelMail Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_OneKeyDelMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_OneKeyDelMail instance
         */
        public static create(properties?: DcgProto.IResp_OneKeyDelMail): DcgProto.Resp_OneKeyDelMail;

        /**
         * Encodes the specified Resp_OneKeyDelMail message. Does not implicitly {@link DcgProto.Resp_OneKeyDelMail.verify|verify} messages.
         * @param m Resp_OneKeyDelMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_OneKeyDelMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_OneKeyDelMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_OneKeyDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_OneKeyDelMail;

        /**
         * Verifies a Resp_OneKeyDelMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DebugAddMail. */
    interface IReq_DebugAddMail {

        /** Req_DebugAddMail MailType */
        MailType?: (DcgProto.E_MailNewType|null);

        /** Req_DebugAddMail SendFrom */
        SendFrom?: (string|null);

        /** Req_DebugAddMail SendFromId */
        SendFromId?: (Long|null);

        /** Req_DebugAddMail MailParam */
        MailParam?: (DcgProto.IS_MailParam|null);

        /** Req_DebugAddMail Attach */
        Attach?: (DcgProto.IS_Item[]|null);

        /** Req_DebugAddMail AccountId */
        AccountId?: (Long|null);
    }

    /** Represents a Req_DebugAddMail. */
    class Req_DebugAddMail implements IReq_DebugAddMail {

        /**
         * Constructs a new Req_DebugAddMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DebugAddMail);

        /** Req_DebugAddMail MailType. */
        public MailType: DcgProto.E_MailNewType;

        /** Req_DebugAddMail SendFrom. */
        public SendFrom: string;

        /** Req_DebugAddMail SendFromId. */
        public SendFromId: Long;

        /** Req_DebugAddMail MailParam. */
        public MailParam?: (DcgProto.IS_MailParam|null);

        /** Req_DebugAddMail Attach. */
        public Attach: DcgProto.IS_Item[];

        /** Req_DebugAddMail AccountId. */
        public AccountId: Long;

        /**
         * Creates a new Req_DebugAddMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DebugAddMail instance
         */
        public static create(properties?: DcgProto.IReq_DebugAddMail): DcgProto.Req_DebugAddMail;

        /**
         * Encodes the specified Req_DebugAddMail message. Does not implicitly {@link DcgProto.Req_DebugAddMail.verify|verify} messages.
         * @param m Req_DebugAddMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DebugAddMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DebugAddMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DebugAddMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DebugAddMail;

        /**
         * Verifies a Req_DebugAddMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DebugAddMail. */
    interface IResp_DebugAddMail {

        /** Resp_DebugAddMail ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DebugAddMail Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DebugAddMail. */
    class Resp_DebugAddMail implements IResp_DebugAddMail {

        /**
         * Constructs a new Resp_DebugAddMail.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DebugAddMail);

        /** Resp_DebugAddMail ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DebugAddMail Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DebugAddMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DebugAddMail instance
         */
        public static create(properties?: DcgProto.IResp_DebugAddMail): DcgProto.Resp_DebugAddMail;

        /**
         * Encodes the specified Resp_DebugAddMail message. Does not implicitly {@link DcgProto.Resp_DebugAddMail.verify|verify} messages.
         * @param m Resp_DebugAddMail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DebugAddMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DebugAddMail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DebugAddMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DebugAddMail;

        /**
         * Verifies a Resp_DebugAddMail message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpInvite. */
    interface IReq_PvpInvite {

        /** Req_PvpInvite RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);

        /** Req_PvpInvite RoleIID */
        RoleIID?: (Long|null);

        /** Req_PvpInvite RoomIID */
        RoomIID?: (Long|null);
    }

    /** Represents a Req_PvpInvite. */
    class Req_PvpInvite implements IReq_PvpInvite {

        /**
         * Constructs a new Req_PvpInvite.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpInvite);

        /** Req_PvpInvite RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /** Req_PvpInvite RoleIID. */
        public RoleIID: Long;

        /** Req_PvpInvite RoomIID. */
        public RoomIID: Long;

        /**
         * Creates a new Req_PvpInvite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpInvite instance
         */
        public static create(properties?: DcgProto.IReq_PvpInvite): DcgProto.Req_PvpInvite;

        /**
         * Encodes the specified Req_PvpInvite message. Does not implicitly {@link DcgProto.Req_PvpInvite.verify|verify} messages.
         * @param m Req_PvpInvite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpInvite, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpInvite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpInvite;

        /**
         * Verifies a Req_PvpInvite message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpInvite. */
    interface IResp_PvpInvite {

        /** Resp_PvpInvite ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpInvite Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpInvite. */
    class Resp_PvpInvite implements IResp_PvpInvite {

        /**
         * Constructs a new Resp_PvpInvite.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpInvite);

        /** Resp_PvpInvite ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpInvite Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpInvite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpInvite instance
         */
        public static create(properties?: DcgProto.IResp_PvpInvite): DcgProto.Resp_PvpInvite;

        /**
         * Encodes the specified Resp_PvpInvite message. Does not implicitly {@link DcgProto.Resp_PvpInvite.verify|verify} messages.
         * @param m Resp_PvpInvite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpInvite, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpInvite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpInvite;

        /**
         * Verifies a Resp_PvpInvite message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_PvpInvite. */
    interface IPush_PvpInvite {

        /** Push_PvpInvite Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_PvpInvite. */
    class Push_PvpInvite implements IPush_PvpInvite {

        /**
         * Constructs a new Push_PvpInvite.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_PvpInvite);

        /** Push_PvpInvite Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_PvpInvite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_PvpInvite instance
         */
        public static create(properties?: DcgProto.IPush_PvpInvite): DcgProto.Push_PvpInvite;

        /**
         * Encodes the specified Push_PvpInvite message. Does not implicitly {@link DcgProto.Push_PvpInvite.verify|verify} messages.
         * @param m Push_PvpInvite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_PvpInvite, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_PvpInvite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_PvpInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_PvpInvite;

        /**
         * Verifies a Push_PvpInvite message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpInviteCancel. */
    interface IReq_PvpInviteCancel {

        /** Req_PvpInviteCancel InviteIID */
        InviteIID?: (Long|null);
    }

    /** Represents a Req_PvpInviteCancel. */
    class Req_PvpInviteCancel implements IReq_PvpInviteCancel {

        /**
         * Constructs a new Req_PvpInviteCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpInviteCancel);

        /** Req_PvpInviteCancel InviteIID. */
        public InviteIID: Long;

        /**
         * Creates a new Req_PvpInviteCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpInviteCancel instance
         */
        public static create(properties?: DcgProto.IReq_PvpInviteCancel): DcgProto.Req_PvpInviteCancel;

        /**
         * Encodes the specified Req_PvpInviteCancel message. Does not implicitly {@link DcgProto.Req_PvpInviteCancel.verify|verify} messages.
         * @param m Req_PvpInviteCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpInviteCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpInviteCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpInviteCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpInviteCancel;

        /**
         * Verifies a Req_PvpInviteCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpInviteCancel. */
    interface IResp_PvpInviteCancel {

        /** Resp_PvpInviteCancel ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpInviteCancel Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpInviteCancel. */
    class Resp_PvpInviteCancel implements IResp_PvpInviteCancel {

        /**
         * Constructs a new Resp_PvpInviteCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpInviteCancel);

        /** Resp_PvpInviteCancel ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpInviteCancel Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpInviteCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpInviteCancel instance
         */
        public static create(properties?: DcgProto.IResp_PvpInviteCancel): DcgProto.Resp_PvpInviteCancel;

        /**
         * Encodes the specified Resp_PvpInviteCancel message. Does not implicitly {@link DcgProto.Resp_PvpInviteCancel.verify|verify} messages.
         * @param m Resp_PvpInviteCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpInviteCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpInviteCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpInviteCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpInviteCancel;

        /**
         * Verifies a Resp_PvpInviteCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_PvpInviteCancel. */
    interface IPush_PvpInviteCancel {

        /** Push_PvpInviteCancel Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_PvpInviteCancel. */
    class Push_PvpInviteCancel implements IPush_PvpInviteCancel {

        /**
         * Constructs a new Push_PvpInviteCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_PvpInviteCancel);

        /** Push_PvpInviteCancel Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_PvpInviteCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_PvpInviteCancel instance
         */
        public static create(properties?: DcgProto.IPush_PvpInviteCancel): DcgProto.Push_PvpInviteCancel;

        /**
         * Encodes the specified Push_PvpInviteCancel message. Does not implicitly {@link DcgProto.Push_PvpInviteCancel.verify|verify} messages.
         * @param m Push_PvpInviteCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_PvpInviteCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_PvpInviteCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_PvpInviteCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_PvpInviteCancel;

        /**
         * Verifies a Push_PvpInviteCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpInviteAgreeOrRefuse. */
    interface IReq_PvpInviteAgreeOrRefuse {

        /** Req_PvpInviteAgreeOrRefuse Ope */
        Ope?: (DcgProto.E_Ope|null);

        /** Req_PvpInviteAgreeOrRefuse InviteIID */
        InviteIID?: (Long|null);
    }

    /** Represents a Req_PvpInviteAgreeOrRefuse. */
    class Req_PvpInviteAgreeOrRefuse implements IReq_PvpInviteAgreeOrRefuse {

        /**
         * Constructs a new Req_PvpInviteAgreeOrRefuse.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpInviteAgreeOrRefuse);

        /** Req_PvpInviteAgreeOrRefuse Ope. */
        public Ope: DcgProto.E_Ope;

        /** Req_PvpInviteAgreeOrRefuse InviteIID. */
        public InviteIID: Long;

        /**
         * Creates a new Req_PvpInviteAgreeOrRefuse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpInviteAgreeOrRefuse instance
         */
        public static create(properties?: DcgProto.IReq_PvpInviteAgreeOrRefuse): DcgProto.Req_PvpInviteAgreeOrRefuse;

        /**
         * Encodes the specified Req_PvpInviteAgreeOrRefuse message. Does not implicitly {@link DcgProto.Req_PvpInviteAgreeOrRefuse.verify|verify} messages.
         * @param m Req_PvpInviteAgreeOrRefuse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpInviteAgreeOrRefuse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpInviteAgreeOrRefuse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpInviteAgreeOrRefuse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpInviteAgreeOrRefuse;

        /**
         * Verifies a Req_PvpInviteAgreeOrRefuse message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpInviteAgreeOrRefuse. */
    interface IResp_PvpInviteAgreeOrRefuse {

        /** Resp_PvpInviteAgreeOrRefuse ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpInviteAgreeOrRefuse Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpInviteAgreeOrRefuse. */
    class Resp_PvpInviteAgreeOrRefuse implements IResp_PvpInviteAgreeOrRefuse {

        /**
         * Constructs a new Resp_PvpInviteAgreeOrRefuse.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpInviteAgreeOrRefuse);

        /** Resp_PvpInviteAgreeOrRefuse ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpInviteAgreeOrRefuse Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpInviteAgreeOrRefuse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpInviteAgreeOrRefuse instance
         */
        public static create(properties?: DcgProto.IResp_PvpInviteAgreeOrRefuse): DcgProto.Resp_PvpInviteAgreeOrRefuse;

        /**
         * Encodes the specified Resp_PvpInviteAgreeOrRefuse message. Does not implicitly {@link DcgProto.Resp_PvpInviteAgreeOrRefuse.verify|verify} messages.
         * @param m Resp_PvpInviteAgreeOrRefuse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpInviteAgreeOrRefuse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpInviteAgreeOrRefuse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpInviteAgreeOrRefuse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpInviteAgreeOrRefuse;

        /**
         * Verifies a Resp_PvpInviteAgreeOrRefuse message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_PvpInviteAgreeOrRefuse. */
    interface IPush_PvpInviteAgreeOrRefuse {

        /** Push_PvpInviteAgreeOrRefuse Ope */
        Ope?: (DcgProto.E_Ope|null);

        /** Push_PvpInviteAgreeOrRefuse Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_PvpInviteAgreeOrRefuse. */
    class Push_PvpInviteAgreeOrRefuse implements IPush_PvpInviteAgreeOrRefuse {

        /**
         * Constructs a new Push_PvpInviteAgreeOrRefuse.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_PvpInviteAgreeOrRefuse);

        /** Push_PvpInviteAgreeOrRefuse Ope. */
        public Ope: DcgProto.E_Ope;

        /** Push_PvpInviteAgreeOrRefuse Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_PvpInviteAgreeOrRefuse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_PvpInviteAgreeOrRefuse instance
         */
        public static create(properties?: DcgProto.IPush_PvpInviteAgreeOrRefuse): DcgProto.Push_PvpInviteAgreeOrRefuse;

        /**
         * Encodes the specified Push_PvpInviteAgreeOrRefuse message. Does not implicitly {@link DcgProto.Push_PvpInviteAgreeOrRefuse.verify|verify} messages.
         * @param m Push_PvpInviteAgreeOrRefuse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_PvpInviteAgreeOrRefuse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_PvpInviteAgreeOrRefuse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_PvpInviteAgreeOrRefuse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_PvpInviteAgreeOrRefuse;

        /**
         * Verifies a Push_PvpInviteAgreeOrRefuse message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_MatchStart. */
    interface IReq_MatchStart {

        /** Req_MatchStart DeckIID */
        DeckIID?: (Long|null);

        /** Req_MatchStart RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);
    }

    /** Represents a Req_MatchStart. */
    class Req_MatchStart implements IReq_MatchStart {

        /**
         * Constructs a new Req_MatchStart.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_MatchStart);

        /** Req_MatchStart DeckIID. */
        public DeckIID: Long;

        /** Req_MatchStart RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /**
         * Creates a new Req_MatchStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_MatchStart instance
         */
        public static create(properties?: DcgProto.IReq_MatchStart): DcgProto.Req_MatchStart;

        /**
         * Encodes the specified Req_MatchStart message. Does not implicitly {@link DcgProto.Req_MatchStart.verify|verify} messages.
         * @param m Req_MatchStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_MatchStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_MatchStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_MatchStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_MatchStart;

        /**
         * Verifies a Req_MatchStart message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_MatchStart. */
    interface IResp_MatchStart {

        /** Resp_MatchStart ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_MatchStart Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_MatchStart. */
    class Resp_MatchStart implements IResp_MatchStart {

        /**
         * Constructs a new Resp_MatchStart.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_MatchStart);

        /** Resp_MatchStart ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_MatchStart Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_MatchStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_MatchStart instance
         */
        public static create(properties?: DcgProto.IResp_MatchStart): DcgProto.Resp_MatchStart;

        /**
         * Encodes the specified Resp_MatchStart message. Does not implicitly {@link DcgProto.Resp_MatchStart.verify|verify} messages.
         * @param m Resp_MatchStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_MatchStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_MatchStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_MatchStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_MatchStart;

        /**
         * Verifies a Resp_MatchStart message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_MatchCancel. */
    interface IReq_MatchCancel {

        /** Req_MatchCancel RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);
    }

    /** Represents a Req_MatchCancel. */
    class Req_MatchCancel implements IReq_MatchCancel {

        /**
         * Constructs a new Req_MatchCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_MatchCancel);

        /** Req_MatchCancel RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /**
         * Creates a new Req_MatchCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_MatchCancel instance
         */
        public static create(properties?: DcgProto.IReq_MatchCancel): DcgProto.Req_MatchCancel;

        /**
         * Encodes the specified Req_MatchCancel message. Does not implicitly {@link DcgProto.Req_MatchCancel.verify|verify} messages.
         * @param m Req_MatchCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_MatchCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_MatchCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_MatchCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_MatchCancel;

        /**
         * Verifies a Req_MatchCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_MatchCancel. */
    interface IResp_MatchCancel {

        /** Resp_MatchCancel ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_MatchCancel Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_MatchCancel. */
    class Resp_MatchCancel implements IResp_MatchCancel {

        /**
         * Constructs a new Resp_MatchCancel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_MatchCancel);

        /** Resp_MatchCancel ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_MatchCancel Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_MatchCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_MatchCancel instance
         */
        public static create(properties?: DcgProto.IResp_MatchCancel): DcgProto.Resp_MatchCancel;

        /**
         * Encodes the specified Resp_MatchCancel message. Does not implicitly {@link DcgProto.Resp_MatchCancel.verify|verify} messages.
         * @param m Resp_MatchCancel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_MatchCancel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_MatchCancel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_MatchCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_MatchCancel;

        /**
         * Verifies a Resp_MatchCancel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_RoomInfo. */
    interface IPush_RoomInfo {

        /** Push_RoomInfo RoomData */
        RoomData?: (DcgProto.IS_RoomData|null);

        /** Push_RoomInfo ReconnectData */
        ReconnectData?: (DcgProto.IS_ReconnectData|null);
    }

    /** Represents a Push_RoomInfo. */
    class Push_RoomInfo implements IPush_RoomInfo {

        /**
         * Constructs a new Push_RoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_RoomInfo);

        /** Push_RoomInfo RoomData. */
        public RoomData?: (DcgProto.IS_RoomData|null);

        /** Push_RoomInfo ReconnectData. */
        public ReconnectData?: (DcgProto.IS_ReconnectData|null);

        /**
         * Creates a new Push_RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_RoomInfo instance
         */
        public static create(properties?: DcgProto.IPush_RoomInfo): DcgProto.Push_RoomInfo;

        /**
         * Encodes the specified Push_RoomInfo message. Does not implicitly {@link DcgProto.Push_RoomInfo.verify|verify} messages.
         * @param m Push_RoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_RoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_RoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_RoomInfo;

        /**
         * Verifies a Push_RoomInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoomJoin. */
    interface IReq_RoomJoin {

        /** Req_RoomJoin RoomIID */
        RoomIID?: (Long|null);

        /** Req_RoomJoin DeckIID */
        DeckIID?: (Long|null);
    }

    /** Represents a Req_RoomJoin. */
    class Req_RoomJoin implements IReq_RoomJoin {

        /**
         * Constructs a new Req_RoomJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoomJoin);

        /** Req_RoomJoin RoomIID. */
        public RoomIID: Long;

        /** Req_RoomJoin DeckIID. */
        public DeckIID: Long;

        /**
         * Creates a new Req_RoomJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoomJoin instance
         */
        public static create(properties?: DcgProto.IReq_RoomJoin): DcgProto.Req_RoomJoin;

        /**
         * Encodes the specified Req_RoomJoin message. Does not implicitly {@link DcgProto.Req_RoomJoin.verify|verify} messages.
         * @param m Req_RoomJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoomJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoomJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoomJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoomJoin;

        /**
         * Verifies a Req_RoomJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoomJoin. */
    interface IResp_RoomJoin {

        /** Resp_RoomJoin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoomJoin Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RoomJoin. */
    class Resp_RoomJoin implements IResp_RoomJoin {

        /**
         * Constructs a new Resp_RoomJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoomJoin);

        /** Resp_RoomJoin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoomJoin Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RoomJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoomJoin instance
         */
        public static create(properties?: DcgProto.IResp_RoomJoin): DcgProto.Resp_RoomJoin;

        /**
         * Encodes the specified Resp_RoomJoin message. Does not implicitly {@link DcgProto.Resp_RoomJoin.verify|verify} messages.
         * @param m Resp_RoomJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoomJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoomJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoomJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoomJoin;

        /**
         * Verifies a Resp_RoomJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoomQuit. */
    interface IReq_RoomQuit {

        /** Req_RoomQuit RoomIID */
        RoomIID?: (Long|null);
    }

    /** Represents a Req_RoomQuit. */
    class Req_RoomQuit implements IReq_RoomQuit {

        /**
         * Constructs a new Req_RoomQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoomQuit);

        /** Req_RoomQuit RoomIID. */
        public RoomIID: Long;

        /**
         * Creates a new Req_RoomQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoomQuit instance
         */
        public static create(properties?: DcgProto.IReq_RoomQuit): DcgProto.Req_RoomQuit;

        /**
         * Encodes the specified Req_RoomQuit message. Does not implicitly {@link DcgProto.Req_RoomQuit.verify|verify} messages.
         * @param m Req_RoomQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoomQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoomQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoomQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoomQuit;

        /**
         * Verifies a Req_RoomQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoomQuit. */
    interface IResp_RoomQuit {

        /** Resp_RoomQuit ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoomQuit Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RoomQuit. */
    class Resp_RoomQuit implements IResp_RoomQuit {

        /**
         * Constructs a new Resp_RoomQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoomQuit);

        /** Resp_RoomQuit ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoomQuit Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RoomQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoomQuit instance
         */
        public static create(properties?: DcgProto.IResp_RoomQuit): DcgProto.Resp_RoomQuit;

        /**
         * Encodes the specified Resp_RoomQuit message. Does not implicitly {@link DcgProto.Resp_RoomQuit.verify|verify} messages.
         * @param m Resp_RoomQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoomQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoomQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoomQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoomQuit;

        /**
         * Verifies a Resp_RoomQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoomFight. */
    interface IReq_RoomFight {

        /** Req_RoomFight RoomIID */
        RoomIID?: (Long|null);

        /** Req_RoomFight BattleParams */
        BattleParams?: (DcgProto.IS_BattleParams|null);
    }

    /** Represents a Req_RoomFight. */
    class Req_RoomFight implements IReq_RoomFight {

        /**
         * Constructs a new Req_RoomFight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoomFight);

        /** Req_RoomFight RoomIID. */
        public RoomIID: Long;

        /** Req_RoomFight BattleParams. */
        public BattleParams?: (DcgProto.IS_BattleParams|null);

        /**
         * Creates a new Req_RoomFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoomFight instance
         */
        public static create(properties?: DcgProto.IReq_RoomFight): DcgProto.Req_RoomFight;

        /**
         * Encodes the specified Req_RoomFight message. Does not implicitly {@link DcgProto.Req_RoomFight.verify|verify} messages.
         * @param m Req_RoomFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoomFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoomFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoomFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoomFight;

        /**
         * Verifies a Req_RoomFight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoomFight. */
    interface IResp_RoomFight {

        /** Resp_RoomFight ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoomFight Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RoomFight. */
    class Resp_RoomFight implements IResp_RoomFight {

        /**
         * Constructs a new Resp_RoomFight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoomFight);

        /** Resp_RoomFight ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoomFight Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RoomFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoomFight instance
         */
        public static create(properties?: DcgProto.IResp_RoomFight): DcgProto.Resp_RoomFight;

        /**
         * Encodes the specified Resp_RoomFight message. Does not implicitly {@link DcgProto.Resp_RoomFight.verify|verify} messages.
         * @param m Resp_RoomFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoomFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoomFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoomFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoomFight;

        /**
         * Verifies a Resp_RoomFight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_RoomFight. */
    interface IPush_RoomFight {

        /** Push_RoomFight Data */
        Data?: (string|null);

        /** Push_RoomFight RoomFights */
        RoomFights?: (DcgProto.IS_RoomFight[]|null);

        /** Push_RoomFight FrameIndex */
        FrameIndex?: (number|null);
    }

    /** Represents a Push_RoomFight. */
    class Push_RoomFight implements IPush_RoomFight {

        /**
         * Constructs a new Push_RoomFight.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_RoomFight);

        /** Push_RoomFight Data. */
        public Data: string;

        /** Push_RoomFight RoomFights. */
        public RoomFights: DcgProto.IS_RoomFight[];

        /** Push_RoomFight FrameIndex. */
        public FrameIndex: number;

        /**
         * Creates a new Push_RoomFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_RoomFight instance
         */
        public static create(properties?: DcgProto.IPush_RoomFight): DcgProto.Push_RoomFight;

        /**
         * Encodes the specified Push_RoomFight message. Does not implicitly {@link DcgProto.Push_RoomFight.verify|verify} messages.
         * @param m Push_RoomFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_RoomFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_RoomFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_RoomFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_RoomFight;

        /**
         * Verifies a Push_RoomFight message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoomFightInfo. */
    interface IReq_RoomFightInfo {

        /** Req_RoomFightInfo RoomIID */
        RoomIID?: (Long|null);

        /** Req_RoomFightInfo FrameIndex */
        FrameIndex?: (number|null);
    }

    /** Represents a Req_RoomFightInfo. */
    class Req_RoomFightInfo implements IReq_RoomFightInfo {

        /**
         * Constructs a new Req_RoomFightInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoomFightInfo);

        /** Req_RoomFightInfo RoomIID. */
        public RoomIID: Long;

        /** Req_RoomFightInfo FrameIndex. */
        public FrameIndex: number;

        /**
         * Creates a new Req_RoomFightInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoomFightInfo instance
         */
        public static create(properties?: DcgProto.IReq_RoomFightInfo): DcgProto.Req_RoomFightInfo;

        /**
         * Encodes the specified Req_RoomFightInfo message. Does not implicitly {@link DcgProto.Req_RoomFightInfo.verify|verify} messages.
         * @param m Req_RoomFightInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoomFightInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoomFightInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoomFightInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoomFightInfo;

        /**
         * Verifies a Req_RoomFightInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoomFightInfo. */
    interface IResp_RoomFightInfo {

        /** Resp_RoomFightInfo ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoomFightInfo Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoomFightInfo RoomFights */
        RoomFights?: (DcgProto.IPush_RoomFight[]|null);
    }

    /** Represents a Resp_RoomFightInfo. */
    class Resp_RoomFightInfo implements IResp_RoomFightInfo {

        /**
         * Constructs a new Resp_RoomFightInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoomFightInfo);

        /** Resp_RoomFightInfo ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoomFightInfo Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoomFightInfo RoomFights. */
        public RoomFights: DcgProto.IPush_RoomFight[];

        /**
         * Creates a new Resp_RoomFightInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoomFightInfo instance
         */
        public static create(properties?: DcgProto.IResp_RoomFightInfo): DcgProto.Resp_RoomFightInfo;

        /**
         * Encodes the specified Resp_RoomFightInfo message. Does not implicitly {@link DcgProto.Resp_RoomFightInfo.verify|verify} messages.
         * @param m Resp_RoomFightInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoomFightInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoomFightInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoomFightInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoomFightInfo;

        /**
         * Verifies a Resp_RoomFightInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoomRecordList. */
    interface IReq_RoomRecordList {

        /** Req_RoomRecordList RoleIID */
        RoleIID?: (Long|null);
    }

    /** Represents a Req_RoomRecordList. */
    class Req_RoomRecordList implements IReq_RoomRecordList {

        /**
         * Constructs a new Req_RoomRecordList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoomRecordList);

        /** Req_RoomRecordList RoleIID. */
        public RoleIID: Long;

        /**
         * Creates a new Req_RoomRecordList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoomRecordList instance
         */
        public static create(properties?: DcgProto.IReq_RoomRecordList): DcgProto.Req_RoomRecordList;

        /**
         * Encodes the specified Req_RoomRecordList message. Does not implicitly {@link DcgProto.Req_RoomRecordList.verify|verify} messages.
         * @param m Req_RoomRecordList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoomRecordList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoomRecordList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoomRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoomRecordList;

        /**
         * Verifies a Req_RoomRecordList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoomRecordList. */
    interface IResp_RoomRecordList {

        /** Resp_RoomRecordList ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoomRecordList Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoomRecordList RoomRecords */
        RoomRecords?: (DcgProto.IS_RoomRecord[]|null);
    }

    /** Represents a Resp_RoomRecordList. */
    class Resp_RoomRecordList implements IResp_RoomRecordList {

        /**
         * Constructs a new Resp_RoomRecordList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoomRecordList);

        /** Resp_RoomRecordList ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoomRecordList Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoomRecordList RoomRecords. */
        public RoomRecords: DcgProto.IS_RoomRecord[];

        /**
         * Creates a new Resp_RoomRecordList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoomRecordList instance
         */
        public static create(properties?: DcgProto.IResp_RoomRecordList): DcgProto.Resp_RoomRecordList;

        /**
         * Encodes the specified Resp_RoomRecordList message. Does not implicitly {@link DcgProto.Resp_RoomRecordList.verify|verify} messages.
         * @param m Resp_RoomRecordList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoomRecordList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoomRecordList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoomRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoomRecordList;

        /**
         * Verifies a Resp_RoomRecordList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomCreate. */
    interface IReq_PersonalRoomCreate {

        /** Req_PersonalRoomCreate Viewer */
        Viewer?: (boolean|null);
    }

    /** Represents a Req_PersonalRoomCreate. */
    class Req_PersonalRoomCreate implements IReq_PersonalRoomCreate {

        /**
         * Constructs a new Req_PersonalRoomCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomCreate);

        /** Req_PersonalRoomCreate Viewer. */
        public Viewer: boolean;

        /**
         * Creates a new Req_PersonalRoomCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomCreate instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomCreate): DcgProto.Req_PersonalRoomCreate;

        /**
         * Encodes the specified Req_PersonalRoomCreate message. Does not implicitly {@link DcgProto.Req_PersonalRoomCreate.verify|verify} messages.
         * @param m Req_PersonalRoomCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomCreate;

        /**
         * Verifies a Req_PersonalRoomCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomCreate. */
    interface IResp_PersonalRoomCreate {

        /** Resp_PersonalRoomCreate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomCreate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PersonalRoomCreate. */
    class Resp_PersonalRoomCreate implements IResp_PersonalRoomCreate {

        /**
         * Constructs a new Resp_PersonalRoomCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomCreate);

        /** Resp_PersonalRoomCreate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomCreate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PersonalRoomCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomCreate instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomCreate): DcgProto.Resp_PersonalRoomCreate;

        /**
         * Encodes the specified Resp_PersonalRoomCreate message. Does not implicitly {@link DcgProto.Resp_PersonalRoomCreate.verify|verify} messages.
         * @param m Resp_PersonalRoomCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomCreate;

        /**
         * Verifies a Resp_PersonalRoomCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomUpdate. */
    interface IReq_PersonalRoomUpdate {

        /** Req_PersonalRoomUpdate Viewer */
        Viewer?: (boolean|null);
    }

    /** Represents a Req_PersonalRoomUpdate. */
    class Req_PersonalRoomUpdate implements IReq_PersonalRoomUpdate {

        /**
         * Constructs a new Req_PersonalRoomUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomUpdate);

        /** Req_PersonalRoomUpdate Viewer. */
        public Viewer: boolean;

        /**
         * Creates a new Req_PersonalRoomUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomUpdate instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomUpdate): DcgProto.Req_PersonalRoomUpdate;

        /**
         * Encodes the specified Req_PersonalRoomUpdate message. Does not implicitly {@link DcgProto.Req_PersonalRoomUpdate.verify|verify} messages.
         * @param m Req_PersonalRoomUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomUpdate;

        /**
         * Verifies a Req_PersonalRoomUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomUpdate. */
    interface IResp_PersonalRoomUpdate {

        /** Resp_PersonalRoomUpdate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomUpdate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PersonalRoomUpdate. */
    class Resp_PersonalRoomUpdate implements IResp_PersonalRoomUpdate {

        /**
         * Constructs a new Resp_PersonalRoomUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomUpdate);

        /** Resp_PersonalRoomUpdate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomUpdate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PersonalRoomUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomUpdate instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomUpdate): DcgProto.Resp_PersonalRoomUpdate;

        /**
         * Encodes the specified Resp_PersonalRoomUpdate message. Does not implicitly {@link DcgProto.Resp_PersonalRoomUpdate.verify|verify} messages.
         * @param m Resp_PersonalRoomUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomUpdate;

        /**
         * Verifies a Resp_PersonalRoomUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomJoin. */
    interface IReq_PersonalRoomJoin {

        /** Req_PersonalRoomJoin PersonalRoomIID */
        PersonalRoomIID?: (Long|null);
    }

    /** Represents a Req_PersonalRoomJoin. */
    class Req_PersonalRoomJoin implements IReq_PersonalRoomJoin {

        /**
         * Constructs a new Req_PersonalRoomJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomJoin);

        /** Req_PersonalRoomJoin PersonalRoomIID. */
        public PersonalRoomIID: Long;

        /**
         * Creates a new Req_PersonalRoomJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomJoin instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomJoin): DcgProto.Req_PersonalRoomJoin;

        /**
         * Encodes the specified Req_PersonalRoomJoin message. Does not implicitly {@link DcgProto.Req_PersonalRoomJoin.verify|verify} messages.
         * @param m Req_PersonalRoomJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomJoin;

        /**
         * Verifies a Req_PersonalRoomJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomJoin. */
    interface IResp_PersonalRoomJoin {

        /** Resp_PersonalRoomJoin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomJoin Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PersonalRoomJoin. */
    class Resp_PersonalRoomJoin implements IResp_PersonalRoomJoin {

        /**
         * Constructs a new Resp_PersonalRoomJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomJoin);

        /** Resp_PersonalRoomJoin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomJoin Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PersonalRoomJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomJoin instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomJoin): DcgProto.Resp_PersonalRoomJoin;

        /**
         * Encodes the specified Resp_PersonalRoomJoin message. Does not implicitly {@link DcgProto.Resp_PersonalRoomJoin.verify|verify} messages.
         * @param m Resp_PersonalRoomJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomJoin;

        /**
         * Verifies a Resp_PersonalRoomJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomReady. */
    interface IReq_PersonalRoomReady {

        /** Req_PersonalRoomReady Ready */
        Ready?: (boolean|null);
    }

    /** Represents a Req_PersonalRoomReady. */
    class Req_PersonalRoomReady implements IReq_PersonalRoomReady {

        /**
         * Constructs a new Req_PersonalRoomReady.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomReady);

        /** Req_PersonalRoomReady Ready. */
        public Ready: boolean;

        /**
         * Creates a new Req_PersonalRoomReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomReady instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomReady): DcgProto.Req_PersonalRoomReady;

        /**
         * Encodes the specified Req_PersonalRoomReady message. Does not implicitly {@link DcgProto.Req_PersonalRoomReady.verify|verify} messages.
         * @param m Req_PersonalRoomReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomReady, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomReady message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomReady;

        /**
         * Verifies a Req_PersonalRoomReady message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomReady. */
    interface IResp_PersonalRoomReady {

        /** Resp_PersonalRoomReady ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomReady Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PersonalRoomReady. */
    class Resp_PersonalRoomReady implements IResp_PersonalRoomReady {

        /**
         * Constructs a new Resp_PersonalRoomReady.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomReady);

        /** Resp_PersonalRoomReady ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomReady Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PersonalRoomReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomReady instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomReady): DcgProto.Resp_PersonalRoomReady;

        /**
         * Encodes the specified Resp_PersonalRoomReady message. Does not implicitly {@link DcgProto.Resp_PersonalRoomReady.verify|verify} messages.
         * @param m Resp_PersonalRoomReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomReady, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomReady message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomReady;

        /**
         * Verifies a Resp_PersonalRoomReady message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomKick. */
    interface IReq_PersonalRoomKick {

        /** Req_PersonalRoomKick RoleIID */
        RoleIID?: (Long|null);
    }

    /** Represents a Req_PersonalRoomKick. */
    class Req_PersonalRoomKick implements IReq_PersonalRoomKick {

        /**
         * Constructs a new Req_PersonalRoomKick.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomKick);

        /** Req_PersonalRoomKick RoleIID. */
        public RoleIID: Long;

        /**
         * Creates a new Req_PersonalRoomKick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomKick instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomKick): DcgProto.Req_PersonalRoomKick;

        /**
         * Encodes the specified Req_PersonalRoomKick message. Does not implicitly {@link DcgProto.Req_PersonalRoomKick.verify|verify} messages.
         * @param m Req_PersonalRoomKick message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomKick, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomKick message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomKick;

        /**
         * Verifies a Req_PersonalRoomKick message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomKick. */
    interface IResp_PersonalRoomKick {

        /** Resp_PersonalRoomKick ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomKick Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PersonalRoomKick. */
    class Resp_PersonalRoomKick implements IResp_PersonalRoomKick {

        /**
         * Constructs a new Resp_PersonalRoomKick.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomKick);

        /** Resp_PersonalRoomKick ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomKick Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PersonalRoomKick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomKick instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomKick): DcgProto.Resp_PersonalRoomKick;

        /**
         * Encodes the specified Resp_PersonalRoomKick message. Does not implicitly {@link DcgProto.Resp_PersonalRoomKick.verify|verify} messages.
         * @param m Resp_PersonalRoomKick message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomKick, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomKick message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomKick;

        /**
         * Verifies a Resp_PersonalRoomKick message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomQuit. */
    interface IReq_PersonalRoomQuit {
    }

    /** Represents a Req_PersonalRoomQuit. */
    class Req_PersonalRoomQuit implements IReq_PersonalRoomQuit {

        /**
         * Constructs a new Req_PersonalRoomQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomQuit);

        /**
         * Creates a new Req_PersonalRoomQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomQuit instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomQuit): DcgProto.Req_PersonalRoomQuit;

        /**
         * Encodes the specified Req_PersonalRoomQuit message. Does not implicitly {@link DcgProto.Req_PersonalRoomQuit.verify|verify} messages.
         * @param m Req_PersonalRoomQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomQuit;

        /**
         * Verifies a Req_PersonalRoomQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomQuit. */
    interface IResp_PersonalRoomQuit {

        /** Resp_PersonalRoomQuit ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomQuit Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PersonalRoomQuit. */
    class Resp_PersonalRoomQuit implements IResp_PersonalRoomQuit {

        /**
         * Constructs a new Resp_PersonalRoomQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomQuit);

        /** Resp_PersonalRoomQuit ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomQuit Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PersonalRoomQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomQuit instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomQuit): DcgProto.Resp_PersonalRoomQuit;

        /**
         * Encodes the specified Resp_PersonalRoomQuit message. Does not implicitly {@link DcgProto.Resp_PersonalRoomQuit.verify|verify} messages.
         * @param m Resp_PersonalRoomQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomQuit;

        /**
         * Verifies a Resp_PersonalRoomQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomStartBattle. */
    interface IReq_PersonalRoomStartBattle {
    }

    /** Represents a Req_PersonalRoomStartBattle. */
    class Req_PersonalRoomStartBattle implements IReq_PersonalRoomStartBattle {

        /**
         * Constructs a new Req_PersonalRoomStartBattle.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomStartBattle);

        /**
         * Creates a new Req_PersonalRoomStartBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomStartBattle instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomStartBattle): DcgProto.Req_PersonalRoomStartBattle;

        /**
         * Encodes the specified Req_PersonalRoomStartBattle message. Does not implicitly {@link DcgProto.Req_PersonalRoomStartBattle.verify|verify} messages.
         * @param m Req_PersonalRoomStartBattle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomStartBattle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomStartBattle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomStartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomStartBattle;

        /**
         * Verifies a Req_PersonalRoomStartBattle message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomStartBattle. */
    interface IResp_PersonalRoomStartBattle {

        /** Resp_PersonalRoomStartBattle ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomStartBattle Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PersonalRoomStartBattle. */
    class Resp_PersonalRoomStartBattle implements IResp_PersonalRoomStartBattle {

        /**
         * Constructs a new Resp_PersonalRoomStartBattle.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomStartBattle);

        /** Resp_PersonalRoomStartBattle ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomStartBattle Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PersonalRoomStartBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomStartBattle instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomStartBattle): DcgProto.Resp_PersonalRoomStartBattle;

        /**
         * Encodes the specified Resp_PersonalRoomStartBattle message. Does not implicitly {@link DcgProto.Resp_PersonalRoomStartBattle.verify|verify} messages.
         * @param m Resp_PersonalRoomStartBattle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomStartBattle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomStartBattle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomStartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomStartBattle;

        /**
         * Verifies a Resp_PersonalRoomStartBattle message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PersonalRoomLogs. */
    interface IReq_PersonalRoomLogs {

        /** Req_PersonalRoomLogs PersonalRoomIID */
        PersonalRoomIID?: (Long|null);
    }

    /** Represents a Req_PersonalRoomLogs. */
    class Req_PersonalRoomLogs implements IReq_PersonalRoomLogs {

        /**
         * Constructs a new Req_PersonalRoomLogs.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PersonalRoomLogs);

        /** Req_PersonalRoomLogs PersonalRoomIID. */
        public PersonalRoomIID: Long;

        /**
         * Creates a new Req_PersonalRoomLogs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PersonalRoomLogs instance
         */
        public static create(properties?: DcgProto.IReq_PersonalRoomLogs): DcgProto.Req_PersonalRoomLogs;

        /**
         * Encodes the specified Req_PersonalRoomLogs message. Does not implicitly {@link DcgProto.Req_PersonalRoomLogs.verify|verify} messages.
         * @param m Req_PersonalRoomLogs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PersonalRoomLogs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PersonalRoomLogs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PersonalRoomLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PersonalRoomLogs;

        /**
         * Verifies a Req_PersonalRoomLogs message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PersonalRoomLogs. */
    interface IResp_PersonalRoomLogs {

        /** Resp_PersonalRoomLogs ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PersonalRoomLogs Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PersonalRoomLogs RoomRecords */
        RoomRecords?: (DcgProto.IS_RoomRecord[]|null);
    }

    /** Represents a Resp_PersonalRoomLogs. */
    class Resp_PersonalRoomLogs implements IResp_PersonalRoomLogs {

        /**
         * Constructs a new Resp_PersonalRoomLogs.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PersonalRoomLogs);

        /** Resp_PersonalRoomLogs ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PersonalRoomLogs Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PersonalRoomLogs RoomRecords. */
        public RoomRecords: DcgProto.IS_RoomRecord[];

        /**
         * Creates a new Resp_PersonalRoomLogs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PersonalRoomLogs instance
         */
        public static create(properties?: DcgProto.IResp_PersonalRoomLogs): DcgProto.Resp_PersonalRoomLogs;

        /**
         * Encodes the specified Resp_PersonalRoomLogs message. Does not implicitly {@link DcgProto.Resp_PersonalRoomLogs.verify|verify} messages.
         * @param m Resp_PersonalRoomLogs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PersonalRoomLogs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PersonalRoomLogs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PersonalRoomLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PersonalRoomLogs;

        /**
         * Verifies a Resp_PersonalRoomLogs message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_PersonalRoomInfo. */
    interface IPush_PersonalRoomInfo {

        /** Push_PersonalRoomInfo Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_PersonalRoomInfo. */
    class Push_PersonalRoomInfo implements IPush_PersonalRoomInfo {

        /**
         * Constructs a new Push_PersonalRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_PersonalRoomInfo);

        /** Push_PersonalRoomInfo Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_PersonalRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_PersonalRoomInfo instance
         */
        public static create(properties?: DcgProto.IPush_PersonalRoomInfo): DcgProto.Push_PersonalRoomInfo;

        /**
         * Encodes the specified Push_PersonalRoomInfo message. Does not implicitly {@link DcgProto.Push_PersonalRoomInfo.verify|verify} messages.
         * @param m Push_PersonalRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_PersonalRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_PersonalRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_PersonalRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_PersonalRoomInfo;

        /**
         * Verifies a Push_PersonalRoomInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomSearch. */
    interface IReq_PvpRoomSearch {

        /** Req_PvpRoomSearch ShortId */
        ShortId?: (number|null);
    }

    /** Represents a Req_PvpRoomSearch. */
    class Req_PvpRoomSearch implements IReq_PvpRoomSearch {

        /**
         * Constructs a new Req_PvpRoomSearch.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomSearch);

        /** Req_PvpRoomSearch ShortId. */
        public ShortId: number;

        /**
         * Creates a new Req_PvpRoomSearch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomSearch instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomSearch): DcgProto.Req_PvpRoomSearch;

        /**
         * Encodes the specified Req_PvpRoomSearch message. Does not implicitly {@link DcgProto.Req_PvpRoomSearch.verify|verify} messages.
         * @param m Req_PvpRoomSearch message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomSearch, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomSearch message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomSearch;

        /**
         * Verifies a Req_PvpRoomSearch message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomSearch. */
    interface IResp_PvpRoomSearch {

        /** Resp_PvpRoomSearch ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomSearch Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomSearch PvpRoom */
        PvpRoom?: (DcgProto.IS_PvpRoom|null);
    }

    /** Represents a Resp_PvpRoomSearch. */
    class Resp_PvpRoomSearch implements IResp_PvpRoomSearch {

        /**
         * Constructs a new Resp_PvpRoomSearch.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomSearch);

        /** Resp_PvpRoomSearch ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomSearch Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomSearch PvpRoom. */
        public PvpRoom?: (DcgProto.IS_PvpRoom|null);

        /**
         * Creates a new Resp_PvpRoomSearch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomSearch instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomSearch): DcgProto.Resp_PvpRoomSearch;

        /**
         * Encodes the specified Resp_PvpRoomSearch message. Does not implicitly {@link DcgProto.Resp_PvpRoomSearch.verify|verify} messages.
         * @param m Resp_PvpRoomSearch message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomSearch, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomSearch message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomSearch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomSearch;

        /**
         * Verifies a Resp_PvpRoomSearch message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomList. */
    interface IReq_PvpRoomList {

        /** Req_PvpRoomList RoomMode */
        RoomMode?: (DcgProto.E_ROOM_MODE|null);

        /** Req_PvpRoomList CurrPage */
        CurrPage?: (number|null);
    }

    /** Represents a Req_PvpRoomList. */
    class Req_PvpRoomList implements IReq_PvpRoomList {

        /**
         * Constructs a new Req_PvpRoomList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomList);

        /** Req_PvpRoomList RoomMode. */
        public RoomMode: DcgProto.E_ROOM_MODE;

        /** Req_PvpRoomList CurrPage. */
        public CurrPage: number;

        /**
         * Creates a new Req_PvpRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomList instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomList): DcgProto.Req_PvpRoomList;

        /**
         * Encodes the specified Req_PvpRoomList message. Does not implicitly {@link DcgProto.Req_PvpRoomList.verify|verify} messages.
         * @param m Req_PvpRoomList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomList;

        /**
         * Verifies a Req_PvpRoomList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomList. */
    interface IResp_PvpRoomList {

        /** Resp_PvpRoomList ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomList Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomList PvpRooms */
        PvpRooms?: (DcgProto.IS_PvpRoom[]|null);

        /** Resp_PvpRoomList CurrPage */
        CurrPage?: (number|null);

        /** Resp_PvpRoomList TotalNum */
        TotalNum?: (number|null);
    }

    /** Represents a Resp_PvpRoomList. */
    class Resp_PvpRoomList implements IResp_PvpRoomList {

        /**
         * Constructs a new Resp_PvpRoomList.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomList);

        /** Resp_PvpRoomList ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomList Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomList PvpRooms. */
        public PvpRooms: DcgProto.IS_PvpRoom[];

        /** Resp_PvpRoomList CurrPage. */
        public CurrPage: number;

        /** Resp_PvpRoomList TotalNum. */
        public TotalNum: number;

        /**
         * Creates a new Resp_PvpRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomList instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomList): DcgProto.Resp_PvpRoomList;

        /**
         * Encodes the specified Resp_PvpRoomList message. Does not implicitly {@link DcgProto.Resp_PvpRoomList.verify|verify} messages.
         * @param m Resp_PvpRoomList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomList;

        /**
         * Verifies a Resp_PvpRoomList message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomInfo. */
    interface IReq_PvpRoomInfo {

        /** Req_PvpRoomInfo PvpRoomIID */
        PvpRoomIID?: (Long|null);
    }

    /** Represents a Req_PvpRoomInfo. */
    class Req_PvpRoomInfo implements IReq_PvpRoomInfo {

        /**
         * Constructs a new Req_PvpRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomInfo);

        /** Req_PvpRoomInfo PvpRoomIID. */
        public PvpRoomIID: Long;

        /**
         * Creates a new Req_PvpRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomInfo instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomInfo): DcgProto.Req_PvpRoomInfo;

        /**
         * Encodes the specified Req_PvpRoomInfo message. Does not implicitly {@link DcgProto.Req_PvpRoomInfo.verify|verify} messages.
         * @param m Req_PvpRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomInfo;

        /**
         * Verifies a Req_PvpRoomInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomInfo. */
    interface IResp_PvpRoomInfo {

        /** Resp_PvpRoomInfo ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomInfo Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomInfo PvpRoom */
        PvpRoom?: (DcgProto.IS_PvpRoom|null);

        /** Resp_PvpRoomInfo PvpRoomMember */
        PvpRoomMember?: (DcgProto.IS_PvpRoomMember[]|null);

        /** Resp_PvpRoomInfo PvpRoomRace */
        PvpRoomRace?: (DcgProto.IS_PvpRoomRace|null);
    }

    /** Represents a Resp_PvpRoomInfo. */
    class Resp_PvpRoomInfo implements IResp_PvpRoomInfo {

        /**
         * Constructs a new Resp_PvpRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomInfo);

        /** Resp_PvpRoomInfo ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomInfo Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomInfo PvpRoom. */
        public PvpRoom?: (DcgProto.IS_PvpRoom|null);

        /** Resp_PvpRoomInfo PvpRoomMember. */
        public PvpRoomMember: DcgProto.IS_PvpRoomMember[];

        /** Resp_PvpRoomInfo PvpRoomRace. */
        public PvpRoomRace?: (DcgProto.IS_PvpRoomRace|null);

        /**
         * Creates a new Resp_PvpRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomInfo instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomInfo): DcgProto.Resp_PvpRoomInfo;

        /**
         * Encodes the specified Resp_PvpRoomInfo message. Does not implicitly {@link DcgProto.Resp_PvpRoomInfo.verify|verify} messages.
         * @param m Resp_PvpRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomInfo;

        /**
         * Verifies a Resp_PvpRoomInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomRewardInfo. */
    interface IReq_PvpRoomRewardInfo {

        /** Req_PvpRoomRewardInfo PvpRoomIID */
        PvpRoomIID?: (Long|null);
    }

    /** Represents a Req_PvpRoomRewardInfo. */
    class Req_PvpRoomRewardInfo implements IReq_PvpRoomRewardInfo {

        /**
         * Constructs a new Req_PvpRoomRewardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomRewardInfo);

        /** Req_PvpRoomRewardInfo PvpRoomIID. */
        public PvpRoomIID: Long;

        /**
         * Creates a new Req_PvpRoomRewardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomRewardInfo instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomRewardInfo): DcgProto.Req_PvpRoomRewardInfo;

        /**
         * Encodes the specified Req_PvpRoomRewardInfo message. Does not implicitly {@link DcgProto.Req_PvpRoomRewardInfo.verify|verify} messages.
         * @param m Req_PvpRoomRewardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomRewardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomRewardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomRewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomRewardInfo;

        /**
         * Verifies a Req_PvpRoomRewardInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomRewardInfo. */
    interface IResp_PvpRoomRewardInfo {

        /** Resp_PvpRoomRewardInfo ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomRewardInfo Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomRewardInfo Rewards */
        Rewards?: (number[]|null);
    }

    /** Represents a Resp_PvpRoomRewardInfo. */
    class Resp_PvpRoomRewardInfo implements IResp_PvpRoomRewardInfo {

        /**
         * Constructs a new Resp_PvpRoomRewardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomRewardInfo);

        /** Resp_PvpRoomRewardInfo ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomRewardInfo Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomRewardInfo Rewards. */
        public Rewards: number[];

        /**
         * Creates a new Resp_PvpRoomRewardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomRewardInfo instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomRewardInfo): DcgProto.Resp_PvpRoomRewardInfo;

        /**
         * Encodes the specified Resp_PvpRoomRewardInfo message. Does not implicitly {@link DcgProto.Resp_PvpRoomRewardInfo.verify|verify} messages.
         * @param m Resp_PvpRoomRewardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomRewardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomRewardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomRewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomRewardInfo;

        /**
         * Verifies a Resp_PvpRoomRewardInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomCreate. */
    interface IReq_PvpRoomCreate {

        /** Req_PvpRoomCreate Name */
        Name?: (string|null);

        /** Req_PvpRoomCreate Level */
        Level?: (number|null);

        /** Req_PvpRoomCreate RoomType */
        RoomType?: (DcgProto.E_ROOM_TYPE|null);

        /** Req_PvpRoomCreate Rewards */
        Rewards?: (number[]|null);
    }

    /** Represents a Req_PvpRoomCreate. */
    class Req_PvpRoomCreate implements IReq_PvpRoomCreate {

        /**
         * Constructs a new Req_PvpRoomCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomCreate);

        /** Req_PvpRoomCreate Name. */
        public Name: string;

        /** Req_PvpRoomCreate Level. */
        public Level: number;

        /** Req_PvpRoomCreate RoomType. */
        public RoomType: DcgProto.E_ROOM_TYPE;

        /** Req_PvpRoomCreate Rewards. */
        public Rewards: number[];

        /**
         * Creates a new Req_PvpRoomCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomCreate instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomCreate): DcgProto.Req_PvpRoomCreate;

        /**
         * Encodes the specified Req_PvpRoomCreate message. Does not implicitly {@link DcgProto.Req_PvpRoomCreate.verify|verify} messages.
         * @param m Req_PvpRoomCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomCreate;

        /**
         * Verifies a Req_PvpRoomCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomCreate. */
    interface IResp_PvpRoomCreate {

        /** Resp_PvpRoomCreate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomCreate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomCreate. */
    class Resp_PvpRoomCreate implements IResp_PvpRoomCreate {

        /**
         * Constructs a new Resp_PvpRoomCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomCreate);

        /** Resp_PvpRoomCreate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomCreate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomCreate instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomCreate): DcgProto.Resp_PvpRoomCreate;

        /**
         * Encodes the specified Resp_PvpRoomCreate message. Does not implicitly {@link DcgProto.Resp_PvpRoomCreate.verify|verify} messages.
         * @param m Resp_PvpRoomCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomCreate;

        /**
         * Verifies a Resp_PvpRoomCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomModifyName. */
    interface IReq_PvpRoomModifyName {

        /** Req_PvpRoomModifyName PvpRoomIID */
        PvpRoomIID?: (Long|null);

        /** Req_PvpRoomModifyName Name */
        Name?: (string|null);
    }

    /** Represents a Req_PvpRoomModifyName. */
    class Req_PvpRoomModifyName implements IReq_PvpRoomModifyName {

        /**
         * Constructs a new Req_PvpRoomModifyName.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomModifyName);

        /** Req_PvpRoomModifyName PvpRoomIID. */
        public PvpRoomIID: Long;

        /** Req_PvpRoomModifyName Name. */
        public Name: string;

        /**
         * Creates a new Req_PvpRoomModifyName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomModifyName instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomModifyName): DcgProto.Req_PvpRoomModifyName;

        /**
         * Encodes the specified Req_PvpRoomModifyName message. Does not implicitly {@link DcgProto.Req_PvpRoomModifyName.verify|verify} messages.
         * @param m Req_PvpRoomModifyName message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomModifyName, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomModifyName message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomModifyName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomModifyName;

        /**
         * Verifies a Req_PvpRoomModifyName message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomModifyName. */
    interface IResp_PvpRoomModifyName {

        /** Resp_PvpRoomModifyName ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomModifyName Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomModifyName. */
    class Resp_PvpRoomModifyName implements IResp_PvpRoomModifyName {

        /**
         * Constructs a new Resp_PvpRoomModifyName.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomModifyName);

        /** Resp_PvpRoomModifyName ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomModifyName Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomModifyName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomModifyName instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomModifyName): DcgProto.Resp_PvpRoomModifyName;

        /**
         * Encodes the specified Resp_PvpRoomModifyName message. Does not implicitly {@link DcgProto.Resp_PvpRoomModifyName.verify|verify} messages.
         * @param m Resp_PvpRoomModifyName message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomModifyName, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomModifyName message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomModifyName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomModifyName;

        /**
         * Verifies a Resp_PvpRoomModifyName message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomModifyType. */
    interface IReq_PvpRoomModifyType {

        /** Req_PvpRoomModifyType PvpRoomIID */
        PvpRoomIID?: (Long|null);

        /** Req_PvpRoomModifyType RoomType */
        RoomType?: (DcgProto.E_ROOM_TYPE|null);
    }

    /** Represents a Req_PvpRoomModifyType. */
    class Req_PvpRoomModifyType implements IReq_PvpRoomModifyType {

        /**
         * Constructs a new Req_PvpRoomModifyType.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomModifyType);

        /** Req_PvpRoomModifyType PvpRoomIID. */
        public PvpRoomIID: Long;

        /** Req_PvpRoomModifyType RoomType. */
        public RoomType: DcgProto.E_ROOM_TYPE;

        /**
         * Creates a new Req_PvpRoomModifyType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomModifyType instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomModifyType): DcgProto.Req_PvpRoomModifyType;

        /**
         * Encodes the specified Req_PvpRoomModifyType message. Does not implicitly {@link DcgProto.Req_PvpRoomModifyType.verify|verify} messages.
         * @param m Req_PvpRoomModifyType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomModifyType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomModifyType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomModifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomModifyType;

        /**
         * Verifies a Req_PvpRoomModifyType message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomModifyType. */
    interface IResp_PvpRoomModifyType {

        /** Resp_PvpRoomModifyType ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomModifyType Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomModifyType. */
    class Resp_PvpRoomModifyType implements IResp_PvpRoomModifyType {

        /**
         * Constructs a new Resp_PvpRoomModifyType.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomModifyType);

        /** Resp_PvpRoomModifyType ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomModifyType Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomModifyType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomModifyType instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomModifyType): DcgProto.Resp_PvpRoomModifyType;

        /**
         * Encodes the specified Resp_PvpRoomModifyType message. Does not implicitly {@link DcgProto.Resp_PvpRoomModifyType.verify|verify} messages.
         * @param m Resp_PvpRoomModifyType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomModifyType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomModifyType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomModifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomModifyType;

        /**
         * Verifies a Resp_PvpRoomModifyType message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomJoin. */
    interface IReq_PvpRoomJoin {

        /** Req_PvpRoomJoin PvpRoomIID */
        PvpRoomIID?: (Long|null);
    }

    /** Represents a Req_PvpRoomJoin. */
    class Req_PvpRoomJoin implements IReq_PvpRoomJoin {

        /**
         * Constructs a new Req_PvpRoomJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomJoin);

        /** Req_PvpRoomJoin PvpRoomIID. */
        public PvpRoomIID: Long;

        /**
         * Creates a new Req_PvpRoomJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomJoin instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomJoin): DcgProto.Req_PvpRoomJoin;

        /**
         * Encodes the specified Req_PvpRoomJoin message. Does not implicitly {@link DcgProto.Req_PvpRoomJoin.verify|verify} messages.
         * @param m Req_PvpRoomJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomJoin;

        /**
         * Verifies a Req_PvpRoomJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomJoin. */
    interface IResp_PvpRoomJoin {

        /** Resp_PvpRoomJoin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomJoin Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomJoin. */
    class Resp_PvpRoomJoin implements IResp_PvpRoomJoin {

        /**
         * Constructs a new Resp_PvpRoomJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomJoin);

        /** Resp_PvpRoomJoin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomJoin Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomJoin instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomJoin): DcgProto.Resp_PvpRoomJoin;

        /**
         * Encodes the specified Resp_PvpRoomJoin message. Does not implicitly {@link DcgProto.Resp_PvpRoomJoin.verify|verify} messages.
         * @param m Resp_PvpRoomJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomJoin;

        /**
         * Verifies a Resp_PvpRoomJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomKick. */
    interface IReq_PvpRoomKick {

        /** Req_PvpRoomKick RoleIID */
        RoleIID?: (Long|null);
    }

    /** Represents a Req_PvpRoomKick. */
    class Req_PvpRoomKick implements IReq_PvpRoomKick {

        /**
         * Constructs a new Req_PvpRoomKick.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomKick);

        /** Req_PvpRoomKick RoleIID. */
        public RoleIID: Long;

        /**
         * Creates a new Req_PvpRoomKick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomKick instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomKick): DcgProto.Req_PvpRoomKick;

        /**
         * Encodes the specified Req_PvpRoomKick message. Does not implicitly {@link DcgProto.Req_PvpRoomKick.verify|verify} messages.
         * @param m Req_PvpRoomKick message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomKick, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomKick message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomKick;

        /**
         * Verifies a Req_PvpRoomKick message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomKick. */
    interface IResp_PvpRoomKick {

        /** Resp_PvpRoomKick ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomKick Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomKick. */
    class Resp_PvpRoomKick implements IResp_PvpRoomKick {

        /**
         * Constructs a new Resp_PvpRoomKick.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomKick);

        /** Resp_PvpRoomKick ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomKick Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomKick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomKick instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomKick): DcgProto.Resp_PvpRoomKick;

        /**
         * Encodes the specified Resp_PvpRoomKick message. Does not implicitly {@link DcgProto.Resp_PvpRoomKick.verify|verify} messages.
         * @param m Resp_PvpRoomKick message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomKick, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomKick message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomKick;

        /**
         * Verifies a Resp_PvpRoomKick message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomQuit. */
    interface IReq_PvpRoomQuit {
    }

    /** Represents a Req_PvpRoomQuit. */
    class Req_PvpRoomQuit implements IReq_PvpRoomQuit {

        /**
         * Constructs a new Req_PvpRoomQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomQuit);

        /**
         * Creates a new Req_PvpRoomQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomQuit instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomQuit): DcgProto.Req_PvpRoomQuit;

        /**
         * Encodes the specified Req_PvpRoomQuit message. Does not implicitly {@link DcgProto.Req_PvpRoomQuit.verify|verify} messages.
         * @param m Req_PvpRoomQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomQuit;

        /**
         * Verifies a Req_PvpRoomQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomQuit. */
    interface IResp_PvpRoomQuit {

        /** Resp_PvpRoomQuit ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomQuit Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomQuit. */
    class Resp_PvpRoomQuit implements IResp_PvpRoomQuit {

        /**
         * Constructs a new Resp_PvpRoomQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomQuit);

        /** Resp_PvpRoomQuit ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomQuit Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomQuit instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomQuit): DcgProto.Resp_PvpRoomQuit;

        /**
         * Encodes the specified Resp_PvpRoomQuit message. Does not implicitly {@link DcgProto.Resp_PvpRoomQuit.verify|verify} messages.
         * @param m Resp_PvpRoomQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomQuit;

        /**
         * Verifies a Resp_PvpRoomQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomRaceCreate. */
    interface IReq_PvpRoomRaceCreate {
    }

    /** Represents a Req_PvpRoomRaceCreate. */
    class Req_PvpRoomRaceCreate implements IReq_PvpRoomRaceCreate {

        /**
         * Constructs a new Req_PvpRoomRaceCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomRaceCreate);

        /**
         * Creates a new Req_PvpRoomRaceCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomRaceCreate instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomRaceCreate): DcgProto.Req_PvpRoomRaceCreate;

        /**
         * Encodes the specified Req_PvpRoomRaceCreate message. Does not implicitly {@link DcgProto.Req_PvpRoomRaceCreate.verify|verify} messages.
         * @param m Req_PvpRoomRaceCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomRaceCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomRaceCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomRaceCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomRaceCreate;

        /**
         * Verifies a Req_PvpRoomRaceCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomRaceCreate. */
    interface IResp_PvpRoomRaceCreate {

        /** Resp_PvpRoomRaceCreate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomRaceCreate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomRaceCreate. */
    class Resp_PvpRoomRaceCreate implements IResp_PvpRoomRaceCreate {

        /**
         * Constructs a new Resp_PvpRoomRaceCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomRaceCreate);

        /** Resp_PvpRoomRaceCreate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomRaceCreate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomRaceCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomRaceCreate instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomRaceCreate): DcgProto.Resp_PvpRoomRaceCreate;

        /**
         * Encodes the specified Resp_PvpRoomRaceCreate message. Does not implicitly {@link DcgProto.Resp_PvpRoomRaceCreate.verify|verify} messages.
         * @param m Resp_PvpRoomRaceCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomRaceCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomRaceCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomRaceCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomRaceCreate;

        /**
         * Verifies a Resp_PvpRoomRaceCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomRaceJoin. */
    interface IReq_PvpRoomRaceJoin {
    }

    /** Represents a Req_PvpRoomRaceJoin. */
    class Req_PvpRoomRaceJoin implements IReq_PvpRoomRaceJoin {

        /**
         * Constructs a new Req_PvpRoomRaceJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomRaceJoin);

        /**
         * Creates a new Req_PvpRoomRaceJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomRaceJoin instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomRaceJoin): DcgProto.Req_PvpRoomRaceJoin;

        /**
         * Encodes the specified Req_PvpRoomRaceJoin message. Does not implicitly {@link DcgProto.Req_PvpRoomRaceJoin.verify|verify} messages.
         * @param m Req_PvpRoomRaceJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomRaceJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomRaceJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomRaceJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomRaceJoin;

        /**
         * Verifies a Req_PvpRoomRaceJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomRaceJoin. */
    interface IResp_PvpRoomRaceJoin {

        /** Resp_PvpRoomRaceJoin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomRaceJoin Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomRaceJoin. */
    class Resp_PvpRoomRaceJoin implements IResp_PvpRoomRaceJoin {

        /**
         * Constructs a new Resp_PvpRoomRaceJoin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomRaceJoin);

        /** Resp_PvpRoomRaceJoin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomRaceJoin Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomRaceJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomRaceJoin instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomRaceJoin): DcgProto.Resp_PvpRoomRaceJoin;

        /**
         * Encodes the specified Resp_PvpRoomRaceJoin message. Does not implicitly {@link DcgProto.Resp_PvpRoomRaceJoin.verify|verify} messages.
         * @param m Resp_PvpRoomRaceJoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomRaceJoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomRaceJoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomRaceJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomRaceJoin;

        /**
         * Verifies a Resp_PvpRoomRaceJoin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomRaceQuit. */
    interface IReq_PvpRoomRaceQuit {
    }

    /** Represents a Req_PvpRoomRaceQuit. */
    class Req_PvpRoomRaceQuit implements IReq_PvpRoomRaceQuit {

        /**
         * Constructs a new Req_PvpRoomRaceQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomRaceQuit);

        /**
         * Creates a new Req_PvpRoomRaceQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomRaceQuit instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomRaceQuit): DcgProto.Req_PvpRoomRaceQuit;

        /**
         * Encodes the specified Req_PvpRoomRaceQuit message. Does not implicitly {@link DcgProto.Req_PvpRoomRaceQuit.verify|verify} messages.
         * @param m Req_PvpRoomRaceQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomRaceQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomRaceQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomRaceQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomRaceQuit;

        /**
         * Verifies a Req_PvpRoomRaceQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomRaceQuit. */
    interface IResp_PvpRoomRaceQuit {

        /** Resp_PvpRoomRaceQuit ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomRaceQuit Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomRaceQuit. */
    class Resp_PvpRoomRaceQuit implements IResp_PvpRoomRaceQuit {

        /**
         * Constructs a new Resp_PvpRoomRaceQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomRaceQuit);

        /** Resp_PvpRoomRaceQuit ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomRaceQuit Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomRaceQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomRaceQuit instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomRaceQuit): DcgProto.Resp_PvpRoomRaceQuit;

        /**
         * Encodes the specified Resp_PvpRoomRaceQuit message. Does not implicitly {@link DcgProto.Resp_PvpRoomRaceQuit.verify|verify} messages.
         * @param m Resp_PvpRoomRaceQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomRaceQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomRaceQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomRaceQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomRaceQuit;

        /**
         * Verifies a Resp_PvpRoomRaceQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomBeginRace. */
    interface IReq_PvpRoomBeginRace {
    }

    /** Represents a Req_PvpRoomBeginRace. */
    class Req_PvpRoomBeginRace implements IReq_PvpRoomBeginRace {

        /**
         * Constructs a new Req_PvpRoomBeginRace.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomBeginRace);

        /**
         * Creates a new Req_PvpRoomBeginRace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomBeginRace instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomBeginRace): DcgProto.Req_PvpRoomBeginRace;

        /**
         * Encodes the specified Req_PvpRoomBeginRace message. Does not implicitly {@link DcgProto.Req_PvpRoomBeginRace.verify|verify} messages.
         * @param m Req_PvpRoomBeginRace message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomBeginRace, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomBeginRace message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomBeginRace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomBeginRace;

        /**
         * Verifies a Req_PvpRoomBeginRace message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomBeginRace. */
    interface IResp_PvpRoomBeginRace {

        /** Resp_PvpRoomBeginRace ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomBeginRace Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PvpRoomBeginRace. */
    class Resp_PvpRoomBeginRace implements IResp_PvpRoomBeginRace {

        /**
         * Constructs a new Resp_PvpRoomBeginRace.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomBeginRace);

        /** Resp_PvpRoomBeginRace ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomBeginRace Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PvpRoomBeginRace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomBeginRace instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomBeginRace): DcgProto.Resp_PvpRoomBeginRace;

        /**
         * Encodes the specified Resp_PvpRoomBeginRace message. Does not implicitly {@link DcgProto.Resp_PvpRoomBeginRace.verify|verify} messages.
         * @param m Resp_PvpRoomBeginRace message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomBeginRace, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomBeginRace message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomBeginRace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomBeginRace;

        /**
         * Verifies a Resp_PvpRoomBeginRace message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PvpRoomRaceLogs. */
    interface IReq_PvpRoomRaceLogs {

        /** Req_PvpRoomRaceLogs PvpRoomIID */
        PvpRoomIID?: (Long|null);
    }

    /** Represents a Req_PvpRoomRaceLogs. */
    class Req_PvpRoomRaceLogs implements IReq_PvpRoomRaceLogs {

        /**
         * Constructs a new Req_PvpRoomRaceLogs.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PvpRoomRaceLogs);

        /** Req_PvpRoomRaceLogs PvpRoomIID. */
        public PvpRoomIID: Long;

        /**
         * Creates a new Req_PvpRoomRaceLogs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PvpRoomRaceLogs instance
         */
        public static create(properties?: DcgProto.IReq_PvpRoomRaceLogs): DcgProto.Req_PvpRoomRaceLogs;

        /**
         * Encodes the specified Req_PvpRoomRaceLogs message. Does not implicitly {@link DcgProto.Req_PvpRoomRaceLogs.verify|verify} messages.
         * @param m Req_PvpRoomRaceLogs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PvpRoomRaceLogs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PvpRoomRaceLogs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PvpRoomRaceLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PvpRoomRaceLogs;

        /**
         * Verifies a Req_PvpRoomRaceLogs message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PvpRoomRaceLogs. */
    interface IResp_PvpRoomRaceLogs {

        /** Resp_PvpRoomRaceLogs ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PvpRoomRaceLogs Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomRaceLogs HistoryRace */
        HistoryRace?: (DcgProto.IS_PvpRoomRace[]|null);
    }

    /** Represents a Resp_PvpRoomRaceLogs. */
    class Resp_PvpRoomRaceLogs implements IResp_PvpRoomRaceLogs {

        /**
         * Constructs a new Resp_PvpRoomRaceLogs.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PvpRoomRaceLogs);

        /** Resp_PvpRoomRaceLogs ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PvpRoomRaceLogs Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_PvpRoomRaceLogs HistoryRace. */
        public HistoryRace: DcgProto.IS_PvpRoomRace[];

        /**
         * Creates a new Resp_PvpRoomRaceLogs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PvpRoomRaceLogs instance
         */
        public static create(properties?: DcgProto.IResp_PvpRoomRaceLogs): DcgProto.Resp_PvpRoomRaceLogs;

        /**
         * Encodes the specified Resp_PvpRoomRaceLogs message. Does not implicitly {@link DcgProto.Resp_PvpRoomRaceLogs.verify|verify} messages.
         * @param m Resp_PvpRoomRaceLogs message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PvpRoomRaceLogs, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PvpRoomRaceLogs message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PvpRoomRaceLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PvpRoomRaceLogs;

        /**
         * Verifies a Resp_PvpRoomRaceLogs message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_PvpRoomInfo. */
    interface IPush_PvpRoomInfo {

        /** Push_PvpRoomInfo Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_PvpRoomInfo. */
    class Push_PvpRoomInfo implements IPush_PvpRoomInfo {

        /**
         * Constructs a new Push_PvpRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_PvpRoomInfo);

        /** Push_PvpRoomInfo Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_PvpRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_PvpRoomInfo instance
         */
        public static create(properties?: DcgProto.IPush_PvpRoomInfo): DcgProto.Push_PvpRoomInfo;

        /**
         * Encodes the specified Push_PvpRoomInfo message. Does not implicitly {@link DcgProto.Push_PvpRoomInfo.verify|verify} messages.
         * @param m Push_PvpRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_PvpRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_PvpRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_PvpRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_PvpRoomInfo;

        /**
         * Verifies a Push_PvpRoomInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_TaskRefresh. */
    interface IReq_TaskRefresh {

        /** Req_TaskRefresh TaskIID */
        TaskIID?: (Long|null);
    }

    /** Represents a Req_TaskRefresh. */
    class Req_TaskRefresh implements IReq_TaskRefresh {

        /**
         * Constructs a new Req_TaskRefresh.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_TaskRefresh);

        /** Req_TaskRefresh TaskIID. */
        public TaskIID: Long;

        /**
         * Creates a new Req_TaskRefresh instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_TaskRefresh instance
         */
        public static create(properties?: DcgProto.IReq_TaskRefresh): DcgProto.Req_TaskRefresh;

        /**
         * Encodes the specified Req_TaskRefresh message. Does not implicitly {@link DcgProto.Req_TaskRefresh.verify|verify} messages.
         * @param m Req_TaskRefresh message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_TaskRefresh, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_TaskRefresh message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_TaskRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_TaskRefresh;

        /**
         * Verifies a Req_TaskRefresh message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_TaskRefresh. */
    interface IResp_TaskRefresh {

        /** Resp_TaskRefresh ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_TaskRefresh Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_TaskRefresh. */
    class Resp_TaskRefresh implements IResp_TaskRefresh {

        /**
         * Constructs a new Resp_TaskRefresh.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_TaskRefresh);

        /** Resp_TaskRefresh ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_TaskRefresh Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_TaskRefresh instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_TaskRefresh instance
         */
        public static create(properties?: DcgProto.IResp_TaskRefresh): DcgProto.Resp_TaskRefresh;

        /**
         * Encodes the specified Resp_TaskRefresh message. Does not implicitly {@link DcgProto.Resp_TaskRefresh.verify|verify} messages.
         * @param m Resp_TaskRefresh message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_TaskRefresh, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_TaskRefresh message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_TaskRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_TaskRefresh;

        /**
         * Verifies a Resp_TaskRefresh message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_TaskReward. */
    interface IReq_TaskReward {

        /** Req_TaskReward TaskList */
        TaskList?: (Long[]|null);
    }

    /** Represents a Req_TaskReward. */
    class Req_TaskReward implements IReq_TaskReward {

        /**
         * Constructs a new Req_TaskReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_TaskReward);

        /** Req_TaskReward TaskList. */
        public TaskList: Long[];

        /**
         * Creates a new Req_TaskReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_TaskReward instance
         */
        public static create(properties?: DcgProto.IReq_TaskReward): DcgProto.Req_TaskReward;

        /**
         * Encodes the specified Req_TaskReward message. Does not implicitly {@link DcgProto.Req_TaskReward.verify|verify} messages.
         * @param m Req_TaskReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_TaskReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_TaskReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_TaskReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_TaskReward;

        /**
         * Verifies a Req_TaskReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_TaskReward. */
    interface IResp_TaskReward {

        /** Resp_TaskReward ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_TaskReward Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_TaskReward. */
    class Resp_TaskReward implements IResp_TaskReward {

        /**
         * Constructs a new Resp_TaskReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_TaskReward);

        /** Resp_TaskReward ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_TaskReward Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_TaskReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_TaskReward instance
         */
        public static create(properties?: DcgProto.IResp_TaskReward): DcgProto.Resp_TaskReward;

        /**
         * Encodes the specified Resp_TaskReward message. Does not implicitly {@link DcgProto.Resp_TaskReward.verify|verify} messages.
         * @param m Resp_TaskReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_TaskReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_TaskReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_TaskReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_TaskReward;

        /**
         * Verifies a Resp_TaskReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_TaskStageReward. */
    interface IReq_TaskStageReward {

        /** Req_TaskStageReward TaskStageReward */
        TaskStageReward?: (DcgProto.IS_TaskStageReward[]|null);
    }

    /** Represents a Req_TaskStageReward. */
    class Req_TaskStageReward implements IReq_TaskStageReward {

        /**
         * Constructs a new Req_TaskStageReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_TaskStageReward);

        /** Req_TaskStageReward TaskStageReward. */
        public TaskStageReward: DcgProto.IS_TaskStageReward[];

        /**
         * Creates a new Req_TaskStageReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_TaskStageReward instance
         */
        public static create(properties?: DcgProto.IReq_TaskStageReward): DcgProto.Req_TaskStageReward;

        /**
         * Encodes the specified Req_TaskStageReward message. Does not implicitly {@link DcgProto.Req_TaskStageReward.verify|verify} messages.
         * @param m Req_TaskStageReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_TaskStageReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_TaskStageReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_TaskStageReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_TaskStageReward;

        /**
         * Verifies a Req_TaskStageReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_TaskStageReward. */
    interface IS_TaskStageReward {

        /** S_TaskStageReward TaskIID */
        TaskIID?: (Long|null);

        /** S_TaskStageReward Stage */
        Stage?: (number|null);
    }

    /** Represents a S_TaskStageReward. */
    class S_TaskStageReward implements IS_TaskStageReward {

        /**
         * Constructs a new S_TaskStageReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_TaskStageReward);

        /** S_TaskStageReward TaskIID. */
        public TaskIID: Long;

        /** S_TaskStageReward Stage. */
        public Stage: number;

        /**
         * Creates a new S_TaskStageReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_TaskStageReward instance
         */
        public static create(properties?: DcgProto.IS_TaskStageReward): DcgProto.S_TaskStageReward;

        /**
         * Encodes the specified S_TaskStageReward message. Does not implicitly {@link DcgProto.S_TaskStageReward.verify|verify} messages.
         * @param m S_TaskStageReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_TaskStageReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_TaskStageReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_TaskStageReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_TaskStageReward;

        /**
         * Verifies a S_TaskStageReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_TaskStageReward. */
    interface IResp_TaskStageReward {

        /** Resp_TaskStageReward ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_TaskStageReward Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_TaskStageReward. */
    class Resp_TaskStageReward implements IResp_TaskStageReward {

        /**
         * Constructs a new Resp_TaskStageReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_TaskStageReward);

        /** Resp_TaskStageReward ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_TaskStageReward Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_TaskStageReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_TaskStageReward instance
         */
        public static create(properties?: DcgProto.IResp_TaskStageReward): DcgProto.Resp_TaskStageReward;

        /**
         * Encodes the specified Resp_TaskStageReward message. Does not implicitly {@link DcgProto.Resp_TaskStageReward.verify|verify} messages.
         * @param m Resp_TaskStageReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_TaskStageReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_TaskStageReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_TaskStageReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_TaskStageReward;

        /**
         * Verifies a Resp_TaskStageReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_GatewayEntry. */
    interface IReq_GatewayEntry {

        /** Req_GatewayEntry AccountIID */
        AccountIID?: (Long|null);
    }

    /** Represents a Req_GatewayEntry. */
    class Req_GatewayEntry implements IReq_GatewayEntry {

        /**
         * Constructs a new Req_GatewayEntry.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_GatewayEntry);

        /** Req_GatewayEntry AccountIID. */
        public AccountIID: Long;

        /**
         * Creates a new Req_GatewayEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_GatewayEntry instance
         */
        public static create(properties?: DcgProto.IReq_GatewayEntry): DcgProto.Req_GatewayEntry;

        /**
         * Encodes the specified Req_GatewayEntry message. Does not implicitly {@link DcgProto.Req_GatewayEntry.verify|verify} messages.
         * @param m Req_GatewayEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_GatewayEntry, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_GatewayEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_GatewayEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_GatewayEntry;

        /**
         * Verifies a Req_GatewayEntry message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_GatewayEntry. */
    interface IResp_GatewayEntry {

        /** Resp_GatewayEntry ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_GatewayEntry ConnectorUrl */
        ConnectorUrl?: (string|null);
    }

    /** Represents a Resp_GatewayEntry. */
    class Resp_GatewayEntry implements IResp_GatewayEntry {

        /**
         * Constructs a new Resp_GatewayEntry.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_GatewayEntry);

        /** Resp_GatewayEntry ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_GatewayEntry ConnectorUrl. */
        public ConnectorUrl: string;

        /**
         * Creates a new Resp_GatewayEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_GatewayEntry instance
         */
        public static create(properties?: DcgProto.IResp_GatewayEntry): DcgProto.Resp_GatewayEntry;

        /**
         * Encodes the specified Resp_GatewayEntry message. Does not implicitly {@link DcgProto.Resp_GatewayEntry.verify|verify} messages.
         * @param m Resp_GatewayEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_GatewayEntry, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_GatewayEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_GatewayEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_GatewayEntry;

        /**
         * Verifies a Resp_GatewayEntry message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_ConnectorEntry. */
    interface IReq_ConnectorEntry {

        /** Req_ConnectorEntry AccountIID */
        AccountIID?: (Long|null);
    }

    /** Represents a Req_ConnectorEntry. */
    class Req_ConnectorEntry implements IReq_ConnectorEntry {

        /**
         * Constructs a new Req_ConnectorEntry.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_ConnectorEntry);

        /** Req_ConnectorEntry AccountIID. */
        public AccountIID: Long;

        /**
         * Creates a new Req_ConnectorEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_ConnectorEntry instance
         */
        public static create(properties?: DcgProto.IReq_ConnectorEntry): DcgProto.Req_ConnectorEntry;

        /**
         * Encodes the specified Req_ConnectorEntry message. Does not implicitly {@link DcgProto.Req_ConnectorEntry.verify|verify} messages.
         * @param m Req_ConnectorEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_ConnectorEntry, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_ConnectorEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_ConnectorEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_ConnectorEntry;

        /**
         * Verifies a Req_ConnectorEntry message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_ConnectorEntry. */
    interface IResp_ConnectorEntry {

        /** Resp_ConnectorEntry ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);
    }

    /** Represents a Resp_ConnectorEntry. */
    class Resp_ConnectorEntry implements IResp_ConnectorEntry {

        /**
         * Constructs a new Resp_ConnectorEntry.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_ConnectorEntry);

        /** Resp_ConnectorEntry ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /**
         * Creates a new Resp_ConnectorEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_ConnectorEntry instance
         */
        public static create(properties?: DcgProto.IResp_ConnectorEntry): DcgProto.Resp_ConnectorEntry;

        /**
         * Encodes the specified Resp_ConnectorEntry message. Does not implicitly {@link DcgProto.Resp_ConnectorEntry.verify|verify} messages.
         * @param m Resp_ConnectorEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_ConnectorEntry, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_ConnectorEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_ConnectorEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_ConnectorEntry;

        /**
         * Verifies a Resp_ConnectorEntry message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoleLogin. */
    interface IReq_RoleLogin {

        /** Req_RoleLogin Name */
        Name?: (string|null);
    }

    /** Represents a Req_RoleLogin. */
    class Req_RoleLogin implements IReq_RoleLogin {

        /**
         * Constructs a new Req_RoleLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoleLogin);

        /** Req_RoleLogin Name. */
        public Name: string;

        /**
         * Creates a new Req_RoleLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoleLogin instance
         */
        public static create(properties?: DcgProto.IReq_RoleLogin): DcgProto.Req_RoleLogin;

        /**
         * Encodes the specified Req_RoleLogin message. Does not implicitly {@link DcgProto.Req_RoleLogin.verify|verify} messages.
         * @param m Req_RoleLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoleLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoleLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoleLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoleLogin;

        /**
         * Verifies a Req_RoleLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoleLogin. */
    interface IResp_RoleLogin {

        /** Resp_RoleLogin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoleLogin CfgVersion */
        CfgVersion?: (number|null);

        /** Resp_RoleLogin Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RoleLogin. */
    class Resp_RoleLogin implements IResp_RoleLogin {

        /**
         * Constructs a new Resp_RoleLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoleLogin);

        /** Resp_RoleLogin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoleLogin CfgVersion. */
        public CfgVersion: number;

        /** Resp_RoleLogin Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RoleLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoleLogin instance
         */
        public static create(properties?: DcgProto.IResp_RoleLogin): DcgProto.Resp_RoleLogin;

        /**
         * Encodes the specified Resp_RoleLogin message. Does not implicitly {@link DcgProto.Resp_RoleLogin.verify|verify} messages.
         * @param m Resp_RoleLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoleLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoleLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoleLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoleLogin;

        /**
         * Verifies a Resp_RoleLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_ChangeNickName. */
    interface IReq_ChangeNickName {

        /** Req_ChangeNickName NickName */
        NickName?: (string|null);
    }

    /** Represents a Req_ChangeNickName. */
    class Req_ChangeNickName implements IReq_ChangeNickName {

        /**
         * Constructs a new Req_ChangeNickName.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_ChangeNickName);

        /** Req_ChangeNickName NickName. */
        public NickName: string;

        /**
         * Creates a new Req_ChangeNickName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_ChangeNickName instance
         */
        public static create(properties?: DcgProto.IReq_ChangeNickName): DcgProto.Req_ChangeNickName;

        /**
         * Encodes the specified Req_ChangeNickName message. Does not implicitly {@link DcgProto.Req_ChangeNickName.verify|verify} messages.
         * @param m Req_ChangeNickName message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_ChangeNickName, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_ChangeNickName message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_ChangeNickName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_ChangeNickName;

        /**
         * Verifies a Req_ChangeNickName message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_ChangeNickName. */
    interface IResp_ChangeNickName {

        /** Resp_ChangeNickName ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_ChangeNickName Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_ChangeNickName. */
    class Resp_ChangeNickName implements IResp_ChangeNickName {

        /**
         * Constructs a new Resp_ChangeNickName.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_ChangeNickName);

        /** Resp_ChangeNickName ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_ChangeNickName Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_ChangeNickName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_ChangeNickName instance
         */
        public static create(properties?: DcgProto.IResp_ChangeNickName): DcgProto.Resp_ChangeNickName;

        /**
         * Encodes the specified Resp_ChangeNickName message. Does not implicitly {@link DcgProto.Resp_ChangeNickName.verify|verify} messages.
         * @param m Resp_ChangeNickName message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_ChangeNickName, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_ChangeNickName message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_ChangeNickName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_ChangeNickName;

        /**
         * Verifies a Resp_ChangeNickName message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RolePartsUpdate. */
    interface IReq_RolePartsUpdate {

        /** Req_RolePartsUpdate PartsIID */
        PartsIID?: (Long|null);
    }

    /** Represents a Req_RolePartsUpdate. */
    class Req_RolePartsUpdate implements IReq_RolePartsUpdate {

        /**
         * Constructs a new Req_RolePartsUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RolePartsUpdate);

        /** Req_RolePartsUpdate PartsIID. */
        public PartsIID: Long;

        /**
         * Creates a new Req_RolePartsUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RolePartsUpdate instance
         */
        public static create(properties?: DcgProto.IReq_RolePartsUpdate): DcgProto.Req_RolePartsUpdate;

        /**
         * Encodes the specified Req_RolePartsUpdate message. Does not implicitly {@link DcgProto.Req_RolePartsUpdate.verify|verify} messages.
         * @param m Req_RolePartsUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RolePartsUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RolePartsUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RolePartsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RolePartsUpdate;

        /**
         * Verifies a Req_RolePartsUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RolePartsUpdate. */
    interface IResp_RolePartsUpdate {

        /** Resp_RolePartsUpdate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RolePartsUpdate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RolePartsUpdate. */
    class Resp_RolePartsUpdate implements IResp_RolePartsUpdate {

        /**
         * Constructs a new Resp_RolePartsUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RolePartsUpdate);

        /** Resp_RolePartsUpdate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RolePartsUpdate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RolePartsUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RolePartsUpdate instance
         */
        public static create(properties?: DcgProto.IResp_RolePartsUpdate): DcgProto.Resp_RolePartsUpdate;

        /**
         * Encodes the specified Resp_RolePartsUpdate message. Does not implicitly {@link DcgProto.Resp_RolePartsUpdate.verify|verify} messages.
         * @param m Resp_RolePartsUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RolePartsUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RolePartsUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RolePartsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RolePartsUpdate;

        /**
         * Verifies a Resp_RolePartsUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoleTitleUpdate. */
    interface IReq_RoleTitleUpdate {

        /** Req_RoleTitleUpdate Index */
        Index?: (number|null);

        /** Req_RoleTitleUpdate TitleCfgId */
        TitleCfgId?: (number|null);
    }

    /** Represents a Req_RoleTitleUpdate. */
    class Req_RoleTitleUpdate implements IReq_RoleTitleUpdate {

        /**
         * Constructs a new Req_RoleTitleUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoleTitleUpdate);

        /** Req_RoleTitleUpdate Index. */
        public Index: number;

        /** Req_RoleTitleUpdate TitleCfgId. */
        public TitleCfgId: number;

        /**
         * Creates a new Req_RoleTitleUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoleTitleUpdate instance
         */
        public static create(properties?: DcgProto.IReq_RoleTitleUpdate): DcgProto.Req_RoleTitleUpdate;

        /**
         * Encodes the specified Req_RoleTitleUpdate message. Does not implicitly {@link DcgProto.Req_RoleTitleUpdate.verify|verify} messages.
         * @param m Req_RoleTitleUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoleTitleUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoleTitleUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoleTitleUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoleTitleUpdate;

        /**
         * Verifies a Req_RoleTitleUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoleTitleUpdate. */
    interface IResp_RoleTitleUpdate {

        /** Resp_RoleTitleUpdate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoleTitleUpdate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RoleTitleUpdate. */
    class Resp_RoleTitleUpdate implements IResp_RoleTitleUpdate {

        /**
         * Constructs a new Resp_RoleTitleUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoleTitleUpdate);

        /** Resp_RoleTitleUpdate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoleTitleUpdate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RoleTitleUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoleTitleUpdate instance
         */
        public static create(properties?: DcgProto.IResp_RoleTitleUpdate): DcgProto.Resp_RoleTitleUpdate;

        /**
         * Encodes the specified Resp_RoleTitleUpdate message. Does not implicitly {@link DcgProto.Resp_RoleTitleUpdate.verify|verify} messages.
         * @param m Resp_RoleTitleUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoleTitleUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoleTitleUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoleTitleUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoleTitleUpdate;

        /**
         * Verifies a Resp_RoleTitleUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_RoleAllInfo. */
    interface IPush_RoleAllInfo {

        /** Push_RoleAllInfo Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Push_RoleAllInfo. */
    class Push_RoleAllInfo implements IPush_RoleAllInfo {

        /**
         * Constructs a new Push_RoleAllInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_RoleAllInfo);

        /** Push_RoleAllInfo Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Push_RoleAllInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_RoleAllInfo instance
         */
        public static create(properties?: DcgProto.IPush_RoleAllInfo): DcgProto.Push_RoleAllInfo;

        /**
         * Encodes the specified Push_RoleAllInfo message. Does not implicitly {@link DcgProto.Push_RoleAllInfo.verify|verify} messages.
         * @param m Push_RoleAllInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_RoleAllInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_RoleAllInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_RoleAllInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_RoleAllInfo;

        /**
         * Verifies a Push_RoleAllInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RemoteSendMsg. */
    interface IReq_RemoteSendMsg {

        /** Req_RemoteSendMsg Route */
        Route?: (string|null);

        /** Req_RemoteSendMsg Msg */
        Msg?: (Uint8Array|null);

        /** Req_RemoteSendMsg AccountIID */
        AccountIID?: (Long|null);
    }

    /** Represents a Req_RemoteSendMsg. */
    class Req_RemoteSendMsg implements IReq_RemoteSendMsg {

        /**
         * Constructs a new Req_RemoteSendMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RemoteSendMsg);

        /** Req_RemoteSendMsg Route. */
        public Route: string;

        /** Req_RemoteSendMsg Msg. */
        public Msg: Uint8Array;

        /** Req_RemoteSendMsg AccountIID. */
        public AccountIID: Long;

        /**
         * Creates a new Req_RemoteSendMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RemoteSendMsg instance
         */
        public static create(properties?: DcgProto.IReq_RemoteSendMsg): DcgProto.Req_RemoteSendMsg;

        /**
         * Encodes the specified Req_RemoteSendMsg message. Does not implicitly {@link DcgProto.Req_RemoteSendMsg.verify|verify} messages.
         * @param m Req_RemoteSendMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RemoteSendMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RemoteSendMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RemoteSendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RemoteSendMsg;

        /**
         * Verifies a Req_RemoteSendMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RemoteSendMsg. */
    interface IResp_RemoteSendMsg {

        /** Resp_RemoteSendMsg ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);
    }

    /** Represents a Resp_RemoteSendMsg. */
    class Resp_RemoteSendMsg implements IResp_RemoteSendMsg {

        /**
         * Constructs a new Resp_RemoteSendMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RemoteSendMsg);

        /** Resp_RemoteSendMsg ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /**
         * Creates a new Resp_RemoteSendMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RemoteSendMsg instance
         */
        public static create(properties?: DcgProto.IResp_RemoteSendMsg): DcgProto.Resp_RemoteSendMsg;

        /**
         * Encodes the specified Resp_RemoteSendMsg message. Does not implicitly {@link DcgProto.Resp_RemoteSendMsg.verify|verify} messages.
         * @param m Resp_RemoteSendMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RemoteSendMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RemoteSendMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RemoteSendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RemoteSendMsg;

        /**
         * Verifies a Resp_RemoteSendMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoleGM. */
    interface IReq_RoleGM {

        /** Req_RoleGM Cmd */
        Cmd?: (DcgProto.E_GM_CMD|null);

        /** Req_RoleGM GmParams */
        GmParams?: (DcgProto.IS_GmParams|null);
    }

    /** Represents a Req_RoleGM. */
    class Req_RoleGM implements IReq_RoleGM {

        /**
         * Constructs a new Req_RoleGM.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoleGM);

        /** Req_RoleGM Cmd. */
        public Cmd: DcgProto.E_GM_CMD;

        /** Req_RoleGM GmParams. */
        public GmParams?: (DcgProto.IS_GmParams|null);

        /**
         * Creates a new Req_RoleGM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoleGM instance
         */
        public static create(properties?: DcgProto.IReq_RoleGM): DcgProto.Req_RoleGM;

        /**
         * Encodes the specified Req_RoleGM message. Does not implicitly {@link DcgProto.Req_RoleGM.verify|verify} messages.
         * @param m Req_RoleGM message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoleGM, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoleGM message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoleGM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoleGM;

        /**
         * Verifies a Req_RoleGM message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoleGM. */
    interface IResp_RoleGM {

        /** Resp_RoleGM ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoleGM Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoleGM MatchData */
        MatchData?: (DcgProto.IS_MatchData|null);
    }

    /** Represents a Resp_RoleGM. */
    class Resp_RoleGM implements IResp_RoleGM {

        /**
         * Constructs a new Resp_RoleGM.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoleGM);

        /** Resp_RoleGM ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoleGM Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoleGM MatchData. */
        public MatchData?: (DcgProto.IS_MatchData|null);

        /**
         * Creates a new Resp_RoleGM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoleGM instance
         */
        public static create(properties?: DcgProto.IResp_RoleGM): DcgProto.Resp_RoleGM;

        /**
         * Encodes the specified Resp_RoleGM message. Does not implicitly {@link DcgProto.Resp_RoleGM.verify|verify} messages.
         * @param m Resp_RoleGM message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoleGM, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoleGM message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoleGM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoleGM;

        /**
         * Verifies a Resp_RoleGM message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoleSync. */
    interface IReq_RoleSync {
    }

    /** Represents a Req_RoleSync. */
    class Req_RoleSync implements IReq_RoleSync {

        /**
         * Constructs a new Req_RoleSync.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoleSync);

        /**
         * Creates a new Req_RoleSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoleSync instance
         */
        public static create(properties?: DcgProto.IReq_RoleSync): DcgProto.Req_RoleSync;

        /**
         * Encodes the specified Req_RoleSync message. Does not implicitly {@link DcgProto.Req_RoleSync.verify|verify} messages.
         * @param m Req_RoleSync message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoleSync, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoleSync message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoleSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoleSync;

        /**
         * Verifies a Req_RoleSync message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoleSync. */
    interface IResp_RoleSync {

        /** Resp_RoleSync ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoleSync Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RoleSync. */
    class Resp_RoleSync implements IResp_RoleSync {

        /**
         * Constructs a new Resp_RoleSync.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoleSync);

        /** Resp_RoleSync ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoleSync Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RoleSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoleSync instance
         */
        public static create(properties?: DcgProto.IResp_RoleSync): DcgProto.Resp_RoleSync;

        /**
         * Encodes the specified Resp_RoleSync message. Does not implicitly {@link DcgProto.Resp_RoleSync.verify|verify} messages.
         * @param m Resp_RoleSync message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoleSync, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoleSync message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoleSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoleSync;

        /**
         * Verifies a Resp_RoleSync message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoleDebug. */
    interface IReq_RoleDebug {

        /** Req_RoleDebug CfgId */
        CfgId?: (number|null);

        /** Req_RoleDebug Num */
        Num?: (number|null);
    }

    /** Represents a Req_RoleDebug. */
    class Req_RoleDebug implements IReq_RoleDebug {

        /**
         * Constructs a new Req_RoleDebug.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoleDebug);

        /** Req_RoleDebug CfgId. */
        public CfgId: number;

        /** Req_RoleDebug Num. */
        public Num: number;

        /**
         * Creates a new Req_RoleDebug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoleDebug instance
         */
        public static create(properties?: DcgProto.IReq_RoleDebug): DcgProto.Req_RoleDebug;

        /**
         * Encodes the specified Req_RoleDebug message. Does not implicitly {@link DcgProto.Req_RoleDebug.verify|verify} messages.
         * @param m Req_RoleDebug message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoleDebug, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoleDebug message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoleDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoleDebug;

        /**
         * Verifies a Req_RoleDebug message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoleDebug. */
    interface IResp_RoleDebug {

        /** Resp_RoleDebug ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoleDebug Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_RoleDebug. */
    class Resp_RoleDebug implements IResp_RoleDebug {

        /**
         * Constructs a new Resp_RoleDebug.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoleDebug);

        /** Resp_RoleDebug ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoleDebug Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_RoleDebug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoleDebug instance
         */
        public static create(properties?: DcgProto.IResp_RoleDebug): DcgProto.Resp_RoleDebug;

        /**
         * Encodes the specified Resp_RoleDebug message. Does not implicitly {@link DcgProto.Resp_RoleDebug.verify|verify} messages.
         * @param m Resp_RoleDebug message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoleDebug, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoleDebug message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoleDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoleDebug;

        /**
         * Verifies a Resp_RoleDebug message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoleDetails. */
    interface IReq_RoleDetails {

        /** Req_RoleDetails RoleIID */
        RoleIID?: (Long|null);
    }

    /** Represents a Req_RoleDetails. */
    class Req_RoleDetails implements IReq_RoleDetails {

        /**
         * Constructs a new Req_RoleDetails.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoleDetails);

        /** Req_RoleDetails RoleIID. */
        public RoleIID: Long;

        /**
         * Creates a new Req_RoleDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoleDetails instance
         */
        public static create(properties?: DcgProto.IReq_RoleDetails): DcgProto.Req_RoleDetails;

        /**
         * Encodes the specified Req_RoleDetails message. Does not implicitly {@link DcgProto.Req_RoleDetails.verify|verify} messages.
         * @param m Req_RoleDetails message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoleDetails, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoleDetails message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoleDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoleDetails;

        /**
         * Verifies a Req_RoleDetails message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoleDetails. */
    interface IResp_RoleDetails {

        /** Resp_RoleDetails ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoleDetails Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoleDetails RoleInfo */
        RoleInfo?: (DcgProto.IS_OtherRole|null);
    }

    /** Represents a Resp_RoleDetails. */
    class Resp_RoleDetails implements IResp_RoleDetails {

        /**
         * Constructs a new Resp_RoleDetails.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoleDetails);

        /** Resp_RoleDetails ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoleDetails Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoleDetails RoleInfo. */
        public RoleInfo?: (DcgProto.IS_OtherRole|null);

        /**
         * Creates a new Resp_RoleDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoleDetails instance
         */
        public static create(properties?: DcgProto.IResp_RoleDetails): DcgProto.Resp_RoleDetails;

        /**
         * Encodes the specified Resp_RoleDetails message. Does not implicitly {@link DcgProto.Resp_RoleDetails.verify|verify} messages.
         * @param m Resp_RoleDetails message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoleDetails, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoleDetails message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoleDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoleDetails;

        /**
         * Verifies a Resp_RoleDetails message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_RoleExtraSave. */
    interface IReq_RoleExtraSave {

        /** Req_RoleExtraSave ExtraType */
        ExtraType?: (DcgProto.E_ExtraType|null);

        /** Req_RoleExtraSave RoleExtra */
        RoleExtra?: (DcgProto.IS_RoleExtra|null);
    }

    /** Represents a Req_RoleExtraSave. */
    class Req_RoleExtraSave implements IReq_RoleExtraSave {

        /**
         * Constructs a new Req_RoleExtraSave.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_RoleExtraSave);

        /** Req_RoleExtraSave ExtraType. */
        public ExtraType: DcgProto.E_ExtraType;

        /** Req_RoleExtraSave RoleExtra. */
        public RoleExtra?: (DcgProto.IS_RoleExtra|null);

        /**
         * Creates a new Req_RoleExtraSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_RoleExtraSave instance
         */
        public static create(properties?: DcgProto.IReq_RoleExtraSave): DcgProto.Req_RoleExtraSave;

        /**
         * Encodes the specified Req_RoleExtraSave message. Does not implicitly {@link DcgProto.Req_RoleExtraSave.verify|verify} messages.
         * @param m Req_RoleExtraSave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_RoleExtraSave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_RoleExtraSave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_RoleExtraSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_RoleExtraSave;

        /**
         * Verifies a Req_RoleExtraSave message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_RoleExtraSave. */
    interface IResp_RoleExtraSave {

        /** Resp_RoleExtraSave ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_RoleExtraSave Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoleExtraSave RoleExtra */
        RoleExtra?: (DcgProto.IS_RoleExtra|null);
    }

    /** Represents a Resp_RoleExtraSave. */
    class Resp_RoleExtraSave implements IResp_RoleExtraSave {

        /**
         * Constructs a new Resp_RoleExtraSave.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_RoleExtraSave);

        /** Resp_RoleExtraSave ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_RoleExtraSave Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_RoleExtraSave RoleExtra. */
        public RoleExtra?: (DcgProto.IS_RoleExtra|null);

        /**
         * Creates a new Resp_RoleExtraSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_RoleExtraSave instance
         */
        public static create(properties?: DcgProto.IResp_RoleExtraSave): DcgProto.Resp_RoleExtraSave;

        /**
         * Encodes the specified Resp_RoleExtraSave message. Does not implicitly {@link DcgProto.Resp_RoleExtraSave.verify|verify} messages.
         * @param m Resp_RoleExtraSave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_RoleExtraSave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_RoleExtraSave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_RoleExtraSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_RoleExtraSave;

        /**
         * Verifies a Resp_RoleExtraSave message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckCreate. */
    interface IReq_DeckCreate {

        /** Req_DeckCreate DeckInfo */
        DeckInfo?: (DcgProto.IS_DeckInfo|null);

        /** Req_DeckCreate DeckExtendInfo */
        DeckExtendInfo?: (DcgProto.IS_DeckExtendInfo|null);
    }

    /** Represents a Req_DeckCreate. */
    class Req_DeckCreate implements IReq_DeckCreate {

        /**
         * Constructs a new Req_DeckCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckCreate);

        /** Req_DeckCreate DeckInfo. */
        public DeckInfo?: (DcgProto.IS_DeckInfo|null);

        /** Req_DeckCreate DeckExtendInfo. */
        public DeckExtendInfo?: (DcgProto.IS_DeckExtendInfo|null);

        /**
         * Creates a new Req_DeckCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckCreate instance
         */
        public static create(properties?: DcgProto.IReq_DeckCreate): DcgProto.Req_DeckCreate;

        /**
         * Encodes the specified Req_DeckCreate message. Does not implicitly {@link DcgProto.Req_DeckCreate.verify|verify} messages.
         * @param m Req_DeckCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckCreate;

        /**
         * Verifies a Req_DeckCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckCreate. */
    interface IResp_DeckCreate {

        /** Resp_DeckCreate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckCreate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DeckCreate. */
    class Resp_DeckCreate implements IResp_DeckCreate {

        /**
         * Constructs a new Resp_DeckCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckCreate);

        /** Resp_DeckCreate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckCreate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DeckCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckCreate instance
         */
        public static create(properties?: DcgProto.IResp_DeckCreate): DcgProto.Resp_DeckCreate;

        /**
         * Encodes the specified Resp_DeckCreate message. Does not implicitly {@link DcgProto.Resp_DeckCreate.verify|verify} messages.
         * @param m Resp_DeckCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckCreate;

        /**
         * Verifies a Resp_DeckCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckCopy. */
    interface IReq_DeckCopy {

        /** Req_DeckCopy DeckIID */
        DeckIID?: (Long|null);

        /** Req_DeckCopy CfgId */
        CfgId?: (number|null);
    }

    /** Represents a Req_DeckCopy. */
    class Req_DeckCopy implements IReq_DeckCopy {

        /**
         * Constructs a new Req_DeckCopy.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckCopy);

        /** Req_DeckCopy DeckIID. */
        public DeckIID: Long;

        /** Req_DeckCopy CfgId. */
        public CfgId: number;

        /**
         * Creates a new Req_DeckCopy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckCopy instance
         */
        public static create(properties?: DcgProto.IReq_DeckCopy): DcgProto.Req_DeckCopy;

        /**
         * Encodes the specified Req_DeckCopy message. Does not implicitly {@link DcgProto.Req_DeckCopy.verify|verify} messages.
         * @param m Req_DeckCopy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckCopy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckCopy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckCopy;

        /**
         * Verifies a Req_DeckCopy message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckCopy. */
    interface IResp_DeckCopy {

        /** Resp_DeckCopy ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckCopy Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DeckCopy. */
    class Resp_DeckCopy implements IResp_DeckCopy {

        /**
         * Constructs a new Resp_DeckCopy.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckCopy);

        /** Resp_DeckCopy ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckCopy Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DeckCopy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckCopy instance
         */
        public static create(properties?: DcgProto.IResp_DeckCopy): DcgProto.Resp_DeckCopy;

        /**
         * Encodes the specified Resp_DeckCopy message. Does not implicitly {@link DcgProto.Resp_DeckCopy.verify|verify} messages.
         * @param m Resp_DeckCopy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckCopy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckCopy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckCopy;

        /**
         * Verifies a Resp_DeckCopy message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckUpdate. */
    interface IReq_DeckUpdate {

        /** Req_DeckUpdate DeckInfo */
        DeckInfo?: (DcgProto.IS_DeckInfo|null);
    }

    /** Represents a Req_DeckUpdate. */
    class Req_DeckUpdate implements IReq_DeckUpdate {

        /**
         * Constructs a new Req_DeckUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckUpdate);

        /** Req_DeckUpdate DeckInfo. */
        public DeckInfo?: (DcgProto.IS_DeckInfo|null);

        /**
         * Creates a new Req_DeckUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckUpdate instance
         */
        public static create(properties?: DcgProto.IReq_DeckUpdate): DcgProto.Req_DeckUpdate;

        /**
         * Encodes the specified Req_DeckUpdate message. Does not implicitly {@link DcgProto.Req_DeckUpdate.verify|verify} messages.
         * @param m Req_DeckUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckUpdate;

        /**
         * Verifies a Req_DeckUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckUpdate. */
    interface IResp_DeckUpdate {

        /** Resp_DeckUpdate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckUpdate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DeckUpdate. */
    class Resp_DeckUpdate implements IResp_DeckUpdate {

        /**
         * Constructs a new Resp_DeckUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckUpdate);

        /** Resp_DeckUpdate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckUpdate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DeckUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckUpdate instance
         */
        public static create(properties?: DcgProto.IResp_DeckUpdate): DcgProto.Resp_DeckUpdate;

        /**
         * Encodes the specified Resp_DeckUpdate message. Does not implicitly {@link DcgProto.Resp_DeckUpdate.verify|verify} messages.
         * @param m Resp_DeckUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckUpdate;

        /**
         * Verifies a Resp_DeckUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckPartsUpdate. */
    interface IReq_DeckPartsUpdate {

        /** Req_DeckPartsUpdate DeckIID */
        DeckIID?: (Long|null);

        /** Req_DeckPartsUpdate PartsIID */
        PartsIID?: (Long|null);
    }

    /** Represents a Req_DeckPartsUpdate. */
    class Req_DeckPartsUpdate implements IReq_DeckPartsUpdate {

        /**
         * Constructs a new Req_DeckPartsUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckPartsUpdate);

        /** Req_DeckPartsUpdate DeckIID. */
        public DeckIID: Long;

        /** Req_DeckPartsUpdate PartsIID. */
        public PartsIID: Long;

        /**
         * Creates a new Req_DeckPartsUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckPartsUpdate instance
         */
        public static create(properties?: DcgProto.IReq_DeckPartsUpdate): DcgProto.Req_DeckPartsUpdate;

        /**
         * Encodes the specified Req_DeckPartsUpdate message. Does not implicitly {@link DcgProto.Req_DeckPartsUpdate.verify|verify} messages.
         * @param m Req_DeckPartsUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckPartsUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckPartsUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckPartsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckPartsUpdate;

        /**
         * Verifies a Req_DeckPartsUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckPartsUpdate. */
    interface IResp_DeckPartsUpdate {

        /** Resp_DeckPartsUpdate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckPartsUpdate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DeckPartsUpdate. */
    class Resp_DeckPartsUpdate implements IResp_DeckPartsUpdate {

        /**
         * Constructs a new Resp_DeckPartsUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckPartsUpdate);

        /** Resp_DeckPartsUpdate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckPartsUpdate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DeckPartsUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckPartsUpdate instance
         */
        public static create(properties?: DcgProto.IResp_DeckPartsUpdate): DcgProto.Resp_DeckPartsUpdate;

        /**
         * Encodes the specified Resp_DeckPartsUpdate message. Does not implicitly {@link DcgProto.Resp_DeckPartsUpdate.verify|verify} messages.
         * @param m Resp_DeckPartsUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckPartsUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckPartsUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckPartsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckPartsUpdate;

        /**
         * Verifies a Resp_DeckPartsUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckDelete. */
    interface IReq_DeckDelete {

        /** Req_DeckDelete DeckIID */
        DeckIID?: (Long[]|null);
    }

    /** Represents a Req_DeckDelete. */
    class Req_DeckDelete implements IReq_DeckDelete {

        /**
         * Constructs a new Req_DeckDelete.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckDelete);

        /** Req_DeckDelete DeckIID. */
        public DeckIID: Long[];

        /**
         * Creates a new Req_DeckDelete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckDelete instance
         */
        public static create(properties?: DcgProto.IReq_DeckDelete): DcgProto.Req_DeckDelete;

        /**
         * Encodes the specified Req_DeckDelete message. Does not implicitly {@link DcgProto.Req_DeckDelete.verify|verify} messages.
         * @param m Req_DeckDelete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckDelete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckDelete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckDelete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckDelete;

        /**
         * Verifies a Req_DeckDelete message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckDelete. */
    interface IResp_DeckDelete {

        /** Resp_DeckDelete ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckDelete Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DeckDelete. */
    class Resp_DeckDelete implements IResp_DeckDelete {

        /**
         * Constructs a new Resp_DeckDelete.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckDelete);

        /** Resp_DeckDelete ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckDelete Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DeckDelete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckDelete instance
         */
        public static create(properties?: DcgProto.IResp_DeckDelete): DcgProto.Resp_DeckDelete;

        /**
         * Encodes the specified Resp_DeckDelete message. Does not implicitly {@link DcgProto.Resp_DeckDelete.verify|verify} messages.
         * @param m Resp_DeckDelete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckDelete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckDelete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckDelete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckDelete;

        /**
         * Verifies a Resp_DeckDelete message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckRandomHand. */
    interface IReq_DeckRandomHand {

        /** Req_DeckRandomHand DeckIID */
        DeckIID?: (Long|null);
    }

    /** Represents a Req_DeckRandomHand. */
    class Req_DeckRandomHand implements IReq_DeckRandomHand {

        /**
         * Constructs a new Req_DeckRandomHand.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckRandomHand);

        /** Req_DeckRandomHand DeckIID. */
        public DeckIID: Long;

        /**
         * Creates a new Req_DeckRandomHand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckRandomHand instance
         */
        public static create(properties?: DcgProto.IReq_DeckRandomHand): DcgProto.Req_DeckRandomHand;

        /**
         * Encodes the specified Req_DeckRandomHand message. Does not implicitly {@link DcgProto.Req_DeckRandomHand.verify|verify} messages.
         * @param m Req_DeckRandomHand message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckRandomHand, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckRandomHand message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckRandomHand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckRandomHand;

        /**
         * Verifies a Req_DeckRandomHand message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckRandomHand. */
    interface IResp_DeckRandomHand {

        /** Resp_DeckRandomHand ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckRandomHand Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_DeckRandomHand CardHand */
        CardHand?: (DcgProto.IS_CardData[]|null);
    }

    /** Represents a Resp_DeckRandomHand. */
    class Resp_DeckRandomHand implements IResp_DeckRandomHand {

        /**
         * Constructs a new Resp_DeckRandomHand.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckRandomHand);

        /** Resp_DeckRandomHand ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckRandomHand Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_DeckRandomHand CardHand. */
        public CardHand: DcgProto.IS_CardData[];

        /**
         * Creates a new Resp_DeckRandomHand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckRandomHand instance
         */
        public static create(properties?: DcgProto.IResp_DeckRandomHand): DcgProto.Resp_DeckRandomHand;

        /**
         * Encodes the specified Resp_DeckRandomHand message. Does not implicitly {@link DcgProto.Resp_DeckRandomHand.verify|verify} messages.
         * @param m Resp_DeckRandomHand message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckRandomHand, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckRandomHand message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckRandomHand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckRandomHand;

        /**
         * Verifies a Resp_DeckRandomHand message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckAddHand. */
    interface IReq_DeckAddHand {

        /** Req_DeckAddHand DeckIID */
        DeckIID?: (Long|null);
    }

    /** Represents a Req_DeckAddHand. */
    class Req_DeckAddHand implements IReq_DeckAddHand {

        /**
         * Constructs a new Req_DeckAddHand.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckAddHand);

        /** Req_DeckAddHand DeckIID. */
        public DeckIID: Long;

        /**
         * Creates a new Req_DeckAddHand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckAddHand instance
         */
        public static create(properties?: DcgProto.IReq_DeckAddHand): DcgProto.Req_DeckAddHand;

        /**
         * Encodes the specified Req_DeckAddHand message. Does not implicitly {@link DcgProto.Req_DeckAddHand.verify|verify} messages.
         * @param m Req_DeckAddHand message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckAddHand, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckAddHand message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckAddHand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckAddHand;

        /**
         * Verifies a Req_DeckAddHand message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckAddHand. */
    interface IResp_DeckAddHand {

        /** Resp_DeckAddHand ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckAddHand Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_DeckAddHand CardHand */
        CardHand?: (DcgProto.IS_CardData[]|null);
    }

    /** Represents a Resp_DeckAddHand. */
    class Resp_DeckAddHand implements IResp_DeckAddHand {

        /**
         * Constructs a new Resp_DeckAddHand.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckAddHand);

        /** Resp_DeckAddHand ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckAddHand Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_DeckAddHand CardHand. */
        public CardHand: DcgProto.IS_CardData[];

        /**
         * Creates a new Resp_DeckAddHand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckAddHand instance
         */
        public static create(properties?: DcgProto.IResp_DeckAddHand): DcgProto.Resp_DeckAddHand;

        /**
         * Encodes the specified Resp_DeckAddHand message. Does not implicitly {@link DcgProto.Resp_DeckAddHand.verify|verify} messages.
         * @param m Resp_DeckAddHand message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckAddHand, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckAddHand message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckAddHand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckAddHand;

        /**
         * Verifies a Resp_DeckAddHand message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_DeckPageUpdate. */
    interface IReq_DeckPageUpdate {

        /** Req_DeckPageUpdate DeckIID */
        DeckIID?: (Long|null);

        /** Req_DeckPageUpdate CfgId */
        CfgId?: (number[]|null);
    }

    /** Represents a Req_DeckPageUpdate. */
    class Req_DeckPageUpdate implements IReq_DeckPageUpdate {

        /**
         * Constructs a new Req_DeckPageUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_DeckPageUpdate);

        /** Req_DeckPageUpdate DeckIID. */
        public DeckIID: Long;

        /** Req_DeckPageUpdate CfgId. */
        public CfgId: number[];

        /**
         * Creates a new Req_DeckPageUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_DeckPageUpdate instance
         */
        public static create(properties?: DcgProto.IReq_DeckPageUpdate): DcgProto.Req_DeckPageUpdate;

        /**
         * Encodes the specified Req_DeckPageUpdate message. Does not implicitly {@link DcgProto.Req_DeckPageUpdate.verify|verify} messages.
         * @param m Req_DeckPageUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_DeckPageUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_DeckPageUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_DeckPageUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_DeckPageUpdate;

        /**
         * Verifies a Req_DeckPageUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_DeckPageUpdate. */
    interface IResp_DeckPageUpdate {

        /** Resp_DeckPageUpdate ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_DeckPageUpdate Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_DeckPageUpdate. */
    class Resp_DeckPageUpdate implements IResp_DeckPageUpdate {

        /**
         * Constructs a new Resp_DeckPageUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_DeckPageUpdate);

        /** Resp_DeckPageUpdate ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_DeckPageUpdate Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_DeckPageUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_DeckPageUpdate instance
         */
        public static create(properties?: DcgProto.IResp_DeckPageUpdate): DcgProto.Resp_DeckPageUpdate;

        /**
         * Encodes the specified Resp_DeckPageUpdate message. Does not implicitly {@link DcgProto.Resp_DeckPageUpdate.verify|verify} messages.
         * @param m Resp_DeckPageUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_DeckPageUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_DeckPageUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_DeckPageUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_DeckPageUpdate;

        /**
         * Verifies a Resp_DeckPageUpdate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_CardCollect. */
    interface IReq_CardCollect {

        /** Req_CardCollect CollectIID */
        CollectIID?: (Long|null);

        /** Req_CardCollect CfgId */
        CfgId?: (number|null);
    }

    /** Represents a Req_CardCollect. */
    class Req_CardCollect implements IReq_CardCollect {

        /**
         * Constructs a new Req_CardCollect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_CardCollect);

        /** Req_CardCollect CollectIID. */
        public CollectIID: Long;

        /** Req_CardCollect CfgId. */
        public CfgId: number;

        /**
         * Creates a new Req_CardCollect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_CardCollect instance
         */
        public static create(properties?: DcgProto.IReq_CardCollect): DcgProto.Req_CardCollect;

        /**
         * Encodes the specified Req_CardCollect message. Does not implicitly {@link DcgProto.Req_CardCollect.verify|verify} messages.
         * @param m Req_CardCollect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_CardCollect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_CardCollect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_CardCollect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_CardCollect;

        /**
         * Verifies a Req_CardCollect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_CardCollect. */
    interface IResp_CardCollect {

        /** Resp_CardCollect ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_CardCollect Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_CardCollect. */
    class Resp_CardCollect implements IResp_CardCollect {

        /**
         * Constructs a new Resp_CardCollect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_CardCollect);

        /** Resp_CardCollect ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_CardCollect Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_CardCollect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_CardCollect instance
         */
        public static create(properties?: DcgProto.IResp_CardCollect): DcgProto.Resp_CardCollect;

        /**
         * Encodes the specified Resp_CardCollect message. Does not implicitly {@link DcgProto.Resp_CardCollect.verify|verify} messages.
         * @param m Resp_CardCollect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_CardCollect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_CardCollect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_CardCollect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_CardCollect;

        /**
         * Verifies a Resp_CardCollect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_CardDeCollect. */
    interface IReq_CardDeCollect {

        /** Req_CardDeCollect CollectIID */
        CollectIID?: (Long|null);

        /** Req_CardDeCollect CfgId */
        CfgId?: (number|null);
    }

    /** Represents a Req_CardDeCollect. */
    class Req_CardDeCollect implements IReq_CardDeCollect {

        /**
         * Constructs a new Req_CardDeCollect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_CardDeCollect);

        /** Req_CardDeCollect CollectIID. */
        public CollectIID: Long;

        /** Req_CardDeCollect CfgId. */
        public CfgId: number;

        /**
         * Creates a new Req_CardDeCollect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_CardDeCollect instance
         */
        public static create(properties?: DcgProto.IReq_CardDeCollect): DcgProto.Req_CardDeCollect;

        /**
         * Encodes the specified Req_CardDeCollect message. Does not implicitly {@link DcgProto.Req_CardDeCollect.verify|verify} messages.
         * @param m Req_CardDeCollect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_CardDeCollect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_CardDeCollect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_CardDeCollect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_CardDeCollect;

        /**
         * Verifies a Req_CardDeCollect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_CardDeCollect. */
    interface IResp_CardDeCollect {

        /** Resp_CardDeCollect ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_CardDeCollect Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_CardDeCollect. */
    class Resp_CardDeCollect implements IResp_CardDeCollect {

        /**
         * Constructs a new Resp_CardDeCollect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_CardDeCollect);

        /** Resp_CardDeCollect ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_CardDeCollect Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_CardDeCollect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_CardDeCollect instance
         */
        public static create(properties?: DcgProto.IResp_CardDeCollect): DcgProto.Resp_CardDeCollect;

        /**
         * Encodes the specified Resp_CardDeCollect message. Does not implicitly {@link DcgProto.Resp_CardDeCollect.verify|verify} messages.
         * @param m Resp_CardDeCollect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_CardDeCollect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_CardDeCollect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_CardDeCollect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_CardDeCollect;

        /**
         * Verifies a Resp_CardDeCollect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_CardCompose. */
    interface IReq_CardCompose {

        /** Req_CardCompose CardInfo */
        CardInfo?: (DcgProto.IS_CardInfo[]|null);
    }

    /** Represents a Req_CardCompose. */
    class Req_CardCompose implements IReq_CardCompose {

        /**
         * Constructs a new Req_CardCompose.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_CardCompose);

        /** Req_CardCompose CardInfo. */
        public CardInfo: DcgProto.IS_CardInfo[];

        /**
         * Creates a new Req_CardCompose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_CardCompose instance
         */
        public static create(properties?: DcgProto.IReq_CardCompose): DcgProto.Req_CardCompose;

        /**
         * Encodes the specified Req_CardCompose message. Does not implicitly {@link DcgProto.Req_CardCompose.verify|verify} messages.
         * @param m Req_CardCompose message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_CardCompose, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_CardCompose message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_CardCompose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_CardCompose;

        /**
         * Verifies a Req_CardCompose message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_CardCompose. */
    interface IResp_CardCompose {

        /** Resp_CardCompose ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_CardCompose Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_CardCompose. */
    class Resp_CardCompose implements IResp_CardCompose {

        /**
         * Constructs a new Resp_CardCompose.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_CardCompose);

        /** Resp_CardCompose ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_CardCompose Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_CardCompose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_CardCompose instance
         */
        public static create(properties?: DcgProto.IResp_CardCompose): DcgProto.Resp_CardCompose;

        /**
         * Encodes the specified Resp_CardCompose message. Does not implicitly {@link DcgProto.Resp_CardCompose.verify|verify} messages.
         * @param m Resp_CardCompose message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_CardCompose, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_CardCompose message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_CardCompose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_CardCompose;

        /**
         * Verifies a Resp_CardCompose message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_CardDeCompose. */
    interface IReq_CardDeCompose {

        /** Req_CardDeCompose CardInfo */
        CardInfo?: (DcgProto.IS_CardInfo[]|null);
    }

    /** Represents a Req_CardDeCompose. */
    class Req_CardDeCompose implements IReq_CardDeCompose {

        /**
         * Constructs a new Req_CardDeCompose.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_CardDeCompose);

        /** Req_CardDeCompose CardInfo. */
        public CardInfo: DcgProto.IS_CardInfo[];

        /**
         * Creates a new Req_CardDeCompose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_CardDeCompose instance
         */
        public static create(properties?: DcgProto.IReq_CardDeCompose): DcgProto.Req_CardDeCompose;

        /**
         * Encodes the specified Req_CardDeCompose message. Does not implicitly {@link DcgProto.Req_CardDeCompose.verify|verify} messages.
         * @param m Req_CardDeCompose message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_CardDeCompose, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_CardDeCompose message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_CardDeCompose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_CardDeCompose;

        /**
         * Verifies a Req_CardDeCompose message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_CardDeCompose. */
    interface IResp_CardDeCompose {

        /** Resp_CardDeCompose ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_CardDeCompose Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_CardDeCompose. */
    class Resp_CardDeCompose implements IResp_CardDeCompose {

        /**
         * Constructs a new Resp_CardDeCompose.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_CardDeCompose);

        /** Resp_CardDeCompose ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_CardDeCompose Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_CardDeCompose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_CardDeCompose instance
         */
        public static create(properties?: DcgProto.IResp_CardDeCompose): DcgProto.Resp_CardDeCompose;

        /**
         * Encodes the specified Resp_CardDeCompose message. Does not implicitly {@link DcgProto.Resp_CardDeCompose.verify|verify} messages.
         * @param m Resp_CardDeCompose message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_CardDeCompose, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_CardDeCompose message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_CardDeCompose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_CardDeCompose;

        /**
         * Verifies a Resp_CardDeCompose message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_ShopBuy. */
    interface IReq_ShopBuy {

        /** Req_ShopBuy ShopIID */
        ShopIID?: (Long|null);

        /** Req_ShopBuy CfgId */
        CfgId?: (number|null);

        /** Req_ShopBuy BuyNum */
        BuyNum?: (number|null);
    }

    /** Represents a Req_ShopBuy. */
    class Req_ShopBuy implements IReq_ShopBuy {

        /**
         * Constructs a new Req_ShopBuy.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_ShopBuy);

        /** Req_ShopBuy ShopIID. */
        public ShopIID: Long;

        /** Req_ShopBuy CfgId. */
        public CfgId: number;

        /** Req_ShopBuy BuyNum. */
        public BuyNum: number;

        /**
         * Creates a new Req_ShopBuy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_ShopBuy instance
         */
        public static create(properties?: DcgProto.IReq_ShopBuy): DcgProto.Req_ShopBuy;

        /**
         * Encodes the specified Req_ShopBuy message. Does not implicitly {@link DcgProto.Req_ShopBuy.verify|verify} messages.
         * @param m Req_ShopBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_ShopBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_ShopBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_ShopBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_ShopBuy;

        /**
         * Verifies a Req_ShopBuy message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_ShopBuy. */
    interface IResp_ShopBuy {

        /** Resp_ShopBuy ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_ShopBuy Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_ShopBuy. */
    class Resp_ShopBuy implements IResp_ShopBuy {

        /**
         * Constructs a new Resp_ShopBuy.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_ShopBuy);

        /** Resp_ShopBuy ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_ShopBuy Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_ShopBuy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_ShopBuy instance
         */
        public static create(properties?: DcgProto.IResp_ShopBuy): DcgProto.Resp_ShopBuy;

        /**
         * Encodes the specified Resp_ShopBuy message. Does not implicitly {@link DcgProto.Resp_ShopBuy.verify|verify} messages.
         * @param m Resp_ShopBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_ShopBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_ShopBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_ShopBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_ShopBuy;

        /**
         * Verifies a Resp_ShopBuy message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_CardBagBuy. */
    interface IReq_CardBagBuy {

        /** Req_CardBagBuy CardBagIID */
        CardBagIID?: (Long|null);

        /** Req_CardBagBuy BuyNum */
        BuyNum?: (number|null);
    }

    /** Represents a Req_CardBagBuy. */
    class Req_CardBagBuy implements IReq_CardBagBuy {

        /**
         * Constructs a new Req_CardBagBuy.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_CardBagBuy);

        /** Req_CardBagBuy CardBagIID. */
        public CardBagIID: Long;

        /** Req_CardBagBuy BuyNum. */
        public BuyNum: number;

        /**
         * Creates a new Req_CardBagBuy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_CardBagBuy instance
         */
        public static create(properties?: DcgProto.IReq_CardBagBuy): DcgProto.Req_CardBagBuy;

        /**
         * Encodes the specified Req_CardBagBuy message. Does not implicitly {@link DcgProto.Req_CardBagBuy.verify|verify} messages.
         * @param m Req_CardBagBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_CardBagBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_CardBagBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_CardBagBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_CardBagBuy;

        /**
         * Verifies a Req_CardBagBuy message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_CardBagBuy. */
    interface IResp_CardBagBuy {

        /** Resp_CardBagBuy ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_CardBagBuy Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_CardBagBuy AddDataList */
        AddDataList?: (DcgProto.IS_AddData[]|null);
    }

    /** Represents a Resp_CardBagBuy. */
    class Resp_CardBagBuy implements IResp_CardBagBuy {

        /**
         * Constructs a new Resp_CardBagBuy.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_CardBagBuy);

        /** Resp_CardBagBuy ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_CardBagBuy Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Resp_CardBagBuy AddDataList. */
        public AddDataList: DcgProto.IS_AddData[];

        /**
         * Creates a new Resp_CardBagBuy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_CardBagBuy instance
         */
        public static create(properties?: DcgProto.IResp_CardBagBuy): DcgProto.Resp_CardBagBuy;

        /**
         * Encodes the specified Resp_CardBagBuy message. Does not implicitly {@link DcgProto.Resp_CardBagBuy.verify|verify} messages.
         * @param m Resp_CardBagBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_CardBagBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_CardBagBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_CardBagBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_CardBagBuy;

        /**
         * Verifies a Resp_CardBagBuy message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_StoryReward. */
    interface IReq_StoryReward {

        /** Req_StoryReward StoryIID */
        StoryIID?: (Long|null);
    }

    /** Represents a Req_StoryReward. */
    class Req_StoryReward implements IReq_StoryReward {

        /**
         * Constructs a new Req_StoryReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_StoryReward);

        /** Req_StoryReward StoryIID. */
        public StoryIID: Long;

        /**
         * Creates a new Req_StoryReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_StoryReward instance
         */
        public static create(properties?: DcgProto.IReq_StoryReward): DcgProto.Req_StoryReward;

        /**
         * Encodes the specified Req_StoryReward message. Does not implicitly {@link DcgProto.Req_StoryReward.verify|verify} messages.
         * @param m Req_StoryReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_StoryReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_StoryReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_StoryReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_StoryReward;

        /**
         * Verifies a Req_StoryReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_StoryReward. */
    interface IResp_StoryReward {

        /** Resp_StoryReward ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_StoryReward Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_StoryReward. */
    class Resp_StoryReward implements IResp_StoryReward {

        /**
         * Constructs a new Resp_StoryReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_StoryReward);

        /** Resp_StoryReward ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_StoryReward Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_StoryReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_StoryReward instance
         */
        public static create(properties?: DcgProto.IResp_StoryReward): DcgProto.Resp_StoryReward;

        /**
         * Encodes the specified Resp_StoryReward message. Does not implicitly {@link DcgProto.Resp_StoryReward.verify|verify} messages.
         * @param m Resp_StoryReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_StoryReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_StoryReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_StoryReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_StoryReward;

        /**
         * Verifies a Resp_StoryReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_StoryFinish. */
    interface IReq_StoryFinish {

        /** Req_StoryFinish StoryIID */
        StoryIID?: (Long|null);

        /** Req_StoryFinish CfgId */
        CfgId?: (number|null);
    }

    /** Represents a Req_StoryFinish. */
    class Req_StoryFinish implements IReq_StoryFinish {

        /**
         * Constructs a new Req_StoryFinish.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_StoryFinish);

        /** Req_StoryFinish StoryIID. */
        public StoryIID: Long;

        /** Req_StoryFinish CfgId. */
        public CfgId: number;

        /**
         * Creates a new Req_StoryFinish instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_StoryFinish instance
         */
        public static create(properties?: DcgProto.IReq_StoryFinish): DcgProto.Req_StoryFinish;

        /**
         * Encodes the specified Req_StoryFinish message. Does not implicitly {@link DcgProto.Req_StoryFinish.verify|verify} messages.
         * @param m Req_StoryFinish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_StoryFinish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_StoryFinish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_StoryFinish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_StoryFinish;

        /**
         * Verifies a Req_StoryFinish message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_StoryFinish. */
    interface IResp_StoryFinish {

        /** Resp_StoryFinish ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_StoryFinish Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_StoryFinish. */
    class Resp_StoryFinish implements IResp_StoryFinish {

        /**
         * Constructs a new Resp_StoryFinish.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_StoryFinish);

        /** Resp_StoryFinish ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_StoryFinish Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_StoryFinish instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_StoryFinish instance
         */
        public static create(properties?: DcgProto.IResp_StoryFinish): DcgProto.Resp_StoryFinish;

        /**
         * Encodes the specified Resp_StoryFinish message. Does not implicitly {@link DcgProto.Resp_StoryFinish.verify|verify} messages.
         * @param m Resp_StoryFinish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_StoryFinish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_StoryFinish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_StoryFinish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_StoryFinish;

        /**
         * Verifies a Resp_StoryFinish message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_UseItem. */
    interface IReq_UseItem {

        /** Req_UseItem ItemIID */
        ItemIID?: (Long|null);

        /** Req_UseItem ItemNum */
        ItemNum?: (number|null);

        /** Req_UseItem Items */
        Items?: (DcgProto.IS_Item[]|null);
    }

    /** Represents a Req_UseItem. */
    class Req_UseItem implements IReq_UseItem {

        /**
         * Constructs a new Req_UseItem.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_UseItem);

        /** Req_UseItem ItemIID. */
        public ItemIID: Long;

        /** Req_UseItem ItemNum. */
        public ItemNum: number;

        /** Req_UseItem Items. */
        public Items: DcgProto.IS_Item[];

        /**
         * Creates a new Req_UseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_UseItem instance
         */
        public static create(properties?: DcgProto.IReq_UseItem): DcgProto.Req_UseItem;

        /**
         * Encodes the specified Req_UseItem message. Does not implicitly {@link DcgProto.Req_UseItem.verify|verify} messages.
         * @param m Req_UseItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_UseItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_UseItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_UseItem;

        /**
         * Verifies a Req_UseItem message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_UseItem. */
    interface IResp_UseItem {

        /** Resp_UseItem ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_UseItem Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_UseItem. */
    class Resp_UseItem implements IResp_UseItem {

        /**
         * Constructs a new Resp_UseItem.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_UseItem);

        /** Resp_UseItem ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_UseItem Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_UseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_UseItem instance
         */
        public static create(properties?: DcgProto.IResp_UseItem): DcgProto.Resp_UseItem;

        /**
         * Encodes the specified Resp_UseItem message. Does not implicitly {@link DcgProto.Resp_UseItem.verify|verify} messages.
         * @param m Resp_UseItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_UseItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_UseItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_UseItem;

        /**
         * Verifies a Resp_UseItem message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_FlyEmoJi. */
    interface IReq_FlyEmoJi {

        /** Req_FlyEmoJi CfgId */
        CfgId?: (number|null);

        /** Req_FlyEmoJi EmoJiMode */
        EmoJiMode?: (DcgProto.E_EmoJiMode|null);
    }

    /** Represents a Req_FlyEmoJi. */
    class Req_FlyEmoJi implements IReq_FlyEmoJi {

        /**
         * Constructs a new Req_FlyEmoJi.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_FlyEmoJi);

        /** Req_FlyEmoJi CfgId. */
        public CfgId: number;

        /** Req_FlyEmoJi EmoJiMode. */
        public EmoJiMode: DcgProto.E_EmoJiMode;

        /**
         * Creates a new Req_FlyEmoJi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_FlyEmoJi instance
         */
        public static create(properties?: DcgProto.IReq_FlyEmoJi): DcgProto.Req_FlyEmoJi;

        /**
         * Encodes the specified Req_FlyEmoJi message. Does not implicitly {@link DcgProto.Req_FlyEmoJi.verify|verify} messages.
         * @param m Req_FlyEmoJi message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_FlyEmoJi, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_FlyEmoJi message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_FlyEmoJi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_FlyEmoJi;

        /**
         * Verifies a Req_FlyEmoJi message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_FlyEmoJi. */
    interface IResp_FlyEmoJi {

        /** Resp_FlyEmoJi ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_FlyEmoJi Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_FlyEmoJi. */
    class Resp_FlyEmoJi implements IResp_FlyEmoJi {

        /**
         * Constructs a new Resp_FlyEmoJi.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_FlyEmoJi);

        /** Resp_FlyEmoJi ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_FlyEmoJi Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_FlyEmoJi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_FlyEmoJi instance
         */
        public static create(properties?: DcgProto.IResp_FlyEmoJi): DcgProto.Resp_FlyEmoJi;

        /**
         * Encodes the specified Resp_FlyEmoJi message. Does not implicitly {@link DcgProto.Resp_FlyEmoJi.verify|verify} messages.
         * @param m Resp_FlyEmoJi message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_FlyEmoJi, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_FlyEmoJi message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_FlyEmoJi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_FlyEmoJi;

        /**
         * Verifies a Resp_FlyEmoJi message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Push_EmoJi. */
    interface IPush_EmoJi {

        /** Push_EmoJi Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);

        /** Push_EmoJi CfgId */
        CfgId?: (number|null);

        /** Push_EmoJi EmoJiMode */
        EmoJiMode?: (DcgProto.E_EmoJiMode|null);

        /** Push_EmoJi FromRoleIID */
        FromRoleIID?: (Long|null);
    }

    /** Represents a Push_EmoJi. */
    class Push_EmoJi implements IPush_EmoJi {

        /**
         * Constructs a new Push_EmoJi.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IPush_EmoJi);

        /** Push_EmoJi Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /** Push_EmoJi CfgId. */
        public CfgId: number;

        /** Push_EmoJi EmoJiMode. */
        public EmoJiMode: DcgProto.E_EmoJiMode;

        /** Push_EmoJi FromRoleIID. */
        public FromRoleIID: Long;

        /**
         * Creates a new Push_EmoJi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Push_EmoJi instance
         */
        public static create(properties?: DcgProto.IPush_EmoJi): DcgProto.Push_EmoJi;

        /**
         * Encodes the specified Push_EmoJi message. Does not implicitly {@link DcgProto.Push_EmoJi.verify|verify} messages.
         * @param m Push_EmoJi message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IPush_EmoJi, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Push_EmoJi message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Push_EmoJi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Push_EmoJi;

        /**
         * Verifies a Push_EmoJi message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_PhaseReward. */
    interface IReq_PhaseReward {

        /** Req_PhaseReward CfgId */
        CfgId?: (number|null);
    }

    /** Represents a Req_PhaseReward. */
    class Req_PhaseReward implements IReq_PhaseReward {

        /**
         * Constructs a new Req_PhaseReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_PhaseReward);

        /** Req_PhaseReward CfgId. */
        public CfgId: number;

        /**
         * Creates a new Req_PhaseReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_PhaseReward instance
         */
        public static create(properties?: DcgProto.IReq_PhaseReward): DcgProto.Req_PhaseReward;

        /**
         * Encodes the specified Req_PhaseReward message. Does not implicitly {@link DcgProto.Req_PhaseReward.verify|verify} messages.
         * @param m Req_PhaseReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_PhaseReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_PhaseReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_PhaseReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_PhaseReward;

        /**
         * Verifies a Req_PhaseReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_PhaseReward. */
    interface IResp_PhaseReward {

        /** Resp_PhaseReward ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_PhaseReward Cmn */
        Cmn?: (DcgProto.IS_CommonResp|null);
    }

    /** Represents a Resp_PhaseReward. */
    class Resp_PhaseReward implements IResp_PhaseReward {

        /**
         * Constructs a new Resp_PhaseReward.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_PhaseReward);

        /** Resp_PhaseReward ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_PhaseReward Cmn. */
        public Cmn?: (DcgProto.IS_CommonResp|null);

        /**
         * Creates a new Resp_PhaseReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_PhaseReward instance
         */
        public static create(properties?: DcgProto.IResp_PhaseReward): DcgProto.Resp_PhaseReward;

        /**
         * Encodes the specified Resp_PhaseReward message. Does not implicitly {@link DcgProto.Resp_PhaseReward.verify|verify} messages.
         * @param m Resp_PhaseReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_PhaseReward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_PhaseReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_PhaseReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_PhaseReward;

        /**
         * Verifies a Resp_PhaseReward message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_AccountRegister. */
    interface IReq_AccountRegister {

        /** Req_AccountRegister Name */
        Name?: (string|null);

        /** Req_AccountRegister Pwd */
        Pwd?: (string|null);
    }

    /** Represents a Req_AccountRegister. */
    class Req_AccountRegister implements IReq_AccountRegister {

        /**
         * Constructs a new Req_AccountRegister.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_AccountRegister);

        /** Req_AccountRegister Name. */
        public Name: string;

        /** Req_AccountRegister Pwd. */
        public Pwd: string;

        /**
         * Creates a new Req_AccountRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_AccountRegister instance
         */
        public static create(properties?: DcgProto.IReq_AccountRegister): DcgProto.Req_AccountRegister;

        /**
         * Encodes the specified Req_AccountRegister message. Does not implicitly {@link DcgProto.Req_AccountRegister.verify|verify} messages.
         * @param m Req_AccountRegister message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_AccountRegister, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_AccountRegister message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_AccountRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_AccountRegister;

        /**
         * Verifies a Req_AccountRegister message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_AccountRegister. */
    interface IResp_AccountRegister {

        /** Resp_AccountRegister ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);
    }

    /** Represents a Resp_AccountRegister. */
    class Resp_AccountRegister implements IResp_AccountRegister {

        /**
         * Constructs a new Resp_AccountRegister.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_AccountRegister);

        /** Resp_AccountRegister ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /**
         * Creates a new Resp_AccountRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_AccountRegister instance
         */
        public static create(properties?: DcgProto.IResp_AccountRegister): DcgProto.Resp_AccountRegister;

        /**
         * Encodes the specified Resp_AccountRegister message. Does not implicitly {@link DcgProto.Resp_AccountRegister.verify|verify} messages.
         * @param m Resp_AccountRegister message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_AccountRegister, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_AccountRegister message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_AccountRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_AccountRegister;

        /**
         * Verifies a Resp_AccountRegister message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_AccountLogin. */
    interface IReq_AccountLogin {

        /** Req_AccountLogin Name */
        Name?: (string|null);

        /** Req_AccountLogin Pwd */
        Pwd?: (string|null);
    }

    /** Represents a Req_AccountLogin. */
    class Req_AccountLogin implements IReq_AccountLogin {

        /**
         * Constructs a new Req_AccountLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_AccountLogin);

        /** Req_AccountLogin Name. */
        public Name: string;

        /** Req_AccountLogin Pwd. */
        public Pwd: string;

        /**
         * Creates a new Req_AccountLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_AccountLogin instance
         */
        public static create(properties?: DcgProto.IReq_AccountLogin): DcgProto.Req_AccountLogin;

        /**
         * Encodes the specified Req_AccountLogin message. Does not implicitly {@link DcgProto.Req_AccountLogin.verify|verify} messages.
         * @param m Req_AccountLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_AccountLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_AccountLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_AccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_AccountLogin;

        /**
         * Verifies a Req_AccountLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_AccountLogin. */
    interface IResp_AccountLogin {

        /** Resp_AccountLogin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_AccountLogin ThirdId */
        ThirdId?: (string|null);
    }

    /** Represents a Resp_AccountLogin. */
    class Resp_AccountLogin implements IResp_AccountLogin {

        /**
         * Constructs a new Resp_AccountLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_AccountLogin);

        /** Resp_AccountLogin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_AccountLogin ThirdId. */
        public ThirdId: string;

        /**
         * Creates a new Resp_AccountLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_AccountLogin instance
         */
        public static create(properties?: DcgProto.IResp_AccountLogin): DcgProto.Resp_AccountLogin;

        /**
         * Encodes the specified Resp_AccountLogin message. Does not implicitly {@link DcgProto.Resp_AccountLogin.verify|verify} messages.
         * @param m Resp_AccountLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_AccountLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_AccountLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_AccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_AccountLogin;

        /**
         * Verifies a Resp_AccountLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_AccountResetPwd. */
    interface IReq_AccountResetPwd {

        /** Req_AccountResetPwd Name */
        Name?: (string|null);

        /** Req_AccountResetPwd Pwd */
        Pwd?: (string|null);
    }

    /** Represents a Req_AccountResetPwd. */
    class Req_AccountResetPwd implements IReq_AccountResetPwd {

        /**
         * Constructs a new Req_AccountResetPwd.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_AccountResetPwd);

        /** Req_AccountResetPwd Name. */
        public Name: string;

        /** Req_AccountResetPwd Pwd. */
        public Pwd: string;

        /**
         * Creates a new Req_AccountResetPwd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_AccountResetPwd instance
         */
        public static create(properties?: DcgProto.IReq_AccountResetPwd): DcgProto.Req_AccountResetPwd;

        /**
         * Encodes the specified Req_AccountResetPwd message. Does not implicitly {@link DcgProto.Req_AccountResetPwd.verify|verify} messages.
         * @param m Req_AccountResetPwd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_AccountResetPwd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_AccountResetPwd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_AccountResetPwd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_AccountResetPwd;

        /**
         * Verifies a Req_AccountResetPwd message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_AccountResetPwd. */
    interface IResp_AccountResetPwd {

        /** Resp_AccountResetPwd ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);
    }

    /** Represents a Resp_AccountResetPwd. */
    class Resp_AccountResetPwd implements IResp_AccountResetPwd {

        /**
         * Constructs a new Resp_AccountResetPwd.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_AccountResetPwd);

        /** Resp_AccountResetPwd ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /**
         * Creates a new Resp_AccountResetPwd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_AccountResetPwd instance
         */
        public static create(properties?: DcgProto.IResp_AccountResetPwd): DcgProto.Resp_AccountResetPwd;

        /**
         * Encodes the specified Resp_AccountResetPwd message. Does not implicitly {@link DcgProto.Resp_AccountResetPwd.verify|verify} messages.
         * @param m Resp_AccountResetPwd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_AccountResetPwd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_AccountResetPwd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_AccountResetPwd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_AccountResetPwd;

        /**
         * Verifies a Resp_AccountResetPwd message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_GameAccountLogin. */
    interface IReq_GameAccountLogin {

        /** Req_GameAccountLogin ThirdId */
        ThirdId?: (string|null);

        /** Req_GameAccountLogin Platform */
        Platform?: (DcgProto.E_Platform|null);

        /** Req_GameAccountLogin ProductLine */
        ProductLine?: (DcgProto.E_ProductLine|null);

        /** Req_GameAccountLogin ClientVersion */
        ClientVersion?: (string|null);

        /** Req_GameAccountLogin AccountToken */
        AccountToken?: (string|null);
    }

    /** Represents a Req_GameAccountLogin. */
    class Req_GameAccountLogin implements IReq_GameAccountLogin {

        /**
         * Constructs a new Req_GameAccountLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_GameAccountLogin);

        /** Req_GameAccountLogin ThirdId. */
        public ThirdId: string;

        /** Req_GameAccountLogin Platform. */
        public Platform: DcgProto.E_Platform;

        /** Req_GameAccountLogin ProductLine. */
        public ProductLine: DcgProto.E_ProductLine;

        /** Req_GameAccountLogin ClientVersion. */
        public ClientVersion: string;

        /** Req_GameAccountLogin AccountToken. */
        public AccountToken: string;

        /**
         * Creates a new Req_GameAccountLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_GameAccountLogin instance
         */
        public static create(properties?: DcgProto.IReq_GameAccountLogin): DcgProto.Req_GameAccountLogin;

        /**
         * Encodes the specified Req_GameAccountLogin message. Does not implicitly {@link DcgProto.Req_GameAccountLogin.verify|verify} messages.
         * @param m Req_GameAccountLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_GameAccountLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_GameAccountLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_GameAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_GameAccountLogin;

        /**
         * Verifies a Req_GameAccountLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_GameAccountLogin. */
    interface IResp_GameAccountLogin {

        /** Resp_GameAccountLogin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_GameAccountLogin ServerTime */
        ServerTime?: (number|null);

        /** Resp_GameAccountLogin AccountId */
        AccountId?: (Long|null);

        /** Resp_GameAccountLogin TokenId */
        TokenId?: (string|null);

        /** Resp_GameAccountLogin ServerList */
        ServerList?: (DcgProto.IS_ServerInfo[]|null);
    }

    /** Represents a Resp_GameAccountLogin. */
    class Resp_GameAccountLogin implements IResp_GameAccountLogin {

        /**
         * Constructs a new Resp_GameAccountLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_GameAccountLogin);

        /** Resp_GameAccountLogin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_GameAccountLogin ServerTime. */
        public ServerTime: number;

        /** Resp_GameAccountLogin AccountId. */
        public AccountId: Long;

        /** Resp_GameAccountLogin TokenId. */
        public TokenId: string;

        /** Resp_GameAccountLogin ServerList. */
        public ServerList: DcgProto.IS_ServerInfo[];

        /**
         * Creates a new Resp_GameAccountLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_GameAccountLogin instance
         */
        public static create(properties?: DcgProto.IResp_GameAccountLogin): DcgProto.Resp_GameAccountLogin;

        /**
         * Encodes the specified Resp_GameAccountLogin message. Does not implicitly {@link DcgProto.Resp_GameAccountLogin.verify|verify} messages.
         * @param m Resp_GameAccountLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_GameAccountLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_GameAccountLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_GameAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_GameAccountLogin;

        /**
         * Verifies a Resp_GameAccountLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_RoleInfo. */
    interface IS_RoleInfo {

        /** S_RoleInfo NickName */
        NickName?: (string|null);

        /** S_RoleInfo AccountLevel */
        AccountLevel?: (number|null);

        /** S_RoleInfo Icon */
        Icon?: (number|null);
    }

    /** Represents a S_RoleInfo. */
    class S_RoleInfo implements IS_RoleInfo {

        /**
         * Constructs a new S_RoleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_RoleInfo);

        /** S_RoleInfo NickName. */
        public NickName: string;

        /** S_RoleInfo AccountLevel. */
        public AccountLevel: number;

        /** S_RoleInfo Icon. */
        public Icon: number;

        /**
         * Creates a new S_RoleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_RoleInfo instance
         */
        public static create(properties?: DcgProto.IS_RoleInfo): DcgProto.S_RoleInfo;

        /**
         * Encodes the specified S_RoleInfo message. Does not implicitly {@link DcgProto.S_RoleInfo.verify|verify} messages.
         * @param m S_RoleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_RoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_RoleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_RoleInfo;

        /**
         * Verifies a S_RoleInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_ServerInfo. */
    interface IS_ServerInfo {

        /** S_ServerInfo ServerId */
        ServerId?: (number|null);

        /** S_ServerInfo Area */
        Area?: (number|null);

        /** S_ServerInfo Name */
        Name?: (string|null);

        /** S_ServerInfo Ip */
        Ip?: (string|null);

        /** S_ServerInfo Port */
        Port?: (number|null);

        /** S_ServerInfo Status */
        Status?: (DcgProto.E_ServerStatus|null);

        /** S_ServerInfo IsNew */
        IsNew?: (boolean|null);

        /** S_ServerInfo IsHot */
        IsHot?: (boolean|null);

        /** S_ServerInfo IsRecommend */
        IsRecommend?: (boolean|null);

        /** S_ServerInfo RoleInfo */
        RoleInfo?: (DcgProto.IS_RoleInfo|null);

        /** S_ServerInfo Protocol */
        Protocol?: (string|null);

        /** S_ServerInfo ReplayURL */
        ReplayURL?: (string|null);
    }

    /** Represents a S_ServerInfo. */
    class S_ServerInfo implements IS_ServerInfo {

        /**
         * Constructs a new S_ServerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_ServerInfo);

        /** S_ServerInfo ServerId. */
        public ServerId: number;

        /** S_ServerInfo Area. */
        public Area: number;

        /** S_ServerInfo Name. */
        public Name: string;

        /** S_ServerInfo Ip. */
        public Ip: string;

        /** S_ServerInfo Port. */
        public Port: number;

        /** S_ServerInfo Status. */
        public Status: DcgProto.E_ServerStatus;

        /** S_ServerInfo IsNew. */
        public IsNew: boolean;

        /** S_ServerInfo IsHot. */
        public IsHot: boolean;

        /** S_ServerInfo IsRecommend. */
        public IsRecommend: boolean;

        /** S_ServerInfo RoleInfo. */
        public RoleInfo?: (DcgProto.IS_RoleInfo|null);

        /** S_ServerInfo Protocol. */
        public Protocol: string;

        /** S_ServerInfo ReplayURL. */
        public ReplayURL: string;

        /**
         * Creates a new S_ServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_ServerInfo instance
         */
        public static create(properties?: DcgProto.IS_ServerInfo): DcgProto.S_ServerInfo;

        /**
         * Encodes the specified S_ServerInfo message. Does not implicitly {@link DcgProto.S_ServerInfo.verify|verify} messages.
         * @param m S_ServerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_ServerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ServerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_ServerInfo;

        /**
         * Verifies a S_ServerInfo message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_WxLogin. */
    interface IReq_WxLogin {

        /** Req_WxLogin JsCode */
        JsCode?: (string|null);

        /** Req_WxLogin Game */
        Game?: (number|null);
    }

    /** Represents a Req_WxLogin. */
    class Req_WxLogin implements IReq_WxLogin {

        /**
         * Constructs a new Req_WxLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_WxLogin);

        /** Req_WxLogin JsCode. */
        public JsCode: string;

        /** Req_WxLogin Game. */
        public Game: number;

        /**
         * Creates a new Req_WxLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_WxLogin instance
         */
        public static create(properties?: DcgProto.IReq_WxLogin): DcgProto.Req_WxLogin;

        /**
         * Encodes the specified Req_WxLogin message. Does not implicitly {@link DcgProto.Req_WxLogin.verify|verify} messages.
         * @param m Req_WxLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_WxLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_WxLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_WxLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_WxLogin;

        /**
         * Verifies a Req_WxLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a S_WxResp. */
    interface IS_WxResp {

        /** S_WxResp OpenId */
        OpenId?: (string|null);

        /** S_WxResp Session_Key */
        Session_Key?: (string|null);

        /** S_WxResp UnionId */
        UnionId?: (string|null);

        /** S_WxResp ErrCode */
        ErrCode?: (number|null);

        /** S_WxResp ErrMsg */
        ErrMsg?: (string|null);
    }

    /** Represents a S_WxResp. */
    class S_WxResp implements IS_WxResp {

        /**
         * Constructs a new S_WxResp.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IS_WxResp);

        /** S_WxResp OpenId. */
        public OpenId: string;

        /** S_WxResp Session_Key. */
        public Session_Key: string;

        /** S_WxResp UnionId. */
        public UnionId: string;

        /** S_WxResp ErrCode. */
        public ErrCode: number;

        /** S_WxResp ErrMsg. */
        public ErrMsg: string;

        /**
         * Creates a new S_WxResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S_WxResp instance
         */
        public static create(properties?: DcgProto.IS_WxResp): DcgProto.S_WxResp;

        /**
         * Encodes the specified S_WxResp message. Does not implicitly {@link DcgProto.S_WxResp.verify|verify} messages.
         * @param m S_WxResp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IS_WxResp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_WxResp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S_WxResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.S_WxResp;

        /**
         * Verifies a S_WxResp message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_WxLogin. */
    interface IResp_WxLogin {

        /** Resp_WxLogin ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_WxLogin WxResp */
        WxResp?: (DcgProto.IS_WxResp|null);
    }

    /** Represents a Resp_WxLogin. */
    class Resp_WxLogin implements IResp_WxLogin {

        /**
         * Constructs a new Resp_WxLogin.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_WxLogin);

        /** Resp_WxLogin ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_WxLogin WxResp. */
        public WxResp?: (DcgProto.IS_WxResp|null);

        /**
         * Creates a new Resp_WxLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_WxLogin instance
         */
        public static create(properties?: DcgProto.IResp_WxLogin): DcgProto.Resp_WxLogin;

        /**
         * Encodes the specified Resp_WxLogin message. Does not implicitly {@link DcgProto.Resp_WxLogin.verify|verify} messages.
         * @param m Resp_WxLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_WxLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_WxLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_WxLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_WxLogin;

        /**
         * Verifies a Resp_WxLogin message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_WxDel. */
    interface IReq_WxDel {

        /** Req_WxDel AccountId */
        AccountId?: (Long|null);

        /** Req_WxDel ThirdId */
        ThirdId?: (string|null);
    }

    /** Represents a Req_WxDel. */
    class Req_WxDel implements IReq_WxDel {

        /**
         * Constructs a new Req_WxDel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_WxDel);

        /** Req_WxDel AccountId. */
        public AccountId: Long;

        /** Req_WxDel ThirdId. */
        public ThirdId: string;

        /**
         * Creates a new Req_WxDel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_WxDel instance
         */
        public static create(properties?: DcgProto.IReq_WxDel): DcgProto.Req_WxDel;

        /**
         * Encodes the specified Req_WxDel message. Does not implicitly {@link DcgProto.Req_WxDel.verify|verify} messages.
         * @param m Req_WxDel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_WxDel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_WxDel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_WxDel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_WxDel;

        /**
         * Verifies a Req_WxDel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_WxDel. */
    interface IResp_WxDel {

        /** Resp_WxDel ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);
    }

    /** Represents a Resp_WxDel. */
    class Resp_WxDel implements IResp_WxDel {

        /**
         * Constructs a new Resp_WxDel.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_WxDel);

        /** Resp_WxDel ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /**
         * Creates a new Resp_WxDel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_WxDel instance
         */
        public static create(properties?: DcgProto.IResp_WxDel): DcgProto.Resp_WxDel;

        /**
         * Encodes the specified Resp_WxDel message. Does not implicitly {@link DcgProto.Resp_WxDel.verify|verify} messages.
         * @param m Resp_WxDel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_WxDel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_WxDel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_WxDel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_WxDel;

        /**
         * Verifies a Resp_WxDel message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_GetNotice. */
    interface IReq_GetNotice {

        /** Req_GetNotice ProductLine */
        ProductLine?: (DcgProto.E_ProductLine|null);
    }

    /** Represents a Req_GetNotice. */
    class Req_GetNotice implements IReq_GetNotice {

        /**
         * Constructs a new Req_GetNotice.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_GetNotice);

        /** Req_GetNotice ProductLine. */
        public ProductLine: DcgProto.E_ProductLine;

        /**
         * Creates a new Req_GetNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_GetNotice instance
         */
        public static create(properties?: DcgProto.IReq_GetNotice): DcgProto.Req_GetNotice;

        /**
         * Encodes the specified Req_GetNotice message. Does not implicitly {@link DcgProto.Req_GetNotice.verify|verify} messages.
         * @param m Req_GetNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_GetNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_GetNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_GetNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_GetNotice;

        /**
         * Verifies a Req_GetNotice message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_GetNotice. */
    interface IResp_GetNotice {

        /** Resp_GetNotice ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_GetNotice Notice */
        Notice?: (string|null);
    }

    /** Represents a Resp_GetNotice. */
    class Resp_GetNotice implements IResp_GetNotice {

        /**
         * Constructs a new Resp_GetNotice.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_GetNotice);

        /** Resp_GetNotice ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_GetNotice Notice. */
        public Notice: string;

        /**
         * Creates a new Resp_GetNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_GetNotice instance
         */
        public static create(properties?: DcgProto.IResp_GetNotice): DcgProto.Resp_GetNotice;

        /**
         * Encodes the specified Resp_GetNotice message. Does not implicitly {@link DcgProto.Resp_GetNotice.verify|verify} messages.
         * @param m Resp_GetNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_GetNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_GetNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_GetNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_GetNotice;

        /**
         * Verifies a Resp_GetNotice message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_BanDaiBindAccount. */
    interface IReq_BanDaiBindAccount {

        /** Req_BanDaiBindAccount ThirdId */
        ThirdId?: (string|null);

        /** Req_BanDaiBindAccount AccountToken */
        AccountToken?: (string|null);

        /** Req_BanDaiBindAccount AccountId */
        AccountId?: (Long|null);
    }

    /** Represents a Req_BanDaiBindAccount. */
    class Req_BanDaiBindAccount implements IReq_BanDaiBindAccount {

        /**
         * Constructs a new Req_BanDaiBindAccount.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_BanDaiBindAccount);

        /** Req_BanDaiBindAccount ThirdId. */
        public ThirdId: string;

        /** Req_BanDaiBindAccount AccountToken. */
        public AccountToken: string;

        /** Req_BanDaiBindAccount AccountId. */
        public AccountId: Long;

        /**
         * Creates a new Req_BanDaiBindAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_BanDaiBindAccount instance
         */
        public static create(properties?: DcgProto.IReq_BanDaiBindAccount): DcgProto.Req_BanDaiBindAccount;

        /**
         * Encodes the specified Req_BanDaiBindAccount message. Does not implicitly {@link DcgProto.Req_BanDaiBindAccount.verify|verify} messages.
         * @param m Req_BanDaiBindAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_BanDaiBindAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_BanDaiBindAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_BanDaiBindAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_BanDaiBindAccount;

        /**
         * Verifies a Req_BanDaiBindAccount message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_BanDaiBindAccount. */
    interface IResp_BanDaiBindAccount {

        /** Resp_BanDaiBindAccount ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);
    }

    /** Represents a Resp_BanDaiBindAccount. */
    class Resp_BanDaiBindAccount implements IResp_BanDaiBindAccount {

        /**
         * Constructs a new Resp_BanDaiBindAccount.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_BanDaiBindAccount);

        /** Resp_BanDaiBindAccount ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /**
         * Creates a new Resp_BanDaiBindAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_BanDaiBindAccount instance
         */
        public static create(properties?: DcgProto.IResp_BanDaiBindAccount): DcgProto.Resp_BanDaiBindAccount;

        /**
         * Encodes the specified Resp_BanDaiBindAccount message. Does not implicitly {@link DcgProto.Resp_BanDaiBindAccount.verify|verify} messages.
         * @param m Resp_BanDaiBindAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_BanDaiBindAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_BanDaiBindAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_BanDaiBindAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_BanDaiBindAccount;

        /**
         * Verifies a Resp_BanDaiBindAccount message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_BanDaiDelAccount. */
    interface IReq_BanDaiDelAccount {

        /** Req_BanDaiDelAccount ThirdId */
        ThirdId?: (string|null);

        /** Req_BanDaiDelAccount AccountToken */
        AccountToken?: (string|null);
    }

    /** Represents a Req_BanDaiDelAccount. */
    class Req_BanDaiDelAccount implements IReq_BanDaiDelAccount {

        /**
         * Constructs a new Req_BanDaiDelAccount.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_BanDaiDelAccount);

        /** Req_BanDaiDelAccount ThirdId. */
        public ThirdId: string;

        /** Req_BanDaiDelAccount AccountToken. */
        public AccountToken: string;

        /**
         * Creates a new Req_BanDaiDelAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_BanDaiDelAccount instance
         */
        public static create(properties?: DcgProto.IReq_BanDaiDelAccount): DcgProto.Req_BanDaiDelAccount;

        /**
         * Encodes the specified Req_BanDaiDelAccount message. Does not implicitly {@link DcgProto.Req_BanDaiDelAccount.verify|verify} messages.
         * @param m Req_BanDaiDelAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_BanDaiDelAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_BanDaiDelAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_BanDaiDelAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_BanDaiDelAccount;

        /**
         * Verifies a Req_BanDaiDelAccount message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_BanDaiDelAccount. */
    interface IResp_BanDaiDelAccount {

        /** Resp_BanDaiDelAccount ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);
    }

    /** Represents a Resp_BanDaiDelAccount. */
    class Resp_BanDaiDelAccount implements IResp_BanDaiDelAccount {

        /**
         * Constructs a new Resp_BanDaiDelAccount.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_BanDaiDelAccount);

        /** Resp_BanDaiDelAccount ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /**
         * Creates a new Resp_BanDaiDelAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_BanDaiDelAccount instance
         */
        public static create(properties?: DcgProto.IResp_BanDaiDelAccount): DcgProto.Resp_BanDaiDelAccount;

        /**
         * Encodes the specified Resp_BanDaiDelAccount message. Does not implicitly {@link DcgProto.Resp_BanDaiDelAccount.verify|verify} messages.
         * @param m Resp_BanDaiDelAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_BanDaiDelAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_BanDaiDelAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_BanDaiDelAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_BanDaiDelAccount;

        /**
         * Verifies a Resp_BanDaiDelAccount message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsBattleCreate. */
    interface IReq_Remote2TsBattleCreate {
    }

    /** Represents a Req_Remote2TsBattleCreate. */
    class Req_Remote2TsBattleCreate implements IReq_Remote2TsBattleCreate {

        /**
         * Constructs a new Req_Remote2TsBattleCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsBattleCreate);

        /**
         * Creates a new Req_Remote2TsBattleCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsBattleCreate instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsBattleCreate): DcgProto.Req_Remote2TsBattleCreate;

        /**
         * Encodes the specified Req_Remote2TsBattleCreate message. Does not implicitly {@link DcgProto.Req_Remote2TsBattleCreate.verify|verify} messages.
         * @param m Req_Remote2TsBattleCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsBattleCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsBattleCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsBattleCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsBattleCreate;

        /**
         * Verifies a Req_Remote2TsBattleCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsBattleCreate. */
    interface IResp_Remote2TsBattleCreate {
    }

    /** Represents a Resp_Remote2TsBattleCreate. */
    class Resp_Remote2TsBattleCreate implements IResp_Remote2TsBattleCreate {

        /**
         * Constructs a new Resp_Remote2TsBattleCreate.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsBattleCreate);

        /**
         * Creates a new Resp_Remote2TsBattleCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsBattleCreate instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsBattleCreate): DcgProto.Resp_Remote2TsBattleCreate;

        /**
         * Encodes the specified Resp_Remote2TsBattleCreate message. Does not implicitly {@link DcgProto.Resp_Remote2TsBattleCreate.verify|verify} messages.
         * @param m Resp_Remote2TsBattleCreate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsBattleCreate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsBattleCreate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsBattleCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsBattleCreate;

        /**
         * Verifies a Resp_Remote2TsBattleCreate message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsBattleInit. */
    interface IReq_Remote2TsBattleInit {

        /** Req_Remote2TsBattleInit RoomData */
        RoomData?: (DcgProto.IS_RoomData|null);
    }

    /** Represents a Req_Remote2TsBattleInit. */
    class Req_Remote2TsBattleInit implements IReq_Remote2TsBattleInit {

        /**
         * Constructs a new Req_Remote2TsBattleInit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsBattleInit);

        /** Req_Remote2TsBattleInit RoomData. */
        public RoomData?: (DcgProto.IS_RoomData|null);

        /**
         * Creates a new Req_Remote2TsBattleInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsBattleInit instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsBattleInit): DcgProto.Req_Remote2TsBattleInit;

        /**
         * Encodes the specified Req_Remote2TsBattleInit message. Does not implicitly {@link DcgProto.Req_Remote2TsBattleInit.verify|verify} messages.
         * @param m Req_Remote2TsBattleInit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsBattleInit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsBattleInit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsBattleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsBattleInit;

        /**
         * Verifies a Req_Remote2TsBattleInit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsBattleInit. */
    interface IResp_Remote2TsBattleInit {

        /** Resp_Remote2TsBattleInit BattleMsg */
        BattleMsg?: (DcgProto.IS_BattleMsg|null);
    }

    /** Represents a Resp_Remote2TsBattleInit. */
    class Resp_Remote2TsBattleInit implements IResp_Remote2TsBattleInit {

        /**
         * Constructs a new Resp_Remote2TsBattleInit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsBattleInit);

        /** Resp_Remote2TsBattleInit BattleMsg. */
        public BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /**
         * Creates a new Resp_Remote2TsBattleInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsBattleInit instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsBattleInit): DcgProto.Resp_Remote2TsBattleInit;

        /**
         * Encodes the specified Resp_Remote2TsBattleInit message. Does not implicitly {@link DcgProto.Resp_Remote2TsBattleInit.verify|verify} messages.
         * @param m Resp_Remote2TsBattleInit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsBattleInit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsBattleInit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsBattleInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsBattleInit;

        /**
         * Verifies a Resp_Remote2TsBattleInit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsBattleReady. */
    interface IReq_Remote2TsBattleReady {

        /** Req_Remote2TsBattleReady RoomInfo */
        RoomInfo?: (DcgProto.IS_RoomInfo|null);
    }

    /** Represents a Req_Remote2TsBattleReady. */
    class Req_Remote2TsBattleReady implements IReq_Remote2TsBattleReady {

        /**
         * Constructs a new Req_Remote2TsBattleReady.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsBattleReady);

        /** Req_Remote2TsBattleReady RoomInfo. */
        public RoomInfo?: (DcgProto.IS_RoomInfo|null);

        /**
         * Creates a new Req_Remote2TsBattleReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsBattleReady instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsBattleReady): DcgProto.Req_Remote2TsBattleReady;

        /**
         * Encodes the specified Req_Remote2TsBattleReady message. Does not implicitly {@link DcgProto.Req_Remote2TsBattleReady.verify|verify} messages.
         * @param m Req_Remote2TsBattleReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsBattleReady, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsBattleReady message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsBattleReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsBattleReady;

        /**
         * Verifies a Req_Remote2TsBattleReady message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsBattleReady. */
    interface IResp_Remote2TsBattleReady {

        /** Resp_Remote2TsBattleReady BattleMsg */
        BattleMsg?: (DcgProto.IS_BattleMsg|null);
    }

    /** Represents a Resp_Remote2TsBattleReady. */
    class Resp_Remote2TsBattleReady implements IResp_Remote2TsBattleReady {

        /**
         * Constructs a new Resp_Remote2TsBattleReady.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsBattleReady);

        /** Resp_Remote2TsBattleReady BattleMsg. */
        public BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /**
         * Creates a new Resp_Remote2TsBattleReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsBattleReady instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsBattleReady): DcgProto.Resp_Remote2TsBattleReady;

        /**
         * Encodes the specified Resp_Remote2TsBattleReady message. Does not implicitly {@link DcgProto.Resp_Remote2TsBattleReady.verify|verify} messages.
         * @param m Resp_Remote2TsBattleReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsBattleReady, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsBattleReady message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsBattleReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsBattleReady;

        /**
         * Verifies a Resp_Remote2TsBattleReady message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsTurn. */
    interface IReq_Remote2TsTurn {
    }

    /** Represents a Req_Remote2TsTurn. */
    class Req_Remote2TsTurn implements IReq_Remote2TsTurn {

        /**
         * Constructs a new Req_Remote2TsTurn.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsTurn);

        /**
         * Creates a new Req_Remote2TsTurn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsTurn instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsTurn): DcgProto.Req_Remote2TsTurn;

        /**
         * Encodes the specified Req_Remote2TsTurn message. Does not implicitly {@link DcgProto.Req_Remote2TsTurn.verify|verify} messages.
         * @param m Req_Remote2TsTurn message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsTurn, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsTurn message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsTurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsTurn;

        /**
         * Verifies a Req_Remote2TsTurn message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsTurn. */
    interface IResp_Remote2TsTurn {

        /** Resp_Remote2TsTurn BattleResult */
        BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsTurn BattleMsg */
        BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsTurn BattleTask */
        BattleTask?: (DcgProto.IS_BattleTask|null);
    }

    /** Represents a Resp_Remote2TsTurn. */
    class Resp_Remote2TsTurn implements IResp_Remote2TsTurn {

        /**
         * Constructs a new Resp_Remote2TsTurn.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsTurn);

        /** Resp_Remote2TsTurn BattleResult. */
        public BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsTurn BattleMsg. */
        public BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsTurn BattleTask. */
        public BattleTask?: (DcgProto.IS_BattleTask|null);

        /**
         * Creates a new Resp_Remote2TsTurn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsTurn instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsTurn): DcgProto.Resp_Remote2TsTurn;

        /**
         * Encodes the specified Resp_Remote2TsTurn message. Does not implicitly {@link DcgProto.Resp_Remote2TsTurn.verify|verify} messages.
         * @param m Resp_Remote2TsTurn message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsTurn, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsTurn message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsTurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsTurn;

        /**
         * Verifies a Resp_Remote2TsTurn message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsBattle. */
    interface IReq_Remote2TsBattle {

        /** Req_Remote2TsBattle AccountIID */
        AccountIID?: (Long|null);

        /** Req_Remote2TsBattle BattleParams */
        BattleParams?: (DcgProto.IS_BattleParams|null);
    }

    /** Represents a Req_Remote2TsBattle. */
    class Req_Remote2TsBattle implements IReq_Remote2TsBattle {

        /**
         * Constructs a new Req_Remote2TsBattle.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsBattle);

        /** Req_Remote2TsBattle AccountIID. */
        public AccountIID: Long;

        /** Req_Remote2TsBattle BattleParams. */
        public BattleParams?: (DcgProto.IS_BattleParams|null);

        /**
         * Creates a new Req_Remote2TsBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsBattle instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsBattle): DcgProto.Req_Remote2TsBattle;

        /**
         * Encodes the specified Req_Remote2TsBattle message. Does not implicitly {@link DcgProto.Req_Remote2TsBattle.verify|verify} messages.
         * @param m Req_Remote2TsBattle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsBattle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsBattle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsBattle;

        /**
         * Verifies a Req_Remote2TsBattle message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsBattle. */
    interface IResp_Remote2TsBattle {

        /** Resp_Remote2TsBattle BattleResult */
        BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsBattle BattleMsg */
        BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsBattle BattleTask */
        BattleTask?: (DcgProto.IS_BattleTask|null);
    }

    /** Represents a Resp_Remote2TsBattle. */
    class Resp_Remote2TsBattle implements IResp_Remote2TsBattle {

        /**
         * Constructs a new Resp_Remote2TsBattle.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsBattle);

        /** Resp_Remote2TsBattle BattleResult. */
        public BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsBattle BattleMsg. */
        public BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsBattle BattleTask. */
        public BattleTask?: (DcgProto.IS_BattleTask|null);

        /**
         * Creates a new Resp_Remote2TsBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsBattle instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsBattle): DcgProto.Resp_Remote2TsBattle;

        /**
         * Encodes the specified Resp_Remote2TsBattle message. Does not implicitly {@link DcgProto.Resp_Remote2TsBattle.verify|verify} messages.
         * @param m Resp_Remote2TsBattle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsBattle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsBattle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsBattle;

        /**
         * Verifies a Resp_Remote2TsBattle message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsBattleQuit. */
    interface IReq_Remote2TsBattleQuit {

        /** Req_Remote2TsBattleQuit AccountIID */
        AccountIID?: (Long|null);
    }

    /** Represents a Req_Remote2TsBattleQuit. */
    class Req_Remote2TsBattleQuit implements IReq_Remote2TsBattleQuit {

        /**
         * Constructs a new Req_Remote2TsBattleQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsBattleQuit);

        /** Req_Remote2TsBattleQuit AccountIID. */
        public AccountIID: Long;

        /**
         * Creates a new Req_Remote2TsBattleQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsBattleQuit instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsBattleQuit): DcgProto.Req_Remote2TsBattleQuit;

        /**
         * Encodes the specified Req_Remote2TsBattleQuit message. Does not implicitly {@link DcgProto.Req_Remote2TsBattleQuit.verify|verify} messages.
         * @param m Req_Remote2TsBattleQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsBattleQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsBattleQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsBattleQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsBattleQuit;

        /**
         * Verifies a Req_Remote2TsBattleQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsBattleQuit. */
    interface IResp_Remote2TsBattleQuit {

        /** Resp_Remote2TsBattleQuit BattleResult */
        BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsBattleQuit BattleMsg */
        BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsBattleQuit BattleTask */
        BattleTask?: (DcgProto.IS_BattleTask|null);
    }

    /** Represents a Resp_Remote2TsBattleQuit. */
    class Resp_Remote2TsBattleQuit implements IResp_Remote2TsBattleQuit {

        /**
         * Constructs a new Resp_Remote2TsBattleQuit.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsBattleQuit);

        /** Resp_Remote2TsBattleQuit BattleResult. */
        public BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsBattleQuit BattleMsg. */
        public BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsBattleQuit BattleTask. */
        public BattleTask?: (DcgProto.IS_BattleTask|null);

        /**
         * Creates a new Resp_Remote2TsBattleQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsBattleQuit instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsBattleQuit): DcgProto.Resp_Remote2TsBattleQuit;

        /**
         * Encodes the specified Resp_Remote2TsBattleQuit message. Does not implicitly {@link DcgProto.Resp_Remote2TsBattleQuit.verify|verify} messages.
         * @param m Resp_Remote2TsBattleQuit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsBattleQuit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsBattleQuit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsBattleQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsBattleQuit;

        /**
         * Verifies a Resp_Remote2TsBattleQuit message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsOffset. */
    interface IReq_Remote2TsOffset {

        /** Req_Remote2TsOffset OffsetSec */
        OffsetSec?: (Long|null);
    }

    /** Represents a Req_Remote2TsOffset. */
    class Req_Remote2TsOffset implements IReq_Remote2TsOffset {

        /**
         * Constructs a new Req_Remote2TsOffset.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsOffset);

        /** Req_Remote2TsOffset OffsetSec. */
        public OffsetSec: Long;

        /**
         * Creates a new Req_Remote2TsOffset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsOffset instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsOffset): DcgProto.Req_Remote2TsOffset;

        /**
         * Encodes the specified Req_Remote2TsOffset message. Does not implicitly {@link DcgProto.Req_Remote2TsOffset.verify|verify} messages.
         * @param m Req_Remote2TsOffset message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsOffset, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsOffset message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsOffset;

        /**
         * Verifies a Req_Remote2TsOffset message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsOffset. */
    interface IResp_Remote2TsOffset {
    }

    /** Represents a Resp_Remote2TsOffset. */
    class Resp_Remote2TsOffset implements IResp_Remote2TsOffset {

        /**
         * Constructs a new Resp_Remote2TsOffset.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsOffset);

        /**
         * Creates a new Resp_Remote2TsOffset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsOffset instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsOffset): DcgProto.Resp_Remote2TsOffset;

        /**
         * Encodes the specified Resp_Remote2TsOffset message. Does not implicitly {@link DcgProto.Resp_Remote2TsOffset.verify|verify} messages.
         * @param m Resp_Remote2TsOffset message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsOffset, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsOffset message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsOffset;

        /**
         * Verifies a Resp_Remote2TsOffset message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsBattleReconnect. */
    interface IReq_Remote2TsBattleReconnect {

        /** Req_Remote2TsBattleReconnect AccountIID */
        AccountIID?: (Long|null);
    }

    /** Represents a Req_Remote2TsBattleReconnect. */
    class Req_Remote2TsBattleReconnect implements IReq_Remote2TsBattleReconnect {

        /**
         * Constructs a new Req_Remote2TsBattleReconnect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsBattleReconnect);

        /** Req_Remote2TsBattleReconnect AccountIID. */
        public AccountIID: Long;

        /**
         * Creates a new Req_Remote2TsBattleReconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsBattleReconnect instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsBattleReconnect): DcgProto.Req_Remote2TsBattleReconnect;

        /**
         * Encodes the specified Req_Remote2TsBattleReconnect message. Does not implicitly {@link DcgProto.Req_Remote2TsBattleReconnect.verify|verify} messages.
         * @param m Req_Remote2TsBattleReconnect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsBattleReconnect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsBattleReconnect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsBattleReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsBattleReconnect;

        /**
         * Verifies a Req_Remote2TsBattleReconnect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsBattleReconnect. */
    interface IResp_Remote2TsBattleReconnect {

        /** Resp_Remote2TsBattleReconnect ReconnectData */
        ReconnectData?: (DcgProto.IS_ReconnectData|null);
    }

    /** Represents a Resp_Remote2TsBattleReconnect. */
    class Resp_Remote2TsBattleReconnect implements IResp_Remote2TsBattleReconnect {

        /**
         * Constructs a new Resp_Remote2TsBattleReconnect.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsBattleReconnect);

        /** Resp_Remote2TsBattleReconnect ReconnectData. */
        public ReconnectData?: (DcgProto.IS_ReconnectData|null);

        /**
         * Creates a new Resp_Remote2TsBattleReconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsBattleReconnect instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsBattleReconnect): DcgProto.Resp_Remote2TsBattleReconnect;

        /**
         * Encodes the specified Resp_Remote2TsBattleReconnect message. Does not implicitly {@link DcgProto.Resp_Remote2TsBattleReconnect.verify|verify} messages.
         * @param m Resp_Remote2TsBattleReconnect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsBattleReconnect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsBattleReconnect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsBattleReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsBattleReconnect;

        /**
         * Verifies a Resp_Remote2TsBattleReconnect message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsBattleMsg. */
    interface IReq_Remote2TsBattleMsg {

        /** Req_Remote2TsBattleMsg FrameIndex */
        FrameIndex?: (number|null);
    }

    /** Represents a Req_Remote2TsBattleMsg. */
    class Req_Remote2TsBattleMsg implements IReq_Remote2TsBattleMsg {

        /**
         * Constructs a new Req_Remote2TsBattleMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsBattleMsg);

        /** Req_Remote2TsBattleMsg FrameIndex. */
        public FrameIndex: number;

        /**
         * Creates a new Req_Remote2TsBattleMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsBattleMsg instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsBattleMsg): DcgProto.Req_Remote2TsBattleMsg;

        /**
         * Encodes the specified Req_Remote2TsBattleMsg message. Does not implicitly {@link DcgProto.Req_Remote2TsBattleMsg.verify|verify} messages.
         * @param m Req_Remote2TsBattleMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsBattleMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsBattleMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsBattleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsBattleMsg;

        /**
         * Verifies a Req_Remote2TsBattleMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsBattleMsg. */
    interface IResp_Remote2TsBattleMsg {

        /** Resp_Remote2TsBattleMsg BattleMsg */
        BattleMsg?: (DcgProto.IS_BattleMsg[]|null);
    }

    /** Represents a Resp_Remote2TsBattleMsg. */
    class Resp_Remote2TsBattleMsg implements IResp_Remote2TsBattleMsg {

        /**
         * Constructs a new Resp_Remote2TsBattleMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsBattleMsg);

        /** Resp_Remote2TsBattleMsg BattleMsg. */
        public BattleMsg: DcgProto.IS_BattleMsg[];

        /**
         * Creates a new Resp_Remote2TsBattleMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsBattleMsg instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsBattleMsg): DcgProto.Resp_Remote2TsBattleMsg;

        /**
         * Encodes the specified Resp_Remote2TsBattleMsg message. Does not implicitly {@link DcgProto.Resp_Remote2TsBattleMsg.verify|verify} messages.
         * @param m Resp_Remote2TsBattleMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsBattleMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsBattleMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsBattleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsBattleMsg;

        /**
         * Verifies a Resp_Remote2TsBattleMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsGm. */
    interface IReq_Remote2TsGm {

        /** Req_Remote2TsGm AccountIID */
        AccountIID?: (Long|null);

        /** Req_Remote2TsGm GmParams */
        GmParams?: (DcgProto.IS_GmParams|null);
    }

    /** Represents a Req_Remote2TsGm. */
    class Req_Remote2TsGm implements IReq_Remote2TsGm {

        /**
         * Constructs a new Req_Remote2TsGm.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsGm);

        /** Req_Remote2TsGm AccountIID. */
        public AccountIID: Long;

        /** Req_Remote2TsGm GmParams. */
        public GmParams?: (DcgProto.IS_GmParams|null);

        /**
         * Creates a new Req_Remote2TsGm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsGm instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsGm): DcgProto.Req_Remote2TsGm;

        /**
         * Encodes the specified Req_Remote2TsGm message. Does not implicitly {@link DcgProto.Req_Remote2TsGm.verify|verify} messages.
         * @param m Req_Remote2TsGm message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsGm, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsGm message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsGm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsGm;

        /**
         * Verifies a Req_Remote2TsGm message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsGm. */
    interface IResp_Remote2TsGm {

        /** Resp_Remote2TsGm BattleResult */
        BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsGm BattleMsg */
        BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsGm BattleTask */
        BattleTask?: (DcgProto.IS_BattleTask|null);
    }

    /** Represents a Resp_Remote2TsGm. */
    class Resp_Remote2TsGm implements IResp_Remote2TsGm {

        /**
         * Constructs a new Resp_Remote2TsGm.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsGm);

        /** Resp_Remote2TsGm BattleResult. */
        public BattleResult?: (DcgProto.IS_BattleResult|null);

        /** Resp_Remote2TsGm BattleMsg. */
        public BattleMsg?: (DcgProto.IS_BattleMsg|null);

        /** Resp_Remote2TsGm BattleTask. */
        public BattleTask?: (DcgProto.IS_BattleTask|null);

        /**
         * Creates a new Resp_Remote2TsGm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsGm instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsGm): DcgProto.Resp_Remote2TsGm;

        /**
         * Encodes the specified Resp_Remote2TsGm message. Does not implicitly {@link DcgProto.Resp_Remote2TsGm.verify|verify} messages.
         * @param m Resp_Remote2TsGm message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsGm, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsGm message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsGm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsGm;

        /**
         * Verifies a Resp_Remote2TsGm message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Req_Remote2TsMsg. */
    interface IReq_Remote2TsMsg {

        /** Req_Remote2TsMsg RoomIID */
        RoomIID?: (Long|null);

        /** Req_Remote2TsMsg Msg */
        Msg?: (Uint8Array|null);
    }

    /** Represents a Req_Remote2TsMsg. */
    class Req_Remote2TsMsg implements IReq_Remote2TsMsg {

        /**
         * Constructs a new Req_Remote2TsMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IReq_Remote2TsMsg);

        /** Req_Remote2TsMsg RoomIID. */
        public RoomIID: Long;

        /** Req_Remote2TsMsg Msg. */
        public Msg: Uint8Array;

        /**
         * Creates a new Req_Remote2TsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Req_Remote2TsMsg instance
         */
        public static create(properties?: DcgProto.IReq_Remote2TsMsg): DcgProto.Req_Remote2TsMsg;

        /**
         * Encodes the specified Req_Remote2TsMsg message. Does not implicitly {@link DcgProto.Req_Remote2TsMsg.verify|verify} messages.
         * @param m Req_Remote2TsMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IReq_Remote2TsMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Req_Remote2TsMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Req_Remote2TsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Req_Remote2TsMsg;

        /**
         * Verifies a Req_Remote2TsMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }

    /** Properties of a Resp_Remote2TsMsg. */
    interface IResp_Remote2TsMsg {

        /** Resp_Remote2TsMsg ErrorCode */
        ErrorCode?: (DcgProto.E_ErrorCode|null);

        /** Resp_Remote2TsMsg Msg */
        Msg?: (Uint8Array|null);
    }

    /** Represents a Resp_Remote2TsMsg. */
    class Resp_Remote2TsMsg implements IResp_Remote2TsMsg {

        /**
         * Constructs a new Resp_Remote2TsMsg.
         * @param [p] Properties to set
         */
        constructor(p?: DcgProto.IResp_Remote2TsMsg);

        /** Resp_Remote2TsMsg ErrorCode. */
        public ErrorCode: DcgProto.E_ErrorCode;

        /** Resp_Remote2TsMsg Msg. */
        public Msg: Uint8Array;

        /**
         * Creates a new Resp_Remote2TsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resp_Remote2TsMsg instance
         */
        public static create(properties?: DcgProto.IResp_Remote2TsMsg): DcgProto.Resp_Remote2TsMsg;

        /**
         * Encodes the specified Resp_Remote2TsMsg message. Does not implicitly {@link DcgProto.Resp_Remote2TsMsg.verify|verify} messages.
         * @param m Resp_Remote2TsMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: DcgProto.IResp_Remote2TsMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resp_Remote2TsMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Resp_Remote2TsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DcgProto.Resp_Remote2TsMsg;

        /**
         * Verifies a Resp_Remote2TsMsg message.
         * @param m Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(m: { [k: string]: any }): (string|null);
    }
}
