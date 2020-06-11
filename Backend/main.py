import newspaper
from categories import *
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from langdetect import detect

cred = credentials.Certificate('serviceAccount.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

for category in categories:
    j = 0
    for news_url in category:
        news = newspaper.build(news_url)
        for news.article in news.articles:
            article = news.article
            article.download()
            try:
                article.parse()
                article.nlp()
                title = article.title
                lang = detect(title)
                if lang != 'en':
                    continue
                publish_date = article.publish_date
                authors = article.authors
                top_image = article.top_image
                text = article.text
                keywords = article.keywords
                cat = ""
                for i in range(len(keywords)):
                    if keywords[i] == "corona" or keywords[i] == "covid19" or keywords[i] == "coronavirus" or keywords[i] == "lockdown":
                        cat = "coronavirus"
                    else:
                        cat = Categories[j]
                data = {
                    'Title': title,
                    'Publish_Date': publish_date,
                    'Authors': authors,
                    'Top_Image': top_image,
                    'Text': text,
                    'Keywords': keywords,
                    'Category': cat
                }
                db.collection('news').add(data.copy())
            except newspaper.article.ArticleException:
                continue
    j += 1
