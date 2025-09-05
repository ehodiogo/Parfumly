from rest_framework.routers import DefaultRouter
from perfumes.views import PerfumeViewSet, NotaViewSet, LinkPerfumeViewSet

router = DefaultRouter()
router.register(r'perfumes', PerfumeViewSet)
router.register(r'notas', NotaViewSet)
router.register(r'links', LinkPerfumeViewSet)

urlpatterns = router.urls
