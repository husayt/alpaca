/// <reference types="ws" />
import WebSocket from 'isomorphic-ws';
import EventEmitter from 'eventemitter3';
import { AccountUpdate, AggregateMinute, DefaultCredentials, Quote, Trade, TradeUpdate } from './entities.js';
export declare interface AlpacaStreamEvents {
    open: (connection: AlpacaStream) => void;
    close: (connection: AlpacaStream) => void;
    authenticated: (connection: AlpacaStream) => void;
    error: (error: WebSocket.ErrorEvent) => void;
    message: (data: Object) => void;
    trade: (data: Trade) => void;
    trade_updates: (data: TradeUpdate) => void;
    account_updates: (data: AccountUpdate) => void;
    quote: (data: Quote) => void;
    aggregate_minute: (data: AggregateMinute) => void;
}
export declare class AlpacaStream extends EventEmitter {
    protected params: {
        credentials: DefaultCredentials;
        stream: 'account' | 'market_data';
    };
    private host;
    private connection;
    private subscriptions;
    private authenticated;
    constructor(params: {
        credentials: DefaultCredentials;
        stream: 'account' | 'market_data';
    });
    on<U extends keyof AlpacaStreamEvents>(event: U | string | symbol | any, listener: AlpacaStreamEvents[U]): this;
    send(message: any): this;
    subscribe(channels: string[]): this;
    unsubscribe(channels: string[]): this;
}
