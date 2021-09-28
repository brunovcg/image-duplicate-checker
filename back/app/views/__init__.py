from flask import Flask


def init_app(app: Flask):

    from app.views.routes_view import home_view
    home_view(app)

    return app
