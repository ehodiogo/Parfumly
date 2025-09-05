from rest_framework import serializers
from .models import Perfume, Nota, LinkPerfume

class NotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nota
        fields = ["id", "nome"]

class LinkPerfumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkPerfume
        fields = ["id", "nome", "url"]

class PerfumeSerializer(serializers.ModelSerializer):
    notas_cabeca = NotaSerializer(many=True, read_only=True)
    notas_corpo = NotaSerializer(many=True, read_only=True)
    notas_fundo = NotaSerializer(many=True, read_only=True)
    links = LinkPerfumeSerializer(many=True, read_only=True)

    class Meta:
        model = Perfume
        fields = "__all__"
