this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],b=0,d=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={7:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;return c.push([774,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},106:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(66)),a=r(150),i=r(6),s=r.n(i),l=r(4),u=r(52);r(153),t.a=function(e){var t=e.className,r=e.error,i=e.isLoading,b=e.onRetry;return Object(n.createElement)(l.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:a.a}),label:Object(o.__)("Sorry, an error occurred",'woocommerce'),className:s()("wc-block-api-error",t)},Object(n.createElement)(u.a,{error:r}),b&&Object(n.createElement)(n.Fragment,null,i?Object(n.createElement)(l.Spinner,null):Object(n.createElement)(l.Button,{isSecondary:!0,onClick:b},Object(o.__)("Retry",'woocommerce'))))}},11:function(e,t){e.exports=window.React},12:function(e,t){e.exports=window.wp.blockEditor},123:function(e,t){},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return b}));var n=r(0),o=r(1),c=r(4),a=r(12),i=r(3),s=r(88),l=function(e,t){return Object(n.createElement)(a.BlockControls,null,Object(n.createElement)(c.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit",'woocommerce'),onClick:function(){return t({editMode:!e})},isActive:e}]}))},u=function(e,t){var r=Object(i.getSetting)("showAvatars",!0),a=Object(i.getSetting)("reviewRatingsEnabled",!0);return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.ToggleControl,{label:Object(o.__)("Product rating",'woocommerce'),checked:e.showReviewRating,onChange:function(){return t({showReviewRating:!e.showReviewRating})}}),e.showReviewRating&&!a&&Object(n.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(n.createInterpolateElement)(Object(o.__)("Product rating is disabled in your <a>store settings</a>.",'woocommerce'),{a:Object(n.createElement)("a",{href:Object(i.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),Object(n.createElement)(c.ToggleControl,{label:Object(o.__)("Reviewer name",'woocommerce'),checked:e.showReviewerName,onChange:function(){return t({showReviewerName:!e.showReviewerName})}}),Object(n.createElement)(c.ToggleControl,{label:Object(o.__)("Image",'woocommerce'),checked:e.showReviewImage,onChange:function(){return t({showReviewImage:!e.showReviewImage})}}),Object(n.createElement)(c.ToggleControl,{label:Object(o.__)("Review date",'woocommerce'),checked:e.showReviewDate,onChange:function(){return t({showReviewDate:!e.showReviewDate})}}),Object(n.createElement)(c.ToggleControl,{label:Object(o.__)("Review content",'woocommerce'),checked:e.showReviewContent,onChange:function(){return t({showReviewContent:!e.showReviewContent})}}),e.showReviewImage&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,{label:Object(o.__)("Review image",'woocommerce'),value:e.imageType,options:[{label:Object(o.__)("Reviewer photo",'woocommerce'),value:"reviewer"},{label:Object(o.__)("Product",'woocommerce'),value:"product"}],onChange:function(e){return t({imageType:e})}}),"reviewer"===e.imageType&&!r&&Object(n.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(n.createInterpolateElement)(Object(o.__)("Reviewer photo is disabled in your <a>site settings</a>.",'woocommerce'),{a:Object(n.createElement)("a",{href:Object(i.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))},b=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.ToggleControl,{label:Object(o.__)("Order by",'woocommerce'),checked:e.showOrderby,onChange:function(){return t({showOrderby:!e.showOrderby})}}),Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order Product Reviews by",'woocommerce'),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:function(e){return t({orderby:e})}}),Object(n.createElement)(c.RangeControl,{label:Object(o.__)("Starting Number of Reviews",'woocommerce'),value:e.reviewsOnPageLoad,onChange:function(e){return t({reviewsOnPageLoad:e})},max:20,min:1}),Object(n.createElement)(c.ToggleControl,{label:Object(o.__)("Load more",'woocommerce'),checked:e.showLoadMore,onChange:function(){return t({showLoadMore:!e.showLoadMore})}}),e.showLoadMore&&Object(n.createElement)(c.RangeControl,{label:Object(o.__)("Load More Reviews",'woocommerce'),value:e.reviewsOnLoadMore,onChange:function(e){return t({reviewsOnLoadMore:e})},max:20,min:1}))}},15:function(e,t){e.exports=window.wp.apiFetch},150:function(e,t,r){"use strict";var n=r(0),o=r(28),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},153:function(e,t){},156:function(e,t,r){"use strict";var n=r(0),o=(r(2),r(6)),c=r.n(o),a=r(41),i=r(21);r(216),t.a=Object(i.withInstanceId)((function(e){var t=e.className,r=e.instanceId,o=e.label,i=e.onChange,s=e.options,l=e.screenReaderLabel,u=e.readOnly,b=e.value,d="wc-block-components-sort-select__select-".concat(r);return Object(n.createElement)("div",{className:c()("wc-block-sort-select","wc-block-components-sort-select",t)},Object(n.createElement)(a.a,{label:o,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:d}}),Object(n.createElement)("select",{id:d,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:i,readOnly:u,value:b},s.map((function(e){return Object(n.createElement)("option",{key:e.key,value:e.key},e.label)}))))}))},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),o=r(37),c={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(n.__)("July 15, 2019",'woocommerce'),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(n.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(n.__)("Alice",'woocommerce'),review:"<p>".concat(Object(n.__)("I bought this product last week and I'm very happy with it.",'woocommerce'),"</p>\n"),reviewer_avatar_urls:{48:o.o.defaultAvatar,96:o.o.defaultAvatar},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(n.__)("July 12, 2019",'woocommerce'),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(n.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(n.__)("Bob",'woocommerce'),review:"<p>".concat(Object(n.__)("This product is awesome, I love it!",'woocommerce'),"</p>\n"),reviewer_avatar_urls:{48:o.o.defaultAvatar,96:o.o.defaultAvatar},rating:null,verified:!1}]}}},192:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},193:function(e,t,r){"use strict";var n=r(9),o=r.n(n),c=r(0),a=r(12),i=(r(215),r(85));t.a=function(e){var t=e.attributes;return Object(c.createElement)("div",o()({},a.useBlockProps.save({className:Object(i.a)(t)}),Object(i.b)(t)))}},199:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(7)),a=r(4),i=r(12),s=r(17),l=r.n(s),u=r(18),b=r.n(u),d=r(19),p=r.n(d),w=r(20),m=r.n(w),v=r(10),g=r.n(v),f=r(11),h=r(3),O=r(106),y=r(41),j=(r(256),function(e){var t=e.onClick,r=e.label,o=e.screenReaderLabel;return Object(n.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},Object(n.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(n.createElement)(y.a,{label:r,screenReaderLabel:o})))});j.defaultProps={label:Object(o.__)("Load more",'woocommerce')};var _=j,k=r(156),R=(r(253),function(e){var t=e.onChange,r=e.readOnly,c=e.value;return Object(n.createElement)(k.a,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:Object(o.__)("Order by",'woocommerce'),onChange:t,options:[{key:"most-recent",label:Object(o.__)("Most recent",'woocommerce')},{key:"highest-rating",label:Object(o.__)("Highest rating",'woocommerce')},{key:"lowest-rating",label:Object(o.__)("Lowest rating",'woocommerce')}],readOnly:r,screenReaderLabel:Object(o.__)("Order reviews by",'woocommerce'),value:c})}),E=r(5),P=r.n(E),S=r(6),C=r.n(S),N=r(13),T=r.n(N),x=r(236),L=r.n(x),A=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=L()(e,{suffix:r,limit:t});return n.html},M=function(e,t,r,n){var o=I(e,t,r);return A(e,o-n.length,n)},I=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=A(e,n.middle),n=D(n,t.clientHeight,r);return n.middle},D=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e};var B=function(e){p()(c,e);var t,r,o=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=g()(t);if(r){var o=g()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return m()(this,e)});function c(e){var t;return l()(this,c),(t=o.apply(this,arguments)).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},t.reviewSummary=Object(f.createRef)(),t.reviewContent=Object(f.createRef)(),t.getButton=t.getButton.bind(T()(t)),t.onClick=t.onClick.bind(T()(t)),t}return b()(c,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:M(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,o=t.lessText,c=t.moreText,a=e?o:c;if(a)return Object(n.createElement)("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},a)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,o=t.summary,c=t.clampEnabled,a=t.isExpanded;return r?!1===c?Object(n.createElement)("div",{className:e},Object(n.createElement)("div",{ref:this.reviewContent},r)):Object(n.createElement)("div",{className:e},(!a||null===c)&&Object(n.createElement)("div",{ref:this.reviewSummary,"aria-hidden":a,dangerouslySetInnerHTML:{__html:o}}),(a||null===c)&&Object(n.createElement)("div",{ref:this.reviewContent,"aria-hidden":!a},r),this.getButton()):null}}]),c}(f.Component);B.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(o.__)("Read more",'woocommerce'),lessText:Object(o.__)("Read less",'woocommerce'),className:"read-more-content"};var H=B;r(255);var G=function(e){var t=e.attributes,r=e.review,c=void 0===r?{}:r,a=t.imageType,i=t.showReviewDate,s=t.showReviewerName,l=t.showReviewImage,u=t.showReviewRating,b=t.showReviewContent,d=t.showProductName,p=c.rating,w=!Object.keys(c).length>0,m=Number.isFinite(p)&&u;return Object(n.createElement)("li",{className:C()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":w,"wc-block-components-review-list-item__item--has-image":l}),"aria-hidden":w},(d||i||s||l||m)&&Object(n.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},l&&function(e,t,r){var c,a;return r||!e?Object(n.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):Object(n.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?Object(n.createElement)("img",{"aria-hidden":"true",alt:(null===(c=e.product_image)||void 0===c?void 0:c.alt)||"",src:(null===(a=e.product_image)||void 0===a?void 0:a.thumbnail)||""}):Object(n.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&Object(n.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:Object(o.__)("Verified buyer",'woocommerce')},Object(o.__)("Verified buyer",'woocommerce')))}(c,a,w),(d||s||m||i)&&Object(n.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},m&&function(e){var t=e.rating,r={width:t/5*100+"%"},c=Object(o.sprintf)(
/* translators: %f is referring to the average rating value */
Object(o.__)("Rated %f out of 5",'woocommerce'),t);return Object(n.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},Object(n.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":c},Object(n.createElement)("span",{style:r},c)))}(c),d&&function(e){return Object(n.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},Object(n.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(c),s&&function(e){var t=e.reviewer,r=void 0===t?"":t;return Object(n.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},r)}(c),i&&function(e){var t=e.date_created,r=e.formatted_date_created;return Object(n.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(c))),b&&function(e){return Object(n.createElement)(H,{maxLines:10,moreText:Object(o.__)("Read full review",'woocommerce'),lessText:Object(o.__)("Hide full review",'woocommerce'),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},Object(n.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(c))};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){P()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(254);var z=function(e){var t=e.attributes,r=e.reviews,o=Object(h.getSetting)("showAvatars",!0),c=Object(h.getSetting)("reviewRatingsEnabled",!0),a=(o||"product"===t.imageType)&&t.showReviewImage,i=c&&t.showReviewRating,s=V(V({},t),{},{showReviewImage:a,showReviewRating:i});return Object(n.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?Object(n.createElement)(G,{attributes:s}):r.map((function(e,t){return Object(n.createElement)(G,{key:e.id||t,attributes:s,review:e})})))},W=r(9),U=r.n(W),J=r(29),q=r.n(J),Y=r(22),K=r.n(Y),Q=r(34),X=r.n(Q),Z=r(85),$=r(42);var ee=function(e){var t=function(t){p()(a,t);var r,o,c=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g()(r);if(o){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m()(this,e)});function a(){var e;l()(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=c.call.apply(c,[this].concat(r)),P()(T()(e),"isPreview",!!e.props.attributes.previewReviews),P()(T()(e),"delayedAppendReviews",e.props.delayFunction(e.appendReviews)),P()(T()(e),"isMounted",!1),P()(T()(e),"state",{error:null,loading:!0,reviews:e.isPreview?e.props.attributes.previewReviews:[],totalReviews:e.isPreview?e.props.attributes.previewReviews.length:0}),P()(T()(e),"setError",function(){var t=q()(K.a.mark((function t(r){var n,o;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isMounted){t.next=2;break}return t.abrupt("return");case 2:return n=e.props.onReviewsLoadError,t.next=5,Object($.a)(r);case 5:o=t.sent,e.setState({reviews:[],loading:!1,error:o}),n(o);case 8:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}()),e}return b()(a,[{key:"componentDidMount",value:function(){this.isMounted=!0,this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!X()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnmount",value:function(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,c=t.productId,a={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(a.category_id=Array.isArray(r)?r.join(","):r),c&&(a.product_id=c),a}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),Object(Z.c)(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.isMounted&&e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,o=r.error,c=r.loading,a=r.reviews,i=r.totalReviews;return Object(n.createElement)(e,U()({},this.props,{error:o,isLoading:c,reviews:a.slice(0,t),totalReviews:i}))}}]),a}(f.Component);P()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,o=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(o," )"),t}(function(e){p()(i,e);var t,r,c=(t=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=g()(t);if(r){var o=g()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return m()(this,e)});function i(){return l()(this,i),c.apply(this,arguments)}return b()(i,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.error,c=e.isLoading,i=e.noReviewsPlaceholder,s=e.reviews,l=e.totalReviews;if(r)return Object(n.createElement)(O.a,{className:"wc-block-featured-product-error",error:r,isLoading:c});if(0===s.length&&!c)return Object(n.createElement)(i,{attributes:t});var u=Object(h.getSetting)("reviewRatingsEnabled",!0);return Object(n.createElement)(a.Disabled,null,t.showOrderby&&u&&Object(n.createElement)(R,{readOnly:!0,value:t.orderby}),Object(n.createElement)(z,{attributes:t,reviews:s}),t.showLoadMore&&l>s.length&&Object(n.createElement)(_,{screenReaderLabel:Object(o.__)("Load more reviews",'woocommerce')}))}}]),i}(f.Component));t.a=function(e){var t=e.attributes,r=e.icon,s=e.name,l=e.noReviewsPlaceholder,u=t.categoryIds,b=t.productId,d=t.reviewsOnPageLoad,p=t.showProductName,w=t.showReviewDate,m=t.showReviewerName,v=t.showReviewContent,g=t.showReviewImage,f=t.showReviewRating,h=Object(Z.d)(t.orderby),O=h.order,y=h.orderby,j=!(v||f||w||m||g||p),_=Object(i.useBlockProps)({className:Object(Z.a)(t)});return j?Object(n.createElement)(a.Placeholder,{icon:r,label:s},Object(o.__)("The content for this block is hidden due to block settings.",'woocommerce')):Object(n.createElement)("div",_,Object(n.createElement)(ee,{attributes:t,categoryIds:u,delayFunction:function(e){return Object(c.debounce)(e,400)},noReviewsPlaceholder:l,orderby:y,order:O,productId:b,reviewsToDisplay:d}))}},21:function(e,t){e.exports=window.wp.compose},215:function(e,t){},216:function(e,t){},22:function(e,t){e.exports=window.regeneratorRuntime},253:function(e,t){},254:function(e,t){},255:function(e,t){},256:function(e,t){},26:function(e,t){e.exports=window.wp.blocks},28:function(e,t){e.exports=window.wp.primitives},3:function(e,t){e.exports=window.wc.wcSettings},34:function(e,t){e.exports=window.wp.isShallowEqual},37:function(e,t,r){"use strict";r.d(t,"o",(function(){return c})),r.d(t,"m",(function(){return a})),r.d(t,"l",(function(){return i})),r.d(t,"n",(function(){return s})),r.d(t,"j",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return d})),r.d(t,"k",(function(){return p})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return m})),r.d(t,"h",(function(){return v})),r.d(t,"a",(function(){return g})),r.d(t,"i",(function(){return f})),r.d(t,"b",(function(){return h}));var n,o=r(3),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=c.pluginUrl+"images/",i=c.pluginUrl+"build/",s=c.buildPhase,l=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,u=o.STORE_PAGES.checkout.id,b=o.STORE_PAGES.checkout.permalink,d=o.STORE_PAGES.privacy.permalink,p=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),w=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),m=o.STORE_PAGES.cart.permalink,v=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("shippingCountries",{})),g=Object(o.getSetting)("allowedCountries",{}),f=Object(o.getSetting)("shippingStates",{}),h=Object(o.getSetting)("allowedStates",{})},4:function(e,t){e.exports=window.wp.components},41:function(e,t,r){"use strict";var n=r(5),o=r.n(n),c=r(0),a=r(6),i=r.n(a);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,a=e.wrapperProps,s=void 0===a?{}:a,u=null!=r,b=null!=n;return!u&&b?(t=o||"span",s=l(l({},s),{},{className:i()(s.className,"screen-reader-text")}),Object(c.createElement)(t,s,n)):(t=o||c.Fragment,u&&b&&r!==n?Object(c.createElement)(t,s,Object(c.createElement)("span",{"aria-hidden":"true"},r),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,s,r))}},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l}));var n=r(29),o=r.n(n),c=r(22),a=r.n(c),i=r(1),s=function(){var e=o()(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_x){return e.apply(this,arguments)}}(),l=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(i.__)("Something went wrong. Please contact us to get assistance.",'woocommerce')}},48:function(e,t){e.exports=window.wp.escapeHtml},52:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(48));t.a=function(e){var t,r,a,i=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=i).message,a=t.type,r?"general"===a?Object(n.createElement)("span",null,Object(o.__)("The following error was returned",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===a?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},66:function(e,t,r){"use strict";var n=r(5),o=r.n(n),c=r(16),a=r.n(c),i=r(0),s=["srcElement","size"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=a()(e,s);return Object(i.isValidElement)(t)?Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},7:function(e,t){e.exports=window.lodash},774:function(e,t,r){e.exports=r(864)},85:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(15),o=r.n(n),c=r(6),a=r.n(c),i=r(3),s=function(e){if(Object(i.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=function(e){return o()({path:"/wc/store/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))},u=function(e){var t=e.className,r=e.categoryIds,n=e.productId,o=e.showReviewDate,c=e.showReviewerName,i=e.showReviewContent,s=e.showProductName,l=e.showReviewImage,u=e.showReviewRating,b="wc-block-all-reviews";return n&&(b="wc-block-reviews-by-product"),Array.isArray(r)&&(b="wc-block-reviews-by-category"),a()(b,t,{"has-image":l,"has-name":c,"has-date":o,"has-rating":u,"has-content":i,"has-product-name":s})},b=function(e){var t=e.categoryIds,r=e.imageType,n=e.orderby,o=e.productId,c={"data-image-type":r,"data-orderby":n,"data-reviews-on-page-load":e.reviewsOnPageLoad,"data-reviews-on-load-more":e.reviewsOnLoadMore,"data-show-load-more":e.showLoadMore,"data-show-orderby":e.showOrderby};return o&&(c["data-product-id"]=o),Array.isArray(t)&&(c["data-category-ids"]=t.join(",")),c}},864:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n),c=r(0),a=r(1),i=r(26),s=r(66),l=r(28),u=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"})),b=(r(215),r(12)),d=r(4),p=(r(2),r(199)),w=function(){return Object(c.createElement)(d.Placeholder,{className:"wc-block-all-reviews",icon:Object(c.createElement)(s.a,{srcElement:u,className:"block-editor-block-icon"}),label:Object(a.__)("All Reviews",'woocommerce')},Object(a.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.",'woocommerce'))},m=r(144),v=r(192),g=r(193),f=r(161);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(i.registerBlockType)("woocommerce/all-reviews",{apiVersion:2,title:Object(a.__)("All Reviews",'woocommerce'),icon:{src:Object(c.createElement)(s.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce",'woocommerce')],description:Object(a.__)("Show a list of all product reviews.",'woocommerce'),supports:{html:!1,color:{background:!1},typography:{fontSize:!0}},example:O(O({},f.a),{},{attributes:O(O({},f.a.attributes),{},{showProductName:!0})}),attributes:O(O({},v.a),{},{showProductName:{type:"boolean",default:!0}}),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,r=e.instance;return"woocommerce_recent_reviews"===t&&!(null==r||!r.raw)},transform:function(e){var t=e.instance;return Object(i.createBlock)("woocommerce/all-reviews",{reviewsOnPageLoad:t.raw.number,imageType:"product",showLoadMore:!1,showOrderby:!1,showReviewDate:!1,showReviewContent:!1})}}]},edit:function(e){var t=e.attributes,r=e.setAttributes;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(b.InspectorControls,{key:"inspector"},Object(c.createElement)(d.PanelBody,{title:Object(a.__)("Content",'woocommerce')},Object(c.createElement)(d.ToggleControl,{label:Object(a.__)("Product name",'woocommerce'),checked:t.showProductName,onChange:function(){return r({showProductName:!t.showProductName})}}),Object(m.b)(t,r)),Object(c.createElement)(d.PanelBody,{title:Object(a.__)("List Settings",'woocommerce')},Object(m.c)(t,r))),Object(c.createElement)(p.a,{attributes:t,icon:Object(c.createElement)(s.a,{icon:u,className:"block-editor-block-icon"}),name:Object(a.__)("All Reviews",'woocommerce'),noReviewsPlaceholder:w}))},save:g.a})},88:function(e,t,r){"use strict";var n=r(9),o=r.n(n),c=r(17),a=r.n(c),i=r(18),s=r.n(i),l=r(13),u=r.n(l),b=r(19),d=r.n(b),p=r(20),w=r.n(p),m=r(10),v=r.n(m),g=r(0),f=r(7),h=r(6),O=r.n(h),y=r(4),j=r(21);r(123);var _=function(e){d()(c,e);var t,r,n=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var o=v()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return w()(this,e)});function c(){var e;return a()(this,c),(e=n.apply(this,arguments)).onClick=e.onClick.bind(u()(e)),e}return s()(c,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.label,c=r.checked,a=r.instanceId,i=r.className,s=r.help,l=r.options,u=r.value,b="inspector-toggle-button-control-".concat(a);return s&&(e=Object(f.isFunction)(s)?s(c):s),Object(g.createElement)(y.BaseControl,{id:b,help:e,className:O()("components-toggle-button-control",i)},Object(g.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},n),Object(g.createElement)(y.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,r){var c={};return u===e.value?(c.isPrimary=!0,c["aria-pressed"]=!0):(c.isSecondary=!0,c["aria-pressed"]=!1),Object(g.createElement)(y.Button,o()({key:"".concat(e.label,"-").concat(e.value,"-").concat(r),value:e.value,onClick:t.onClick,"aria-label":n+": "+e.label},c),e.label)}))))}}]),c}(g.Component);t.a=Object(j.withInstanceId)(_)}});