export interface ChatInformation {
    id: number;
    channel: Channel;
    channel_id: number;
    provider: Provider; 
    provider_id: number;
    contact: null;
    agent: Agent;
    messages: Message[];
    cant_unread: number;
    queue: Queue | null;
    closeOption: null;
    rates: any[];
    sapDetail: null;
    facebook_post: string | null;
    cant_interaction: number;
    stage: null;
    name: null;
    cid: string;
    delivered_time: null;
    end_time: null;
    is_delayed: boolean;
    is_expired: boolean;
    is_pending: boolean;
    is_reopen: boolean;
    fb_post_id: null;
    fb_page_id: null;
    created: Date;
    modified: Date;
    reopenDate: null;
    expiration_date: null;
    status: string;
    feel: string;
    closeDetail: null;
    lastInteraction: null;
    lastCustomerInteraction: Date;
    type: null;
    is_new: boolean;
    chatbot: null;
    promotionEventLine: null;
    ingressChannel: number;
    lead: null;
}

export interface Agent {
    id: number;
    fullName: string;
    user: User;
    is_suspended: boolean;
    suspension_end_time: null;
    is_paused: boolean;
}

export interface User {
    username: string;
}

export interface Channel {
    channel: string;
    value: string;
    name: string;
}

export interface Message {
    id: number;
    agent: Agent | null;
    replied_message: null;
    text: string;
    caption: null;
    url: null | string;
    file: null;
    type: string;
    lng: null;
    lat: null;
    fb_comment_id: null;
    is_hidden: boolean;
    is_deleted: boolean;
    contact: null;
    parent: null;
    direction: string;
    status: string;
    content_type: null;
    image: null;
    is_read: boolean;
    wid: null | string;
    gid: null;
    gsid: null | string;
    created: Date;
    modified: Date;
    is_template: boolean;
    is_internal: boolean;
    referral_headline: null;
    referral_body: null;
    referral_url: null;
    interaction: number;
    promotion_event_line: null;
}

export interface Provider {
    id: number;
    name: string;
    appName: string;
    channel: string;
    cid: string;
}

export interface Queue {
    id: number;
    name: string;
    msg_active: boolean;
    campana_color: null;
    has_tank: boolean;

}


