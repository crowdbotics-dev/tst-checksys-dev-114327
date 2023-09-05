from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Mod1ViewSet,SafehouseViewSet,Mod1ViewSet,SafehouseViewSet,Mod1ViewSet,SafehouseViewSet,Mod1ViewSet,SafehouseViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('mod1', Mod1ViewSet )
router.register('safehouse', SafehouseViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
