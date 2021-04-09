import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID N22qCISTPZOVe7s_61YoLQMjrdnlswgl0ZjqRp3bM5M'

    }
});