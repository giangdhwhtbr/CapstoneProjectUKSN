"use strict";
const BadwordRoutes = require('../api/badword/badword-routes');
const KnowledgeRoutes = require('../api/knowledge/knowledge-routes');
const usersRoutes = require('../api/user/user-route');
const StaticDispatcher = require('../commons/static/index');
const RequestRoutes = require('../api/request/request-routes');
const OfferRoutes = require('../api/offer/offer-routes');
const KSpaceRoutes = require('../api/kspace/kspace-route');
const ChatRoomRoutes = require('../api/chatRoom/chatRoom-routes');
const MessageRoutes = require('../api/message/message-routes');
const FriendShipRoutes = require('../api/friendship/friendship-routes');
const NotificationRoutes = require('../api/notification/notification-routes');
const ArticleRoutes = require('../api/article/article-router');
const MediaRoutes = require('../api/media/media-router');
const TagRoutes = require('../api/tags/tag-router');

module.exports = class Routes {
    static init(app, router) {
        usersRoutes.init(router);
        RequestRoutes.init(router);
        OfferRoutes.init(router);
        BadwordRoutes.init(router);
        KnowledgeRoutes.init(router);
        KSpaceRoutes.init(router);
        ChatRoomRoutes.init(router);
        MessageRoutes.init(router);
        FriendShipRoutes.init(router);
        NotificationRoutes.init(router);
        ArticleRoutes.init(router);
        MediaRoutes.init(router);
        TagRoutes.init(router);


        router
            .route('*')
            .get(StaticDispatcher.sendIndex);
        app.use('/', router);
    }
}
