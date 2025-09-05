from rest_framework import viewsets
from .models import Perfume, Nota, LinkPerfume
from .serializers import PerfumeSerializer, NotaSerializer, LinkPerfumeSerializer

class PerfumeViewSet(viewsets.ModelViewSet):
    queryset = Perfume.objects.all()
    serializer_class = PerfumeSerializer

class NotaViewSet(viewsets.ModelViewSet):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer

class LinkPerfumeViewSet(viewsets.ModelViewSet):
    queryset = LinkPerfume.objects.all()
    serializer_class = LinkPerfumeSerializer
