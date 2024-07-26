import{load} from '@/assets/js/array-store'
import {PLAY_MODE, FAVORITE_KEY,SEARCH_KEY ,PLAY_KEY} from '@/assets/js/constant'

const state={
    sequenceList:[],
    playlist:[],
    playing:false,
    playMode:PLAY_MODE.sequence,
    currentIndex:0,
    fullScreen:false,
    favoriteList:[],
    searchHistory:load(SEARCH_KEY),
    playHistory:[]
}

export default state