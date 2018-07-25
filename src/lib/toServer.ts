import axios from 'axios';

const kUrl = 'http://13.125.76.112';

export function getBoardList() {

    return axios.get(`${kUrl}/api/board/`);

}

export function getBoardListByUser(user: string | null) {

    return axios.get(`${kUrl}/api/board/user/${user}/`);

}

export function createBoard(title: string, content: string, user: string | null) {
    return axios.post(`${kUrl}/api/board/`, {
        user,
        title,
        content,
    });
}

export function getBoardContentAnalyzePretty(id: number) {

    return axios.get(`${kUrl}/api/board/analyze/${id}/pretty/`);
}

export function getBoardContentCollocationPretty(id: number) {

    return axios.get(`${kUrl}/api/board/collocation/${id}/pretty/`);
}
